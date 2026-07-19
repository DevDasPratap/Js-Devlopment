import { loadChatMessages, saveChatMessages } from "@/features/ai/actions/chat-store";
import { getChatModel } from "@/features/ai/utils/model";
import { requireUser } from "@/features/auth/action/require-user";
import { prisma } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { 
  convertToModelMessages, 
  createIdGenerator, 
  createUIMessageStreamResponse, 
  streamText, 
  toUIMessageStream, 
  type UIMessage
} from "ai";
import { z } from "zod";

/**
 * Executes a web search using Tavily API if available, or falls back to DuckDuckGo HTML scraping.
 */
async function runWebSearch(query: string) {
  const apiKey = process.env.TAVILY_API_KEY;
  if (apiKey) {
    try {
      const response = await fetch("https://api.tavily.com/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          api_key: apiKey,
          query,
          search_depth: "basic",
          include_answer: false,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        return data.results.map((r: any) => ({
          title: r.title,
          url: r.url,
          content: r.content,
        }));
      }
    } catch (err) {
      console.error("Tavily search error, falling back:", err);
    }
  }

  // Fallback: Scrape DuckDuckGo HTML search results
  try {
    const url = `https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`;
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
    });
    if (response.ok) {
      const html = await response.text();
      const results: { title: string; url: string; content: string }[] = [];
      
      const snippetMatches = Array.from(html.matchAll(/<a class="result__snippet"[^>]*>([\s\S]*?)<\/a>/g));
      const urlMatches = Array.from(html.matchAll(/<a class="result__url"[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g));
      
      for (let i = 0; i < Math.min(5, urlMatches.length); i++) {
        const rawUrl = urlMatches[i][1];
        const cleanUrl = rawUrl.includes("uddg=") 
          ? decodeURIComponent(rawUrl.split("uddg=")[1].split("&")[0])
          : rawUrl;
        const title = urlMatches[i][2].replace(/<[^>]*>/g, "").trim();
        const content = snippetMatches[i] ? snippetMatches[i][1].replace(/<[^>]*>/g, "").trim() : "";
        results.push({ title, url: cleanUrl, content });
      }
      if (results.length > 0) return results;
    }
  } catch (err) {
    console.error("DuckDuckGo HTML search fallback error:", err);
  }

  // Final fallback helper info
  return [
    {
      title: `${query} - Search Results`,
      url: "https://example.com/search",
      content: `No active internet connection or search providers available. Fallback placeholder for "${query}".`,
    }
  ];
}

/**
 * POST /api/chat — Streams an AI assistant reply for a conversation.
 * Supports tool calling for web search and multi-step reasoning.
 */
export async function POST(req: Request) {
    await auth.protect();

    const { message, id }: { message: UIMessage, id: string } = await req.json();

    if (!message || !id) {
        return new Response("Missing message or conversation id", { status: 400 });
    }

    const user = await requireUser();

    const conversation = await prisma.conversation.findFirst({
        where: {
            id,
            userId: user.id
        }
    });

    if (!conversation) {
        return new Response("Conversation not found", { status: 404 });
    }

    const previousMessages = await loadChatMessages(id);

    const alreadySaved = previousMessages.some(
        (storedMessage)=>storedMessage.id === message.id
    )

    const messages = alreadySaved ? previousMessages : [...previousMessages, message];

    if(!alreadySaved){
        await saveChatMessages(id, [message]);
    }

    const result = streamText({
        model: getChatModel(conversation.model),
        system: (conversation.systemPrompt ?? "You are ChaiGpt, a helpful assistant.") + 
          "\nUse the webSearch tool whenever the user asks for real-time information, recent/current events, news, or if you need external validation to answer accurately. Always state when you search.",
        messages: await convertToModelMessages(messages),
        tools: {
          webSearch: {
            description: "Search the web for real-time information, news, current events, or general facts.",
            parameters: z.object({
              query: z.string().describe("The search query to run"),
            }),
            execute: async ({ query }: { query: string }) => {
              return await runWebSearch(query);
            }
          }
        },
        maxSteps: 5, // Allow multi-step execution to search first and then construct response
    } as any);

    result.consumeStream();

    return createUIMessageStreamResponse({
        stream: toUIMessageStream({
           stream: result.stream,
           originalMessages: messages,
           generateMessageId: createIdGenerator({prefix:"msg" , size:16}),
           onEnd: async({messages: finalMessages}) => {
            try {
                await saveChatMessages(id, finalMessages, {updateTitle: false});
            } catch (error) {
                console.error("Failed to save final chat messages:", error);
            }
           }
        })
    });
}
"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { DefaultChatTransport, type UIMessage } from "ai";
import { useChat } from "@ai-sdk/react";
import { GitFork, ChevronDown } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { ChatEmpty } from "./chat-empty";
import { ChatMessages } from "./chat-messages";
import { ChatComposer } from "./chat-composer";
import { useConversations } from "../hooks/use-conversation";
import { queryKeys } from "../utils/query-keys";
import { listConversationBranches } from "@/features/conversation/actions/conversation-actions";

type ConversationViewProps = {
  conversationId: string;
  initialMessages: UIMessage[];
};

/**
 * Main chat view — header, message list (or empty state), and composer with streaming.
 * Includes tool calling execution rendering and branching tree switcher.
 */
export const ConversationView = ({
  conversationId,
  initialMessages,
}: ConversationViewProps) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { data: conversations } = useConversations();

  // Load sibling and child branches sharing the same conversation rootId
  const { data: branches } = useQuery({
    queryKey: ["conversation-branches", conversationId],
    queryFn: () => listConversationBranches(conversationId),
  });

  const transport = useMemo(
    () =>
      new DefaultChatTransport({
        api: "/api/chat",
        prepareSendMessagesRequest: ({ id, messages }) => ({
          body: {
            id,
            message: messages.at(-1),
          },
        }),
      }),
    []
  );

  const { messages, sendMessage, status } = useChat({
    id: conversationId,
    messages: initialMessages,
    transport,
    onFinish: () => {
      void queryClient.invalidateQueries({
        queryKey: queryKeys.conversations.all,
      });
      void queryClient.invalidateQueries({
        queryKey: ["conversation-branches", conversationId],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const title =
    conversations?.find((item) => item.id === conversationId)?.title ?? "Chat";

  return (
    <div className="flex h-full min-h-0 flex-1 flex-col">
      {/* Header with Sidebar trigger and branch selector */}
      <header className="flex h-14 shrink-0 items-center justify-between border-b px-3 bg-background/95 backdrop-blur">
        <div className="flex items-center gap-2 truncate">
          <SidebarTrigger />
          <Separator orientation="vertical" className="mx-1 h-4" />
          <h1 className="truncate text-sm font-semibold max-w-[200px] sm:max-w-[300px]">
            {title}
          </h1>

          {branches && branches.length > 1 && (
            <>
              <Separator orientation="vertical" className="mx-1 h-4" />
              <DropdownMenu>
                <DropdownMenuTrigger
                  className="inline-flex items-center justify-center rounded-md text-[11px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-indigo-500/20 bg-indigo-950/10 hover:bg-indigo-950/20 text-indigo-400 h-7 gap-1 px-2.5 transition-colors cursor-pointer"
                >
                  <GitFork className="h-3 w-3" />
                  <span>Branches ({branches.length})</span>
                  <ChevronDown className="h-3 w-3 text-muted-foreground" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  {branches.map((b) => (
                    <DropdownMenuItem
                      key={b.id}
                      onClick={() => router.push(`/c/${b.id}`)}
                      className={cn(
                        "text-xs cursor-pointer flex flex-col items-start gap-0.5",
                        b.id === conversationId
                          ? "bg-indigo-50/5 dark:bg-indigo-950/30 font-medium text-indigo-400"
                          : ""
                      )}
                    >
                      <span className="truncate w-full">{b.title}</span>
                      {b.parentId && (
                        <span className="text-[10px] text-muted-foreground">
                          Branched from:{" "}
                          {branches.find((p) => p.id === b.parentId)?.title ||
                            "Parent"}
                        </span>
                      )}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          )}
        </div>
      </header>

      {messages.length === 0 ? (
        <ChatEmpty />
      ) : (
        <ChatMessages
          messages={messages}
          status={status}
          conversationId={conversationId}
        />
      )}

      <ChatComposer
        onSend={(text) => {
          void sendMessage({ text });
        }}
        isSending={status !== "ready"}
        autoFocus
      />
    </div>
  );
};

"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { type UIMessage } from "ai";
import type { ChatStatus } from "ai";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { GitFork, Globe, Search, Check } from "lucide-react";

import {
  Conversation,
  ConversationContent,
} from "@/components/ai-elements/conversation";
import {
  Message,
  MessageContent,
  MessageResponse,
} from "@/components/ai-elements/message";
import { Loader } from "@/components/ai-elements/loader";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { createBranch } from "@/features/conversation/actions/conversation-actions";
import { queryKeys } from "@/features/conversation/utils/query-keys";

type ChatMessagesProps = {
  messages: UIMessage[];
  status: ChatStatus;
  conversationId: string;
};

export function ChatMessages({ messages, status, conversationId }: ChatMessagesProps) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [isPending, startTransition] = useTransition();
  const [selectedMessageId, setSelectedMessageId] = useState<string | null>(null);
  const [branchTitle, setBranchTitle] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const isWaiting = status === "submitted" && messages.at(-1)?.role === "user";

  const handleOpenBranchDialog = (message: UIMessage) => {
    setSelectedMessageId(message.id);
    
    // Fallback text extraction for pre-populating branch name
    const textPart = message.parts.find(p => p.type === "text");
    const previewText = textPart?.type === "text" ? textPart.text.slice(0, 30) : "Branch";
    
    setBranchTitle(`Branch: ${previewText}...`);
    setIsDialogOpen(true);
  };

  const handleCreateBranch = () => {
    if (!selectedMessageId) return;

    startTransition(async () => {
      try {
        const { newConversationId } = await createBranch(
          conversationId,
          selectedMessageId,
          branchTitle
        );

        // Invalidate conversation list cache so sidebar updates immediately
        await queryClient.invalidateQueries({
          queryKey: queryKeys.conversations.all,
        });

        toast.success("Conversation branched successfully!");
        setIsDialogOpen(false);
        
        // Redirect to new conversation branch route
        router.push(`/c/${newConversationId}`);
      } catch (err: any) {
        console.error("Branching error:", err);
        toast.error(err.message || "Failed to create branch");
      }
    });
  };

  return (
    <>
      <Conversation>
      <ConversationContent className="py-8">
        {messages.map((message) => (
          <div key={message.id} className="group relative flex w-full flex-col">
            <Message from={message.role}>
              <MessageContent>
                {/* Dynamically render message parts: text and tools */}
                {message.parts.map((part: any, idx) => {
                  if (part.type === "text") {
                    return <MessageResponse key={idx}>{part.text}</MessageResponse>;
                  }

                  // Under Vercel AI SDK v7, tool invocations are flat parts prefixing with "tool-"
                  if (part.type && part.type.startsWith("tool-")) {
                    const isDone = part.state === "output-available" || part.output !== undefined;
                    const query = part.input?.query || "";
                    const results = part.output;

                    return (
                      <div
                        key={idx}
                        className="my-3 flex flex-col gap-2.5 rounded-xl border border-dashed border-indigo-500/30 bg-indigo-950/20 p-4 font-sans text-xs text-slate-300"
                      >
                        <div className="flex items-center gap-2 font-medium text-indigo-400">
                          {isDone ? (
                            <Check className="h-3.5 w-3.5 text-emerald-400" />
                          ) : (
                            <Search className="h-3.5 w-3.5 animate-pulse text-indigo-400" />
                          )}
                          <Globe className="h-3.5 w-3.5" />
                          <span>Searched the Web: "{query}"</span>
                        </div>

                        {!isDone && (
                          <div className="flex items-center gap-1.5 text-indigo-300/70 animate-pulse pl-5">
                            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                            <span>Retrieving real-time sources...</span>
                          </div>
                        )}

                        {isDone && results && (
                          <div className="text-[11px] leading-relaxed text-slate-400 bg-slate-900/60 p-3 rounded-lg border border-slate-800 line-clamp-3 pl-5">
                            {Array.isArray(results) ? (
                              <div className="flex flex-col gap-1.5">
                                {results.slice(0, 3).map((res: any, idx: number) => (
                                  <div key={idx} className="border-b border-slate-800/80 pb-1.5 last:border-0 last:pb-0">
                                    <a
                                      href={res.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="font-medium text-indigo-400 hover:underline"
                                    >
                                      {res.title}
                                    </a>
                                    <p className="mt-0.5 text-slate-400/90 text-[10.5px]">{res.content}</p>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <span>{JSON.stringify(results)}</span>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  }

                  return null;
                })}
              </MessageContent>

              {/* Message Toolbar Actions / Branching button */}
              <div className="absolute right-4 top-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 flex gap-1">
                <Button
                  variant="ghost"
                  size="icon-xs"
                  title="Fork conversation from here"
                  onClick={() => handleOpenBranchDialog(message)}
                  className="h-6 w-6 rounded bg-background/80 shadow border hover:bg-muted text-muted-foreground hover:text-indigo-400 transition"
                >
                  <GitFork className="h-3.5 w-3.5" />
                </Button>
              </div>
            </Message>
          </div>
        ))}

        {isWaiting ? (
          <Message from="assistant">
            <MessageContent>
              <Loader />
            </MessageContent>
          </Message>
        ) : null}
      </ConversationContent>
    </Conversation>

    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-indigo-400">
              <GitFork className="h-5 w-5" />
              <span>Fork Chat Branch</span>
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-xs mt-1">
              Create a new branching conversation starting from the selected message. The branch will share the parent conversation history up to this point, allowing you to explore a new path.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="branchName" className="text-xs font-semibold text-slate-400">
                Branch Name
              </label>
              <Input
                id="branchName"
                value={branchTitle}
                onChange={(e) => setBranchTitle(e.target.value)}
                placeholder="My custom branch title"
                className="col-span-3"
                disabled={isPending}
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsDialogOpen(false)}
              disabled={isPending}
              size="sm"
            >
              Cancel
            </Button>
            <Button
              onClick={handleCreateBranch}
              disabled={isPending || !branchTitle.trim()}
              className="bg-indigo-600 hover:bg-indigo-500 text-white"
              size="sm"
            >
              {isPending ? "Forking..." : "Create Branch"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

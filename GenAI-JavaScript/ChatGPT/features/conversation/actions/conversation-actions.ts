"use server";

import { requireUser } from "@/features/auth/action/require-user";
import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

/** Shape of a conversation row returned in the sidebar list. */
export type ConversationListItem = {
    id: string;
    title: string;
    isPinned: boolean;
    isArchived: boolean;
    lastMessageAt: Date;
    createdAt: Date;
    updatedAt: Date;
};


/**
 * Verifies that a conversation exists and belongs to the given user.
 *
 * @throws {Error} When the conversation is not found or not owned by the user.
 */
async function assertOwnsConversation(conversationId: string, userId: string) {
    const conversation = await prisma.conversation.findFirst({
        where: {
            id: conversationId,
            userId
        }
    });

    if (!conversation) {
        throw new Error("Conversation not found")
    }

    return conversation
}

/**
 * Fetches a single conversation owned by the current user.
 *
 * @param conversationId - The conversation to load.
 * @throws {Error} When the conversation is not found.
 */
export async function getConversation(conversationId: string) {
    const user = await requireUser();
    return assertOwnsConversation(conversationId, user.id)
}


/**
 * Lists non-archived conversations for the current user.
 * Pinned conversations appear first, then sorted by most recent activity.
 */
export async function listConversations(): Promise<ConversationListItem[]> {
    const user = await requireUser();

    return prisma.conversation.findMany({
        where: { userId: user.id, isArchived: false },
        orderBy: [{ isPinned: "desc" }, { lastMessageAt: "desc" }],
        select: {
            id: true,
            title: true,
            isPinned: true,
            isArchived: true,
            lastMessageAt: true,
            createdAt: true,
            updatedAt: true,
        },
    })
}

/**
 * Creates a new conversation for the current user.
 *
 * @param title - Optional title; defaults to "New Chat".
 */
export async function createConversation(title = "New Chat") {
    const user = await requireUser();

    return prisma.conversation.create({
        data: {
            userId: user.id,
            title: title.trim() || "New Chat",
        },
    });
}

/**
 * Updates conversation metadata (title, pin, or archive status).
 *
 * @param conversationId - The conversation to update.
 * @param data - Fields to change; omitted fields are left unchanged.
 */
export async function updateConversation(
    conversationId: string,
    data: { title?: string; isPinned?: boolean; isArchived?: boolean }
) {
    const user = await requireUser();
    await assertOwnsConversation(conversationId, user.id);

    const conversation = await prisma.conversation.update({
        where: { id: conversationId },
        data: {
            ...(data.title !== undefined ? { title: data.title.trim() || "New Chat" } : {}),
            ...(data.isPinned !== undefined ? { isPinned: data.isPinned } : {}),
            ...(data.isArchived !== undefined ? { isArchived: data.isArchived } : {}),
        },
    });

    revalidatePath("/");
    revalidatePath(`/c/${conversationId}`);
    return conversation;
}



/**
 * Permanently deletes a conversation owned by the current user.
 *
 * @param conversationId - The conversation to delete.
 * @returns The deleted conversation ID.
 */
export async function deleteConversation(conversationId: string) {
    const user = await requireUser();
    await assertOwnsConversation(conversationId, user.id);

    await prisma.conversation.delete({
        where: { id: conversationId },
    });

    revalidatePath("/");
    return { id: conversationId };
}

/**
 * Creates a new branched conversation starting from a specific message.
 * Clones all messages up to and including the branched message.
 *
 * @param conversationId - The source conversation ID.
 * @param messageId - The message ID where the branch splits.
 * @param branchTitle - Optional title for the new branch.
 */
export async function createBranch(
  conversationId: string,
  messageId: string,
  branchTitle?: string
) {
  const user = await requireUser();
  const parentConv = await assertOwnsConversation(conversationId, user.id);

  // 1. Load all messages for the parent conversation in order of creation
  const allMessages = await prisma.message.findMany({
    where: { conversationId },
    orderBy: { createdAt: "asc" },
  });

  // 2. Filter messages up to and including the split message
  const splitIndex = allMessages.findIndex((msg) => msg.id === messageId);
  if (splitIndex === -1) {
    throw new Error("Split message not found in conversation history");
  }
  const messagesToCopy = allMessages.slice(0, splitIndex + 1);

  // 3. Resolve parentId and rootId
  const parentId = parentConv.id;
  const rootId = parentConv.rootId || parentConv.id;

  // 4. Create the new branched conversation
  const defaultTitle = branchTitle?.trim() || `Branch of ${parentConv.title}`;
  const newConv = await prisma.conversation.create({
    data: {
      userId: user.id,
      title: defaultTitle,
      model: parentConv.model,
      systemPrompt: parentConv.systemPrompt,
      parentId,
      rootId,
      branchedFromMessageId: messageId,
    },
  });

  // 5. Clone and save all messages up to the branch point into the new conversation
  if (messagesToCopy.length > 0) {
    await prisma.message.createMany({
      data: messagesToCopy.map((msg) => ({
        conversationId: newConv.id,
        role: msg.role,
        status: msg.status,
        content: msg.content,
        parts: msg.parts || undefined,
        metadata: msg.metadata || undefined,
        createdAt: msg.createdAt,
      })),
    });
  }

  revalidatePath("/");
  revalidatePath(`/c/${newConv.id}`);
  return { newConversationId: newConv.id };
}

/**
 * Lists all sibling and child branches of the current conversation thread (sharing the same rootId).
 */
export async function listConversationBranches(conversationId: string) {
  const user = await requireUser();
  const conv = await assertOwnsConversation(conversationId, user.id);

  const rootId = conv.rootId || conv.id;

  const branches = await prisma.conversation.findMany({
    where: {
      userId: user.id,
      OR: [
        { id: rootId },
        { rootId: rootId },
      ],
    },
    orderBy: { createdAt: "asc" },
    select: {
      id: true,
      title: true,
      parentId: true,
      branchedFromMessageId: true,
    },
  });

  return branches;
}
import { createOpenAI } from "@ai-sdk/openai";

/** Default OpenAI model used when a conversation has no model override. */
export const DEFAULT_CHAT_MODEL = "gpt-4o-mini";

/**
 * Returns a robust OpenAI language model instance for chat completions.
 * Prevents initialization crashes due to empty baseURL env variables.
 *
 * @param modelId - Optional model identifier; falls back to {@link DEFAULT_CHAT_MODEL}.
 */
export function getChatModel(modelId?: string | null) {
  const apiKey = process.env.OPENAI_API_KEY || "dummy-key";
  const rawBaseURL = process.env.OPENAI_BASE_URL;
  
  // Clean double quotes if any and check non-empty
  const baseURL = rawBaseURL ? rawBaseURL.replace(/"/g, "").trim() : "";

  const customOpenAI = createOpenAI({
    apiKey,
    ...(baseURL ? { baseURL } : {}),
  });

  return customOpenAI(modelId || DEFAULT_CHAT_MODEL);
}
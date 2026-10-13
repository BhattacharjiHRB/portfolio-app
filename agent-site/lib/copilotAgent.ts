/**
 * Copilot Studio Agent SDK — integration point
 * ------------------------------------------------
 * This file is the single seam between this Next.js frontend and your
 * Copilot Studio agent. Everything above it (ChatLauncher.tsx) only talks
 * to the functions below, so swapping in the real SDK means editing this
 * file only.
 *
 * TODO: install the Agent SDK your Copilot Studio agent gives you, e.g.
 *   npm install @microsoft/agents-copilotstudio-client
 * and replace the mock implementation below with real calls.
 *
 * You'll typically need, from Copilot Studio → Settings → Channels → Web/SDK:
 *   - environmentId / botSchemaName / agentId
 *   - a token endpoint (Direct Line / Agent SDK auth) — do NOT hardcode
 *     secrets here; fetch a token from your own API route instead.
 */

export type AgentMessage = {
  id: string;
  role: "user" | "agent";
  text: string;
};

export type AgentSession = {
  conversationId: string;
  sendMessage: (text: string) => Promise<AgentMessage>;
  end: () => void;
};

// TODO: point this at a Next.js API route (e.g. /api/agent-token) that
// requests a short-lived token server-side using your Copilot Studio
// credentials. Never expose long-lived secrets to the browser.
async function fetchAgentToken(): Promise<string> {
  return "mock-token";
}

/**
 * Opens a conversation with the Copilot Studio agent.
 *
 * Real implementation sketch (Agent SDK / Direct Line style):
 *
 *   const token = await fetchAgentToken();
 *   const client = new CopilotStudioClient({ token, environmentId, agentId });
 *   const conversation = await client.startConversation();
 *
 *   return {
 *     conversationId: conversation.id,
 *     sendMessage: async (text) => {
 *       const reply = await client.sendActivity(conversation.id, { type: "message", text });
 *       return { id: reply.id, role: "agent", text: reply.text };
 *     },
 *     end: () => client.endConversation(conversation.id),
 *   };
 */
export async function startAgentSession(): Promise<AgentSession> {
  await fetchAgentToken();
  const conversationId = `mock-${Date.now()}`;

  return {
    conversationId,
    sendMessage: async (text: string) => {
      // Mock latency + canned response so the UI is fully wired and
      // demoable before the real SDK is dropped in.
      await new Promise((resolve) => setTimeout(resolve, 700 + Math.random() * 500));
      return {
        id: `${Date.now()}`,
        role: "agent",
        text: `(demo reply — wire up the Agent SDK in lib/copilotAgent.ts) I heard: "${text}"`,
      };
    },
    end: () => {
      // TODO: call client.endConversation(conversationId) with the real SDK.
    },
  };
}

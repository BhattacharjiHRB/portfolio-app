# Wren — Copilot Studio agent frontend

A modern, animated, fully responsive Next.js + Tailwind CSS site built to
host a Microsoft Copilot Studio AI agent, added through the Agent SDK.

## Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** with a custom design system (colors, fonts, animations)
- **Framer Motion** for scroll reveals, page-load sequencing, and micro-interactions
- Responsive from small phones up through large desktop

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000. (First build downloads the Google Fonts
used — Space Grotesk, Inter, JetBrains Mono — so you'll need normal
internet access the first time you build.)

```bash
npm run build   # production build
npm run start   # serve the production build
```

## Where the Copilot Studio Agent SDK goes

Everything is already wired up so you only need to touch **one file**:

```
lib/copilotAgent.ts
```

This is the single seam between the UI and your agent. Right now it contains
a mock `startAgentSession()` that fakes replies so the whole UI — launcher
button, panel, typing indicator, message bubbles — is demoable immediately.

To go live:

1. Install the SDK your Copilot Studio agent's "Web / Agent SDK" channel
   gives you, e.g.:
   ```bash
   npm install @microsoft/agents-copilotstudio-client
   ```
2. Create a Next.js API route (e.g. `app/api/agent-token/route.ts`) that uses
   your Copilot Studio environment ID / agent ID / secret **server-side**
   to mint a short-lived token, and call it from `fetchAgentToken()` in
   `lib/copilotAgent.ts`. Never ship long-lived secrets to the browser.
3. Replace the body of `startAgentSession()` with real calls to the SDK
   client (a sketch is included as a comment in that file, and again in the
   "Integration" section on the page itself).
4. Everything downstream — `components/ChatLauncher.tsx`, the hero preview,
   the floating button — keeps working unchanged, since they only ever call
   `startAgentSession()` and `session.sendMessage()`.

## Project structure

```
app/
  layout.tsx        Fonts, metadata, root HTML shell
  page.tsx           Assembles all sections + chat state
  globals.css         Base styles, reduced-motion handling
components/
  Navbar.tsx          Sticky nav, mobile menu
  Hero.tsx            Headline, CTAs, signature visual
  SignalOrb.tsx        Animated "listening" orb (signature element)
  ChatPreview.tsx      Hero-side conversation mockup
  Capabilities.tsx     What the agent can do
  HowItWorks.tsx       Request → reasoning → action → reply sequence
  Integration.tsx      Explains the SDK seam, shows code
  Footer.tsx
  ChatLauncher.tsx     The real floating chat widget (uses lib/copilotAgent.ts)
lib/
  copilotAgent.ts      <- Copilot Studio Agent SDK goes here
```

## Design notes

- Dark, low-noise base (`#090C14`) with a violet / cyan duo-tone accent
  system — violet for primary actions and the agent's "presence," cyan for
  live/status signals.
- Display type is Space Grotesk, body is Inter, and JetBrains Mono is used
  for labels, status tags, and code — reinforcing the "agent/system" feel.
- Motion is deliberate: a staged hero load-in, a pulsing signal orb,
  scroll-triggered reveals, and a typing indicator in the chat — not
  scattered effects. `prefers-reduced-motion` is respected globally.
- Fully responsive: single-column stacking on mobile, a slide-up full-width
  chat panel on small screens, a docked panel on desktop.

"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import HowItWorks from "@/components/HowItWorks";
import Integration from "@/components/Integration";
import Footer from "@/components/Footer";
import ChatLauncher from "@/components/ChatLauncher";

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <main className="min-h-screen bg-base">
      <Navbar onOpenChat={() => setChatOpen(true)} />
      <Hero onOpenChat={() => setChatOpen(true)} />
      <Capabilities />
      <HowItWorks />
      <Integration />
      <Footer onOpenChat={() => setChatOpen(true)} />
      <ChatLauncher
        open={chatOpen}
        onOpen={() => setChatOpen(true)}
        onClose={() => setChatOpen(false)}
      />
    </main>
  );
}

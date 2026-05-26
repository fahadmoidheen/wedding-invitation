"use client";

import { useState } from "react";
import Loader from "@/components/Loader";
import InvitePopup from "@/components/InvitePopup";
import EnvelopeIntro from "@/components/EnvelopeIntro";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import EventSection from "@/components/EventSection";
import GallerySection from "@/components/GallerySection";
import CountdownSection from "@/components/CountdownSection";
import MapSection from "@/components/MapSection";
import FamilySection from "@/components/FamilySection";
import RSVPSection from "@/components/RSVPSection";
import PDFDownloadSection from "@/components/PDFDownloadSection";
import Footer from "@/components/Footer";

export default function MainExperience() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [inviteeName, setInviteeName] = useState<string | null>(null);
  const [envelopeOpened, setEnvelopeOpened] = useState(false);

  return (
    <main className="min-h-screen relative bg-deep-black text-ivory selection:bg-warm-gold selection:text-deep-black">
      {!loadingComplete && (
        <Loader onLoadingComplete={() => setLoadingComplete(true)} />
      )}
      
      {loadingComplete && !inviteeName && (
        <InvitePopup onNameSubmit={setInviteeName} />
      )}

      {loadingComplete && inviteeName && !envelopeOpened && (
        <EnvelopeIntro 
          inviteeName={inviteeName} 
          onOpen={() => setEnvelopeOpened(true)} 
        />
      )}

      {loadingComplete && inviteeName && envelopeOpened && (
        <div className="w-full">
          <HeroSection />
          <StorySection />
          <GallerySection />
          <CountdownSection />
          <EventSection />
          <MapSection />
          <FamilySection />
          <RSVPSection />
          <PDFDownloadSection inviteeName={inviteeName} />
          <Footer />
        </div>
      )}
    </main>
  );
}

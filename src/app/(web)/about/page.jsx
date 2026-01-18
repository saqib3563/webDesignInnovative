import AboutUsBanner from "@/components/AboutUsBanner";
import AwardSection from "@/components/AwardSection";
import FaqSection from "@/components/FaqsSection";
import GlobeSection from "@/components/GlobeSection";
import MissionSection from "@/components/MissionSection";
import StreamSection from "@/components/StreamSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import React from "react";

const page = () => {
  return (
    <>
      <AboutUsBanner />

      <MissionSection />

      <AwardSection />

      <TechnologiesSection />

      <StreamSection />

      {/* Globe Section */}
      <GlobeSection />

      {/* Faq Section */}
      <FaqSection />
    </>
  );
};

export default page;

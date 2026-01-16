import AboutUsBanner from "@/components/AboutUsBanner";
import FaqSection from "@/components/FaqsSection";
import GlobeSection from "@/components/GlobeSection";
import MissionSection from "@/components/MissionSection";
import React from "react";

const page = () => {
  return (
    <>
      <AboutUsBanner />

      <MissionSection/>

      {/* Globe Section */}
      <GlobeSection />

      {/* Faq Section */}
      <FaqSection />
    </>
  );
};

export default page;

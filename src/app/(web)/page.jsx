import AboutUs from "@/components/AboutSection";
import Blogs from "@/components/BlogsSection";
// import FancyButton from "@/components/FancyButton";
import FaqSection from "@/components/FaqsSection";
import GlobeSection from "@/components/GlobeSection";
import HeroBanner from "@/components/HeroBanner";
import ProDesignSection from "@/components/ProDesign";
import ServiceSection from "@/components/ServiceSection";
import SliderSection2 from "@/components/slider-section-2";
// import SliderSection from "@/components/slider-section";

export default function Home() {
  return (
    <>
      {/* HERO_BNNER */}
      <HeroBanner />

      {/* ABOUT_US */}
      <AboutUs />

      {/* PRO DESIGN */}
      <ProDesignSection />

      {/* SLIDER SECTION */}
      <SliderSection2 />

      {/* Service Section */}
      <ServiceSection />

      {/* Blogs */}
      <Blogs />

      {/* Globe Section */}
      <GlobeSection />

      {/* Faq Section */}
      <FaqSection />
      
    </>
  );
}

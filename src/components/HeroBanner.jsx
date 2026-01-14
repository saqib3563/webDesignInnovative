"use client";
import hero_bg from "@/app/(web)/assets/images/Hero.webp";
import bnner_img from "@/app/(web)/assets/images/robot-hand.webp";
import GlobeImg from "@/app/(web)/assets/images/globe-hero.webp";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { bebas_neu } from "@/app/(web)/assets/fonts/custom";
import SliderSection2 from "@/components/slider-section-2";
import MagneticButton from "@/components/magnetic-logic";

const HeroBanner = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const innovatorRef = useRef(null);
  const globeRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(
      () => {
      const tl = gsap.timeline({ delay: 0.6 });

      // Split text into individual characters
      const webDesignChars = headingRef.current.textContent.split('');
      const innovatorsChars = innovatorRef.current.textContent.split('');
      
      // Clear original text and create spans for each character
      headingRef.current.innerHTML = webDesignChars.map(char => 
        `<span style="display: inline-block;">${char === ' ' ? '&nbsp;' : char}</span>`
      ).join('');
      
      innovatorRef.current.innerHTML = innovatorsChars.map(char => 
        `<span style="display: inline-block;">${char === ' ' ? '&nbsp;' : char}</span>`
      ).join('');

      const webDesignSpans = headingRef.current.querySelectorAll('span');
      const innovatorsSpans = innovatorRef.current.querySelectorAll('span');

      /* =========================
         INITIAL STATES (HIDE ALL)
      ========================= */
      gsap.set([imageRef.current], {
        opacity: 0,
        y: 60
      });

      gsap.set([webDesignSpans, innovatorsSpans], {
        opacity: 0,
        y: 100,
        rotationX: 90
      });

      gsap.set(globeRefs.current, {
        opacity: 0,
        scale: 0.4
      });

      /* =========================
         MOVE GLOBES TO CENTER
         (TRANSFORM ONLY)
      ========================= */
      globeRefs.current.forEach(globe => {
        const bounds = globe.getBoundingClientRect();
        const parentBounds = containerRef.current.getBoundingClientRect();

        const centerX =
          parentBounds.width / 2 -
          (bounds.left - parentBounds.left) -
          bounds.width / 2;

        const centerY =
          parentBounds.height / 2 -
          (bounds.top - parentBounds.top) -
          bounds.height / 2;

        gsap.set(globe, {
          x: centerX,
          y: centerY
        });
      });

      /* =========================
         GLOBES APPEAR
      ========================= */
      tl.to(globeRefs.current, {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        ease: "power2.out"
      });

      /* =========================
         BHAWANDAR / THUNDER
      ========================= */
      tl.to(globeRefs.current, {
        rotation: 720,
        scale: 1.35,
        duration: 1.8,
        ease: "power4.inOut",
        stagger: 0.12
      });

      /* =========================
         RETURN TO ORIGINAL POSITIONS
      ========================= */
      tl.to(globeRefs.current, {
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1,
        duration: 1.8,
        ease: "expo.inOut"
      });

      /* =========================
         WEB DESIGN - SPLIT TEXT ANIMATION
      ========================= */
      tl.to(webDesignSpans, {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.05
      }, "+=0.2");

      /* =========================
         INNOVATORS - SPLIT TEXT ANIMATION
      ========================= */
      tl.to(innovatorsSpans, {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.03
      }, "-=0.4");

      /* =========================
         HAND IMAGE
      ========================= */
      tl.to(
        imageRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.4,
          ease: "expo.out"
        },
        "-=0.6"
      );

      /* =========================
         IDLE ROTATION
      ========================= */
      gsap.to(globeRefs.current, {
        rotation: "+=360",
        duration: 40,
        repeat: -1,
        ease: "none"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="hero_bnner"
      style={{
        backgroundImage: `url(${hero_bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div className="container-fluid">
        <div className="row h-100">
          <div className="col-12 text-center">

            {/* 🤖 HAND */}
            <Image
              ref={imageRef}
              src={bnner_img}
              alt=""
              className="img-fluid image-center"
            />

            {/* 🌍 GLOBES */}
            <Image
              src={GlobeImg}
              ref={el => (globeRefs.current[0] = el)}
              alt=""
              className="img-fluid globe-img globe-img-1"
            />
            <Image
              src={GlobeImg}
              ref={el => (globeRefs.current[1] = el)}
              className="img-fluid globe-img globe-img-2"
              alt=""
            />
            <Image
              src={GlobeImg}
              ref={el => (globeRefs.current[2] = el)}
              className="img-fluid globe-img globe-img-3"
              alt=""
            />
            <Image
              src={GlobeImg}
              ref={el => (globeRefs.current[3] = el)}
              className="img-fluid globe-img globe-img-4"
              alt=""
            />

            {/* 🧠 TEXT */}
            <h1
              ref={headingRef}
              className={`main_bnner_heading ${bebas_neu.className}`}
            >
              WEB DESIGN
            </h1>

            <h2
              ref={innovatorRef}
              className={`innovator-text ${bebas_neu.className}`}
            >
              INNOVATORS
            </h2>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;

"use client";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function ScrollRevealHandler() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const elements = document.querySelectorAll(".reveal-text");

    elements.forEach((el) => {
      // initial state (fully hidden)
      gsap.set(el, {
        backgroundPosition: "100% 0",
      });

      gsap.to(el, {
        backgroundPosition: "0% 0",
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,               // har heading apna trigger
          start: "top 70%",           // early trigger khatam
          end: "top 40%",
          scrub: true,               // scroll ke sath smooth
          // markers: true,           // debug ke liye
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
  
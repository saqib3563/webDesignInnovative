"use client";
import { useEffect } from "react";

export default function ScrollRevealHandler() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-text");

    const reveal = () => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;

        /*
          start when element bottom hits 80% viewport
          end when element top hits 20% viewport
        */
        const start = vh * 0.8;
        const end = vh * 0.2;

        let progress = (start - rect.top) / (start - end);
        progress = Math.min(Math.max(progress, 0), 1);

        el.style.backgroundPosition = `${100 - progress * 100}% 0`;
      });
    };

    window.addEventListener("scroll", reveal);
    reveal();

    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return null;
}

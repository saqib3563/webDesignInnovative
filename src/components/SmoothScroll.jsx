"use client";
import { useContext, useEffect } from "react";
import Lenis from "lenis";
import { sideBarContext } from "@/app/context";

const SmoothScroll = ({ children }) => {
  const { open } = useContext(sideBarContext)

  useEffect(() => {
    if (open) return
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    let frameId;

    const raf = (time) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId); // stop RAF loop
      lenis.destroy(); // destroy Lenis instance
    };
  }, [open]);

  return <>{children}</>;
};

export default SmoothScroll;

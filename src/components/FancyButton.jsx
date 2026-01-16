"use client";

import { useRef, useEffect } from "react";
import { instrument_sans } from "@/app/(web)/assets/fonts/custom";

export default function FancyButton({ text = "Contact Us" }) {
  const btnRef = useRef(null);
  const iconWrapperRef = useRef(null);
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const raf = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;
    const iconWrapper = iconWrapperRef.current;

    const handleMouseMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      targetPos.current = { x: x * 0.15, y: y * 0.15 };
    };

    const handleMouseLeave = () => {
      targetPos.current = { x: 0, y: 0 };
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      const factor = 0.45;
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * factor;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * factor;

      const maxDist = 15;
      const clampedX = Math.max(Math.min(currentPos.current.x, maxDist), -maxDist);
      const clampedY = Math.max(Math.min(currentPos.current.y, maxDist), -maxDist);

      iconWrapper.style.transform = `translate(${clampedX}px, ${clampedY}px)`;

      raf.current = requestAnimationFrame(animate);
    };

    raf.current = requestAnimationFrame(animate);

    return () => {
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <button ref={btnRef} className={`fancy-btn ${instrument_sans.className}`}>
      <span className="text-wrapper">
        <span className="text top">{text}</span>
        <span className="text bottom">{text}</span>
      </span>
      <span ref={iconWrapperRef} className="icon-wrapper">
        <i className="fa-solid fa-arrow-right"></i>
      </span>
    </button>
  );
}

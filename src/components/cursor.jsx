"use client"
import { useEffect } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  useEffect(() => {
    if(window.innerWidth < 768) return;
    const cursor = document.querySelector(".cursor");

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power3.out",
      });
    };

    document.addEventListener("mousemove", moveCursor);

    const hoverElements = document.querySelectorAll("button, a, .blog-card");
    hoverElements.forEach(el => {
      el.addEventListener("mouseenter", () => {
        gsap.to(cursor, { scale: 2, borderWidth: 1, duration: 0.2 });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(cursor, { scale: 1, borderWidth: 2, duration: 0.2 });
      });
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  

  return (
    <div
      className="cursor"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "10px",
        height: "10px",
        background: "#44198fff",
        borderRadius: "50%",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
        mixBlendMode: "difference",
      }}
    ></div>
  );
};

export default CustomCursor;

import { useRef, useEffect, useState } from "react";

const MagneticButton = () => {
  const btnRef = useRef(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const btn = btnRef.current;
    const strength = 0.45;
    const hoverArea = 120;

    const handleMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < hoverArea) {
        btn.style.transform = `translate(${dx * strength}px, ${dy * strength}px) scale(1.12)`;
      } else {
        btn.style.transform = "translate(0,0) scale(1)";
      }
    };

    const reset = () => {
      btn.style.transform = "translate(0,0) scale(1)";
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", reset);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <>
      {/* Magnetic Button */}
      <a ref={btnRef} onClick={() => setSidebarOpen(true)} className="idea-pop">
        <i className="fa-solid fa-arrow-right-long"></i>
        <span className="idea-para">
          Drop Us A <br /> Line
        </span>
      </a>

      {/* Overlay */}
      <div
        className={`magnet-sidebar-overlay ${sidebarOpen ? "magnet-sidebar-overlay--show" : ""}`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Sidebar */}
      <div className={`right-sidebar ${sidebarOpen ? "right-sidebar--open" : ""}`}>
        <button className="sidebar-close" onClick={() => setSidebarOpen(false)}>
          ✕
        </button>

        <h2>Contact Us</h2>
        <p>This is your sliding sidebar 😎</p>
      </div>
    </>
  );
};

export default MagneticButton;

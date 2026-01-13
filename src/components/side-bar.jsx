"use client";
import { useContext, useEffect, useRef } from "react";
import { sideBarContext } from "@/app/context";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import logoImage from "@/app/(web)/assets/images/logo.avif";
import iconMenu from "@/app/(web)/assets/images/Icon.png";

const SideBar = () => {
  const { open, toggleMenu } = useContext(sideBarContext);
  const sidebarRef = useRef();
  const overlayRef = useRef();
  const menuItemsRef = useRef([]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";

      // Overlay fade in
      gsap.set(overlayRef.current, { display: "block" });
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.3 });

      // Sidebar slide in
      gsap.to(sidebarRef.current, { x: 0, duration: 0.5, ease: "power3.out" });

      // Menu items animation
      gsap.fromTo(
        menuItemsRef.current,
        { x: 20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: "power3.out" }
      );
    } else {
      document.body.style.overflow = "";

      // Sidebar slide out
      gsap.to(sidebarRef.current, { x: "100%", duration: 0.4, ease: "power3.in" });

      // Overlay fade out
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => gsap.set(overlayRef.current, { display: "none" }),
      });
    }
  }, [open]);

  return (
    <>
      {/* Overlay */}
      <div ref={overlayRef} className="sidebar-overlay" onClick={toggleMenu}></div>

      {/* Sidebar */}
      <div className="side-bar" ref={sidebarRef}>
        <div className="sidebar-header">
          <Image src={logoImage} alt="logo" width={40} height={40} style={{objectFit:'contain'}} />
          <button className="menu-btn" onClick={toggleMenu}>
            <Image src={iconMenu} alt="menu_icon" width={30} height={30} />
          </button>
        </div>

        {/* Menu */}
        <ul className="sidebar-menu">
          {["HOME", "ABOUT US", "EVENTS", "CAREERS", "BLOGS", "CASE STUDIES", "NEWS ROOM"].map((item, i) => (
            <li key={i} ref={(el) => (menuItemsRef.current[i] = el)} className={i === 0 ? "active" : ""}>
              <Link href="#">{item} {i === 0 && <sup>(01)</sup>}</Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="sidebar-cta mb-4">
          <button className="btn-main">
            <span className="text">Contact Us</span>
            <span><i className="fa-solid fa-arrow-right"></i></span>
          </button>
        </div>

        {/* Social */}
        <div className="sidebar-social">
          {["instagram", "x-twitter", "linkedin", "youtube"].map((icon, i) => (
            <Link key={i} href="#" className="social-links">
              <i className={`fa-brands fa-${icon}`}></i>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;

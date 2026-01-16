"use client";
import { useContext, useEffect, useRef } from "react";
import { sideBarContext } from "@/app/context";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import logoImage from "@/app/(web)/assets/images/logo.avif";
import iconMenu from "@/app/(web)/assets/images/Icon.png";
import { useRouter, usePathname } from "next/navigation";
import FancyButton from "./FancyButton";

const menuItems = [
  { label: "HOME", path: "/" },
  { label: "ABOUT US", path: "/about" },
  { label: "EVENTS", path: "/events" },
  { label: "CAREERS", path: "/careers" },
  { label: "BLOGS", path: "/blogs" },
  { label: "CASE STUDIES", path: "/case-studies" },
  { label: "NEWS ROOM", path: "/news-room" },
];

const SideBar = () => {
  const { open, toggleMenu } = useContext(sideBarContext);
  const sidebarRef = useRef();
  const overlayRef = useRef();
  const menuItemsRef = useRef([]);
  const router = useRouter();
  const pathname = usePathname(); // current route

  useEffect(() => {
    if (open) {
      // document.body.style.overflow = "hidden";

      gsap.set(overlayRef.current, { display: "block" });
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.3 });

      gsap.fromTo(
        sidebarRef.current,
        { x: "100%" },
        { x: 0, duration: 0.5, ease: "power3.out" }
      );

      gsap.fromTo(
        menuItemsRef.current,
        { x: 20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, stagger: 0.1 }
      );
    } else {
      document.body.style.overflow = "";

      gsap.to(sidebarRef.current, { x: "100%", duration: 0.4 });
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => gsap.set(overlayRef.current, { display: "none" }),
      });
    }
  }, [open]);

  const handleNavigate = (path) => {
    toggleMenu();
    router.push(path);
  };

  return (
    <>
      {/* Overlay */}
      <div ref={overlayRef} className="sidebar-overlay" onClick={toggleMenu}></div>

      {/* Sidebar */}
      <div className="side-bar" ref={sidebarRef}>
        {/* Header */}
        <div className="sidebar-header">
          <Image src={logoImage} alt="logo" width={50} height={40} />
          <button className="menu-btn" onClick={toggleMenu}>
            <Image src={iconMenu} alt="menu_icon" width={30} height={30} />
          </button>
        </div>

        {/* Menu */}
        <ul className="sidebar-menu">
          {menuItems.map((item, i) => {
            const isActive = pathname === item.path;

            return (
              <li
                key={i}
                ref={(el) => (menuItemsRef.current[i] = el)}
                className={isActive ? "active" : ""}
                onClick={() => handleNavigate(item.path)}
              >
                <span>
                  {item.label}
                  {isActive && (
                    <sup>({String(i + 1).padStart(2, "0")})</sup>
                  )}
                </span>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="sidebar-cta mb-4">
          {/* <button className="btn-main" onClick={() => handleNavigate("/contact")}>
            <span className="text">Contact Us</span>
            <span>
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </button> */}
          <FancyButton text="Contact Us"/>
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

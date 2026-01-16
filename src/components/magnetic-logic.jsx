"use client";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

const MagneticButton = () => {
  const btnRef = useRef(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const btn = btnRef.current;

    // Initial: hidden
    btn.style.transform = "scale(0)";
    btn.style.opacity = "0";
    btn.style.transition = "transform 0.5s ease, opacity 0.5s ease";

    // 5 seconds delay after page load
    const timer = setTimeout(() => {
      btn.style.transform = "scale(1)";
      btn.style.opacity = "1";
    }, 5000);

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 100) {
        // Scroll down → zoom out
        btn.style.transform = "scale(0.8)";
        btn.style.opacity = "0";
      } else {
        // Scroll up → zoom in
        btn.style.transform = "scale(1)";
        btn.style.opacity = "1";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
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
        className={`magnet-sidebar-overlay ${
          sidebarOpen ? "magnet-sidebar-overlay--show" : ""
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Sidebar */}
      <div data-lenis-prevent-wheel
        className={`right-sidebar ${sidebarOpen ? "right-sidebar--open" : ""}`}
      >
        <button className="sidebar-close" onClick={() => setSidebarOpen(false)}>
          <i className="fa-solid fa-xmark"></i>
        </button>

        <h2 className="primary-font">got a project?</h2>
        <p className="para-sm mb-5">
          Share the details of your project – like scope, timeframes, or
          business challenges. Our team will thoroughly review the materials and
          respond to you promptly.
        </p>
        <form action="#">
          <div className="mb-4 form-group">
            <label className="para-sm mb-2">I'm interested in</label>
            <div className="d-flex flex-wrap gap-2">
              <input
                type="checkbox"
                name="interested_1"
                className="d-none radio"
                id="web"
                value="Custom Software"
              />
              <label className="radio-label type-label" htmlFor="web">
                Custom Software
              </label>
              <input
                type="checkbox"
                name="interested_2"
                className="d-none radio"
                id="app"
                value="Mobile App"
              />
              <label className="radio-label type-label" htmlFor="app">
                Mobile App
              </label>
              <input
                type="checkbox"
                name="interested_3"
                className="d-none radio"
                id="ui"
                value="UI/UX"
              />
              <label className="radio-label type-label" htmlFor="ui">
                UI/UX
              </label>
              <input
                type="checkbox"
                name="interested_4"
                className="d-none radio"
                id="dev"
                value="Web Development"
              />
              <label className="radio-label type-label" htmlFor="dev">
                Web Development
              </label>
            </div>
          </div>
          <div className="mb-3 form-group">
            <input type="text" className="idea-field" placeholder="Your Name" />
          </div>
          <div className="row">
            <div className="mb-3 col-12 col-md-6">
              <input
                type="email"
                className="idea-field"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-3 col-12 col-md-6">
              <input
                type="tel"
                className="idea-field"
                placeholder="Your Phone"
              />
            </div>
          </div>
          <div className="mb-3 form-group">
            <input type="text" className="idea-field" placeholder="Your Message" />
          </div>
          <button className="idea-submit-btn" type="submit">SEND MESSAGE</button>
        </form>
        <p className="para-xs mt-4 mb-4">We'll keep your information in our CRM to respond to your request. For more details, consult our <Link href="#">Privacy Policy</Link></p>
        <div className="row">
          <div className="col-6">
            <Link href="#" className="d-block idea-submit-btn text-center w-100 text-decoration-none">CONTACT NOW</Link>
          </div>
          <div className="col-6">
            <Link href="#" className="d-block idea-submit-btn text-center w-100 text-decoration-none">CHAT NOW</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MagneticButton;

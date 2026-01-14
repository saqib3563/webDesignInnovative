"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import sliderImage from "@/app/(web)/assets/images/slide-1.webp";
import sliderImage2 from "@/app/(web)/assets/images/slide-2.webp";
import sliderImage3 from "@/app/(web)/assets/images/slide-3.webp";
import { instrument_sans } from "@/app/(web)/assets/fonts/custom";

const slides = [
  {
    img: sliderImage,
    category: ["Web & App Design", "Responsive Frontends"],
    para: "Landing page design for news platform",
    title: "Project Name",
  },
  {
    img: sliderImage2,
    category: ["Web & App Design", "Responsive Frontends"],
    para: "Landing page design for news platform",
    title: "Project Name",
  },
  {
    img: sliderImage3,
    category: ["Web & App Design", "Responsive Frontends"],
    para: "Logo Design",
    title: "Project Name",
  },
];

const SliderSection2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const wrapperRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const panels = gsap.utils.toArray(".panel");

    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onEnter: () => setActiveIndex(i),
        onEnterBack: () => setActiveIndex(i),
      });
    });

    // 🔥 DOTS VISIBILITY BASED ON WHOLE SLIDER
    ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: "top top",
      end: "bottom bottom",
      onEnter: () => {
        document.querySelector(".dots-area")?.classList.add("show-dots");
      },
      onLeave: () => {
        document.querySelector(".dots-area")?.classList.remove("show-dots");
      },
      onEnterBack: () => {
        document.querySelector(".dots-area")?.classList.add("show-dots");
      },
      onLeaveBack: () => {
        document.querySelector(".dots-area")?.classList.remove("show-dots");
      },
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <div ref={wrapperRef} className="position-relative">

      {/* ===== SINGLE DOTS UI ===== */}
      <div className="dots-area">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`custom-bullet primary-font ${
              i === activeIndex ? "active" : ""
            }`}
          >
            0{i + 1}
          </span>
        ))}
      </div>

      {/* ===== SLIDES ===== */}
      {slides.map((slide, index) => (
        <section key={index} className="panel green">
          <Image
            fill
            className={`image img-fluid ${
              index === slides.length - 1 ? "last-image" : ""
            }`}
            loading="lazy"
            quality={100}
            sizes="100vw"
            src={slide.img}
            alt=""
          />

          <div className="content_area padd-x pt-5">
            <div className="category-area">
              {slide.category.map((cat, i) => (
                <div key={i} className="category">
                  <a href="#" className="text-decoration-none">
                    <span className={`${instrument_sans.className} category-font`}>
                      {cat}
                    </span>
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <p className="para-section mb-3">{slide.para}</p>
              <h2 className="primary-font">{slide.title}</h2>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default SliderSection2;

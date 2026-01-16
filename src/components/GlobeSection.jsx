"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import globeImg from "@/app/(web)/assets/images/globe-bg.webp";
import { instrument_sans } from "@/app/(web)/assets/fonts/custom";
import client_image_1 from "@/app/(web)/assets/images/client_image.png";
import client_image_2 from "@/app/(web)/assets/images/client_image-2.png";
import client_image_3 from "@/app/(web)/assets/images/client_image-3.png";
import client_image_4 from "@/app/(web)/assets/images/client_image-4.png";
import client_image_5 from "@/app/(web)/assets/images/client_image-5.png";
import client_image_6 from "@/app/(web)/assets/images/client_image-6.png";
import client_image_7 from "@/app/(web)/assets/images/client_image-7.png";
import client_image_8 from "@/app/(web)/assets/images/client_image-8.png";
import client_image_9 from "@/app/(web)/assets/images/client_image-9.png";

import Image from "next/image";
import FancyButton from "./FancyButton";
gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "James R.",
    role: "Startup Founder",
    text: "From start to finish, the communication was seamless and the design blew us away. They really know how to bring a brand to life!",
    img: client_image_1,
  },
  {
    name: "Emma W.",
    role: "Designer",
    text: "Amazing experience working with this team!",
    img: client_image_2,
    rotate: 40,
  },
  {
    name: "John D.",
    role: "Developer",
    text: "Highly recommend their services!",
    img: client_image_3,
    rotate: 60,
  },
  {
    name: "Lisa K.",
    role: "Manager",
    text: "Loved the design and attention to detail!",
    img: client_image_4,
    rotate: 70,
  },
  {
    name: "Mike S.",
    role: "CEO",
    text: "Outstanding work and professional service!",
    img: client_image_5,
    rotate: 80,
  },
  {
    name: "Sarah T.",
    role: "Marketing",
    text: "Creative solutions that exceeded expectations!",
    img: client_image_6,
    rotate: 100,
  },
  {
    name: "David L.",
    role: "Product Manager",
    text: "Innovative approach to design challenges!",
    img: client_image_7,
    rotate: 120,
  },
  {
    name: "Anna M.",
    role: "Creative Director",
    text: "Brilliant execution of our vision!",
    img: client_image_8,
    rotate: 140,
  },
  {
    name: "James R.",
    role: "Startup Founder",
    text: "From start to finish, the communication was seamless and the design blew us away. They really know how to bring a brand to life!",
    img: client_image_9,
    rotate: 160,
  },
  {
    name: "James R.",
    role: "Startup Founder",
    text: "From start to finish, the communication was seamless and the design blew us away. They really know how to bring a brand to life!",
    img: client_image_1,
    rotate: 180,
  },
  {
    name: "Emma W.",
    role: "Designer",
    text: "Amazing experience working with this team!",
    img: client_image_2,
    rotate: 200,
  },
  {
    name: "John D.",
    role: "Developer",
    text: "Highly recommend their services!",
    img: client_image_3,
    rotate: 220,
  },
  {
    name: "Lisa K.",
    role: "Manager",
    text: "Loved the design and attention to detail!",
    img: client_image_4,
    rotate: 240,
  },
  {
    name: "Mike S.",
    role: "CEO",
    text: "Outstanding work and professional service!",
    img: client_image_5,
    rotate: 260,
  },
  {
    name: "Sarah T.",
    role: "Marketing",
    text: "Creative solutions that exceeded expectations!",
    img: client_image_6,
    rotate: 280,
  },
  {
    name: "David L.",
    role: "Product Manager",
    text: "Innovative approach to design challenges!",
    img: client_image_7,
    rotate: 300,
  },
  {
    name: "Anna M.",
    role: "Creative Director",
    text: "Brilliant execution of our vision!",
    img: client_image_8,
    rotate: 320,
  },
  {
    name: "James R.",
    role: "Startup Founder",
    text: "From start to finish, the communication was seamless and the design blew us away. They really know how to bring a brand to life!",
    img: client_image_9,
    rotate: 340,
  },
];

const GlobeSection = () => {
  const circleRef = useRef(null);
  const [active, setActive] = useState(9);
  const [windowInstance, setWindowInstance] = useState(null);
  useEffect(() => {
    setWindowInstance(window);
  }, []);
  const calcWidth = useCallback(() => {
    const width = windowInstance?.innerWidth;
    if (!width) return;
    if (width <= 1024 && width > 767) {
      return 420;
    } else if (width <= 767 && width > 575) {
      return 320;
    } else if (width <= 575 && width > 480) {
      return 220;
    } else if (width <= 480) {
      return 190;
    }

    return 500;
  }, [windowInstance]);
  useEffect(() => {
    if (!circleRef.current) return;

    const initAnimation = () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === ".globe-section") trigger.kill();
      });

      gsap.to(circleRef.current, {
        rotate: 360,
        ease: "none",
        scrollTrigger: {
          trigger: ".globe-section",
          start: "top center",
          end: "bottom+=300% center",
          scrub: 1,
        },
        onUpdate: (self) => {
          const rotation = (self?.progress || 1) * 360;
          const activeIndex = Math.floor(
            (rotation / (360 / testimonials.length)) % testimonials.length
          );
        },
      });
    };

    initAnimation();

    const handleResize = () => {
      initAnimation();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const rotateNext = () => {
    if (!circleRef.current) return;

    const currentRotation = gsap.getProperty(circleRef.current, "rotate");

    const nextRotation = Number(currentRotation) + 20;

    gsap.to(circleRef.current, {
      rotate: nextRotation,
      duration: 0.8,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const rotatePrev = () => {
    if (!circleRef.current) return;

    const currentRotation = gsap.getProperty(circleRef.current, "rotate");
    const prevRotation = Number(currentRotation) - 20;

    gsap.to(circleRef.current, {
      rotate: prevRotation,
      duration: 0.8,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  return (
    <section
      className="padd-y globe-section"
      style={{ backgroundImage: `url(${globeImg.src})` }}
    >
      <div className="next-btn-wrap">
        <button className="previous-person" onClick={rotatePrev}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button className="next-person" onClick={rotateNext}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Static Container */}
        <div style={{ width: "100%", height: 500 }} className="globe-container">
          {/* Rotating Images Container */}
          <div ref={circleRef} className="circle-area">
            {testimonials.map((t, i) => {
              const angle = (i / testimonials.length) * 2 * Math.PI;
              const radius = calcWidth();
              const x = radius * Math.cos(angle - Math.PI / 2);
              const y = radius * Math.sin(angle - Math.PI / 2);

              return (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${
                      t.rotate || 0
                    }deg)`,
                    width: "90px",
                    height: "90px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border:
                      i === active
                        ? "4px solid #6D11E4"
                        : "3px solid rgba(255,255,255,0.3)",
                    boxShadow:
                      i === active
                        ? "0 0 30px #6D11E4, 0 0 60px rgba(207,255,0,0.3)"
                        : "0 0 20px rgba(0,0,0,0.3)",
                    transition: "all 0.3s ease",
                    zIndex: i === active ? 10 : 1,
                    cursor: "pointer",
                  }}
                  onClick={() => setActive(i)}
                  className="circle-main"
                >
                  <Image
                    src={t.img}
                    alt={t.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      filter:
                        i === active ? "brightness(1.1)" : "brightness(0.8)",
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* Static Center Content */}

          <div className="text_content_area">
            <p className={`globe-para mb-3 ${instrument_sans.className}`}>
              {testimonials[active].text}
            </p>

            <p data-aos="fade-right" className="globe_title primary-font mb-3">
              — {testimonials[active].name}, {testimonials[active].role}
            </p>
            {/* <button
              className={`btn-main mx-auto ${instrument_sans.className}`}
              data-aos="zoom-in"
            >
              <span className="text">More Reviews</span>
              <span>
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </button> */}
            <div className="d-flex justify-content-center">
              <FancyButton text="More Reviews" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobeSection;

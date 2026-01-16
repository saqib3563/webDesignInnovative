"use client";

import { instrument_sans, inter } from "@/app/(web)/assets/fonts/custom";
import serviceCardImage from "@/app/(web)/assets/images/service-card-image.jpg";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SwiperComponent from "./slider";
import { SwiperSlide } from "swiper/react";
import FancyButton from "./FancyButton";

gsap.registerPlugin(ScrollTrigger);

const ProDesignSection = () => {
  const proDesignData = [
    { title: "Our Mission", link: "#", image: serviceCardImage },
    { title: "Our Vision", link: "#", image: serviceCardImage },
    { title: "Collaborate with Us", link: "#", image: serviceCardImage },
  ];

  const initProDesignAnimation = () => {
    const width = window.innerWidth;

    if (width <= 768) {
      gsap.set(".card-1", { y: 0, zIndex: 1 });
      gsap.set(".card-2", { y: 0, zIndex: 2 });
      gsap.set(".card-3", { y: 0, zIndex: 3 });
      return;
    }

    const obj = {
      trigger: ".pro-section",
      start: "10% -30%",
      end: "bottom+=110%",
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    };

    // First card stays in place
    gsap.set(".card-1", { y: 0, zIndex: 1 });

    // Cards start from bottom
    gsap.set(".card-2", { y: "160%", zIndex: 2 });
    gsap.set(".card-3", { y: "160%", zIndex: 3 });

    if (width < 992 && width > 768) {
      obj.start = "10% -25%";
    }

    const tl = gsap.timeline({ scrollTrigger: obj });

    tl.to(".card-2", {
      y: 0,
      duration: 0.3, // thora fast
      ease: "power2.out",
    }).to(
      ".card-3",
      {
        y: 0,
        duration: 0.3, // thora fast
        ease: "power2.out",
      },
      "-=0.15"
    );
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      initProDesignAnimation();
    });

    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        gsap.set(".card-1", { y: 0, zIndex: 1 });
        gsap.set(".card-2", { y: 0, zIndex: 2 });
        gsap.set(".card-3", { y: 0, zIndex: 3 });
        return;
      }
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      ctx.revert();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="padd-x pro-section">
      <div className="container-fluid">
        <div className="row">
          {/* LEFT CONTENT */}
          <div className="col-md-6 col-12 mb-lg-0 mb-5">
            <span
              className={`${inter.className} abt-heading mb-3 d-block text-start`}
            >
              [ Who We Are ]
            </span>

            <h2 className="primary-font mb-3 reveal-text">
              Pro design,
              <br /> minus the price.
            </h2>

            <p className="para-section mb-4">
              Grow your brand with high-quality design for a flat monthly fee.
              Work with <br /> senior designers. Subscribe and make as many
              requests as you need — no limits.
            </p>

            {/* <button className={`btn-main ${instrument_sans.className}`}>
              <span className="text">Contact Us</span>
              <span>
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </button> */}
            <FancyButton text="Contact Us"/>
          </div>

          {/* RIGHT CARDS - Desktop */}
          <div className="col-md-6 col-12 d-none d-md-block position-relative">
            {proDesignData.map((item, index) => (
              <div className={`card-border card-${index + 1}`} key={index}>
                <div className="card-custom text-center">
                  <div className="d-flex justify-content-between align-items-center">
                    <h3 className="primary-font mb-0 ">{item.title}</h3>
                    {/* <Link
                      href={item.link}
                      className={`btn-main text-decoration-none ${instrument_sans.className}`}
                    >
                      <span className="text">Read More</span>
                      <span>
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                    </Link> */}
                    <FancyButton text="Read More"/>
                  </div>

                  <Image
                    src={item.image}
                    alt={item.title}
                    className="img-fluid"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Slider */}
          <div className="col-12 d-md-none slider-swiper mt-4">
            <SwiperComponent
              breakpoints={{
                575: { slidesPerView: 2 },
                0: { slidesPerView: 1 },
              }}
              slidesPerView={1}
              spaceBetween={20}
              autoplayAllow={true}
              delay={1}
              speed={6000}
              freeMode={true}
              loop={true}
            >
              {proDesignData.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className={`card-border card-${index + 1}`}>
                    <div className="card-custom">
                      <div className="d-flex justify-content-between align-items-center">
                        <h3 className="primary-font mb-0">{item.title}</h3>
                        <Link
                          href={item.link}
                          className={`btn-main text-decoration-none ${instrument_sans.className}`}
                        >
                          <span className="text">Read More</span>
                          <span>
                            <i className="fa-solid fa-arrow-right"></i>
                          </span>
                        </Link>
                      </div>
                      <Image
                        src={item.image}
                        alt={item.title}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </SwiperComponent>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProDesignSection;

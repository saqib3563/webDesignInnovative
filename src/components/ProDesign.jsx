"use client";

import { instrument_sans, inter } from "@/app/(web)/assets/fonts/custom";
// import bottomCard from "@/app/(web)/assets/images/bottom-card.png";
import serviceCardImage from "@/app/(web)/assets/images/service-card-image.jpg";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SwiperComponent from "./slider";
import { SwiperSlide } from "swiper/react";

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
      gsap.set(".card-1", { x: 0, zIndex: 1 });
      gsap.set(".card-2", { x: 0, zIndex: 2 });
      gsap.set(".card-3", { x: 0, zIndex: 3 });
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

    gsap.set(".card-1", { x: 0, zIndex: 1 });
    gsap.set(".card-2", { x: "120%", zIndex: 2 });
    gsap.set(".card-3", { x: "120%", zIndex: 3 });

    if (width < 992 && width > 768) {
      obj.start = "10% -25%";
    }

    const tl = gsap.timeline({ scrollTrigger: obj });
    tl.to(".card-2", { x: 0, duration: 1, ease: "none" }).to(".card-3", {
      x: 0,
      duration: 1,
      ease: "none",
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      initProDesignAnimation();
    });

    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        gsap.set(".card-1", { x: 0, zIndex: 1 });
        gsap.set(".card-2", { x: 0, zIndex: 2 });
        gsap.set(".card-3", { x: 0, zIndex: 3 });
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
              data-aos="fade-up"
              data-aos-delay="200"
            >
              [ Who We Are ]
            </span>

            <h2
              className="primary-font mb-3"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Pro design,
              <br /> minus the price.
            </h2>

            <p
              className="para-section mb-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Grow your brand with high-quality design for a flat monthly fee.
              Work with <br /> senior designers. Subscribe and make as many
              requests as you need — no limits.
            </p>

            <button
              className={`btn-main ${instrument_sans.className}`}
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <span className="text">Contact Us</span>
              <span>
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </button>
          </div>

          {/* RIGHT CARDS - Desktop */}
          <div className="col-md-6 col-12 d-none d-md-block position-relative">
            {proDesignData.map((item, index) => (
              <div className={`card-border card-${index + 1}`} key={index}>
                <div className="card-custom text-center">
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
                  {/* <div className="p-relative">
                    <Image src={item.icon} alt="pro-icons" className="img-fluid pro-icon" />
                    <Image
                      src={bottomCard}
                      alt="pro-icons"
                      className="circular_area"
                    />
                  </div> */}
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

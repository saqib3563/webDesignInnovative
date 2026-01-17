"use client";

import { instrument_sans } from "@/app/(web)/assets/fonts/custom";
import Image from "next/image";
import revImg1 from "@/app/(web)/assets/images/blog-1.webp";
import revImg2 from "@/app/(web)/assets/images/blog-3.webp";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MissionSection = () => {

useEffect(() => {
  const items = document.querySelectorAll(".reveal-effect");

  items.forEach((el) => {
    gsap.fromTo(
      el,
      { "--reveal-y": "0%" },     // cover image
      {
        "--reveal-y": "100%",    // slide down reveal
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
        },
      }
    );
  });

  return () => {
    ScrollTrigger.getAll().forEach(t => t.kill());
  };
}, []);

  return (
    <>
      <section className="mission-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="primary-font" data-aos="fade-right">
                Innovative <br />
                <span className="outline">Mission</span>
              </h2>
            </div>
            <div className="col-md-6">
              <h3
                className={`mission-hd mt-0 mb-4 ${instrument_sans.className}`}
              >
                01. Global Presense
              </h3>
              <p
                className={`para-section para-section-2 ${instrument_sans.className}`}
              >
                BYTRIX Technologies incorporates progressive digital <br /> 
                solutions and resources to equip tech-savvy businesses <br /> 
                with advanced products and services. We have put <br /> forward
                cutting-edge technology to revolutionize <br /> businesses and
                business processes on an international level.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mission-img-sec padd-x">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-lg-3 col-xl-3">
              <div className="reveal-effect">
                <Image src={revImg1} alt="1" className="img-fluid" />
              </div>
              <div className="text-careers">
                <h3
                  className={`mission-hd mt-0 mb-4 ${instrument_sans.className}`}
                >
                  01. Global Presense
                </h3>
                <p
                  className={`para-section para-section-2 ${instrument_sans.className}`}
                >
                  BYTRIX Technologies incorporates progressive digital solutions
                  and resources to equip tech-savvy businesses with advanced
                  products and services. We have put forward cutting-edge
                  technology to revolutionize businesses and business processes
                  on an international level.
                </p>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 col-xl-6 second-img-about">
              <div className="reveal-effect">
                <Image src={revImg2} alt="1" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-xl-3">
              <div className="text-careers">
                <h3
                  className={`mission-hd mt-0 mb-4 ${instrument_sans.className}`}
                >
                  01. Global Presense
                </h3>
                <p
                  className={`para-section para-section-2 ${instrument_sans.className}`}
                >
                  BYTRIX Technologies incorporates progressive digital solutions
                  and resources to equip tech-savvy businesses with advanced
                  products and services. We have put forward cutting-edge
                  technology to revolutionize businesses and business processes
                  on an international level.
                </p>
              </div>
              <div className="reveal-effect mb-0 mt-4">
                <Image src={revImg1} alt="1" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <div className="vip-overlay"></div>
      </section>
    </>
  );
};

export default MissionSection;

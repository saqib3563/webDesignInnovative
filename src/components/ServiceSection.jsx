"use client";

import { instrument_sans, inter } from "@/app/(web)/assets/fonts/custom";
import serviceBg from "@/app/(web)/assets/images/service-bg.webp";
import columnImag1 from "@/app/(web)/assets/images/col-image.webp";
import diamondImage from "@/app/(web)/assets/images/diamond.webp";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { AnimationService } from "@/utils/animations/service-section";
import Link from "next/link";

const ServiceSection = () => {
  const sectionRef = useRef(null);
  const diamondRef = useRef(null);

//   const contentTexts = [
//     "UI/UX Design",
//     "Development",
//     "Copy Writing",
//     "Branding & Strategy",
//   ];
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current || !diamondRef.current) return;

    const ctx = gsap.context(
      AnimationService(diamondRef, sectionRef),
      sectionRef
    );

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ backgroundImage: `url(${serviceBg.src})` }}
      className=" padd-x service-section position-relative"
    >
      <div className="container-fluid">
        {/* Heading */}
        <div className="row mb-5">
          <div className="col-12">
            <span
              className={`${inter.className} abt-heading d-block text-start`}
            >
              [ Service ]
            </span>
            <p
              className={`para-section para-section-2 mt-4 ${instrument_sans.className}`}
            >
              Transforming insights into direction helping brands <br />
              define goals, positioning, and creative pathways that <br />
              drive growth.
            </p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-12">
            <div className="service-link-area">
              <Link href="#" className="text-end primary-font">
                Web Design Dev
                <span className="d-none d-xxl-inline">elopment</span>
              </Link>
              <span className="divide"></span>
              <Link href="#" className="primary-font">App Development</Link>
            </div>
            <div className="service-link-area">
              <Link href="#" className="text-end primary-font">E-Commerce </Link>
              <span className="divide"></span>
              <Link href="#" className="primary-font">Video Animation</Link>
            </div>
            <div className="service-link-area">
              <Link href="#" className="text-end primary-font">Web Maintenance</Link>
              <span className="divide"></span>
              <Link href="#" className="primary-font">Domain & Hosting</Link>
            </div>
            <div className="service-link-area">
              <Link href="#" className="text-end primary-font">Branding</Link>
              <span className="divide"></span>
              <Link href="#" className="primary-font">Digital Marketing</Link>
            </div>
          </div>

          {/* <div className="col-md-6 col-12 mb-5 mb-md-0">
            <div className="service-img-wrap">
              <Image
                src={columnImag1}
                alt="service-image"
                height={400}
                style={{ width: "80%" }}
              />
            </div>
          </div>

          <div className="col-md-6 col-12">
            <div className="row">
              <div className="col-12">
                <div className="text_selectors_area">
                  {contentTexts.map((text, i) => (
                    <div key={i} className="text-1">
                      <span
                        className={`number_count ${instrument_sans.className}`}
                      >
                        [{i + 1}]
                      </span>
                      <span className="primary-font text_selectors">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div> */}

          {/* 🔷 Diamond (Animation Safe) */}
          <Image
            ref={diamondRef}
            src={diamondImage}
            alt="diamond"
            className="diamond-img"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;

"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { instrument_sans } from "@/app/(web)/assets/fonts/custom";
import flagImg1 from "@/app/(web)/assets/images/flag-img-1.svg";
import flagImg2 from "@/app/(web)/assets/images/flag-img-2.svg";
import flagImg3 from "@/app/(web)/assets/images/flag-img-3.svg";
import flagImg4 from "@/app/(web)/assets/images/flag-img-4.svg";
import flagImg5 from "@/app/(web)/assets/images/flag-img-5.svg";
import cusImage1 from "@/app/(web)/assets/images/cus-1.webp";
import cusImage2 from "@/app/(web)/assets/images/cus-2.webp";
import cusImage3 from "@/app/(web)/assets/images/cus-3.webp";
import cusImage4 from "@/app/(web)/assets/images/cus-4.webp";
import cusImage5 from "@/app/(web)/assets/images/cus-5.webp";
import awardLogo1 from "@/app/(web)/assets/images/awardlogo1.webp";
import awardLogo2 from "@/app/(web)/assets/images/awardlogo2.webp";
import awardLogo3 from "@/app/(web)/assets/images/awardlogo3.webp";
import awardLogo4 from "@/app/(web)/assets/images/awardlogo4.webp";
import awardLogo5 from "@/app/(web)/assets/images/awardlogo5.webp";
import awardLogo6 from "@/app/(web)/assets/images/awardlogo6.webp";
import awardLogo7 from "@/app/(web)/assets/images/awardlogo7.webp";

gsap.registerPlugin(ScrollTrigger);

const AwardSection = () => {
  useLayoutEffect(() => {
    if (window.innerWidth <= 768) return;

    const section = document.querySelector("#portfolio");
    if (!section) return;

    const strip = section.querySelector(".horiz-gallery-strip");
    if (!strip) return;

    const logos = strip.querySelectorAll(".pres-logo");

    logos.forEach((logo) => {
      gsap.fromTo(
        logo,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom center",
            toggleActions: "play reverse play reverse",
            scrub: 0.3,
          },
        }
      );
    });

    const totalWidth = strip.scrollWidth;
    const scrollLength = totalWidth - window.innerWidth;

    gsap.to(strip, {
      x: -scrollLength,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${scrollLength + window.innerWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section id="portfolio">
      <div className="horiz-gallery-wrapper">
        <div className="horiz-gallery-strip">
          <div className="project-wrap project-wrap-3">
            <div className="container-fluid">
              <div className="row position-relative">
                <div className="col-12">
                  <div className="text-center">
                    <h1 className={instrument_sans.className}>
                      Global
                      <br />

                      <span className="outline">Presence</span>
                    </h1>
                  </div>
                </div>

                <div className="location-names">
                  <ul className="p-0 m-0">
                    <li className="pres-logo">
                      <Image src={flagImg1} alt="1" fill />

                      <h2>USA</h2>
                    </li>

                    <li className="pres-logo">
                      <Image src={flagImg3} alt="3" fill />

                      <h2>Pak</h2>
                    </li>

                    <li className="pres-logo">
                      <Image src={flagImg2} alt="2" fill />

                      <h2>KSA</h2>
                    </li>

                    <li className="pres-logo">
                      <Image src={flagImg4} alt="4" fill />

                      <h2>UK</h2>
                    </li>

                    <li className="pres-logo">
                      <Image src={flagImg5} alt="5" fill />

                      <h2>AUS</h2>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="project-wrap">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="text-center award-2-hd">
                    <h1 className={instrument_sans.className}>
                      Customer
                      <br />

                      <span className="about-global-smll">Centric</span>

                      <span className="outline">Approach</span>
                    </h1>
                  </div>

                  <ul className="we-use-list">
                    <li>
                      <svg
                        width="225"
                        height="225"
                        viewBox="0 0 281 281"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="main-path"
                          id="btn-path"
                          d="M141,0.5c77.6,0,140.5,62.9,140.5,140.5c0,77.6-62.9,140.5-140.5,140.5C63.4,281.5,0.5,218.6,0.5,141
	C0.5,63.4,63.4,0.5,141,0.5z"
                          fill="#ffffff"
                          stroke="#ffffff"
                          strokeWidth="3"
                        ></path>
                      </svg>

                      <div className="circle-con-has-main">
                        <div className="main-circle-box"></div>

                        <div className="circle-content">
                          <Image src={cusImage1} alt="3" />

                          <h4>Project Ownership</h4>
                        </div>
                      </div>
                    </li>

                    <li>
                      <svg
                        width="225"
                        height="225"
                        viewBox="0 0 281 281"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="main-path"
                          id="btn-path"
                          d="M141,0.5c77.6,0,140.5,62.9,140.5,140.5c0,77.6-62.9,140.5-140.5,140.5C63.4,281.5,0.5,218.6,0.5,141
	C0.5,63.4,63.4,0.5,141,0.5z"
                          fill="#ffffff"
                          stroke="#ffffff"
                          strokeWidth="3"
                        ></path>
                      </svg>

                      <div className="circle-con-has-main">
                        <div className="main-circle-box"></div>

                        <div className="circle-content">
                          <Image src={cusImage2} alt="3" />

                          <h4>Tech geeks</h4>
                        </div>
                      </div>
                    </li>

                    <li>
                      <svg
                        width="225"
                        height="225"
                        viewBox="0 0 281 281"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="main-path"
                          id="btn-path"
                          d="M141,0.5c77.6,0,140.5,62.9,140.5,140.5c0,77.6-62.9,140.5-140.5,140.5C63.4,281.5,0.5,218.6,0.5,141
	C0.5,63.4,63.4,0.5,141,0.5z"
                          fill="#ffffff"
                          stroke="#ffffff"
                          strokeWidth="3"
                        ></path>
                      </svg>

                      <div className="circle-con-has-main">
                        <div className="main-circle-box"></div>

                        <div className="circle-content">
                          <Image src={cusImage3} alt="3" />

                          <h4>Process Oriented</h4>
                        </div>
                      </div>
                    </li>

                    <li>
                      <svg
                        width="225"
                        height="225"
                        viewBox="0 0 281 281"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="main-path"
                          id="btn-path"
                          d="M141,0.5c77.6,0,140.5,62.9,140.5,140.5c0,77.6-62.9,140.5-140.5,140.5C63.4,281.5,0.5,218.6,0.5,141
	C0.5,63.4,63.4,0.5,141,0.5z"
                          fill="#ffffff"
                          stroke="#ffffff"
                          strokeWidth="3"
                        ></path>
                      </svg>

                      <div className="circle-con-has-main">
                        <div className="main-circle-box"></div>

                        <div className="circle-content">
                          <Image src={cusImage4} alt="3" />

                          <h4>Timely Delivery</h4>
                        </div>
                      </div>
                    </li>

                    <li>
                      <svg
                        width="225"
                        height="225"
                        viewBox="0 0 281 281"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="main-path"
                          id="btn-path"
                          d="M141,0.5c77.6,0,140.5,62.9,140.5,140.5c0,77.6-62.9,140.5-140.5,140.5C63.4,281.5,0.5,218.6,0.5,141
	C0.5,63.4,63.4,0.5,141,0.5z"
                          fill="#ffffff"
                          stroke="#ffffff"
                          strokeWidth="3"
                        ></path>
                      </svg>

                      <div className="circle-con-has-main">
                        <div className="main-circle-box"></div>

                        <div className="circle-content">
                          <Image src={cusImage5} alt="3" />

                          <h4>Out of the box-creativity</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="project-wrap project-wrap-3">
            <div className="container-fluid">
              <div className="row position-relative">
                <div className="col-12">
                  <div className="text-center">
                    <h1 className={instrument_sans.className}>
                      Awards
                      <br />

                      &
                      <br />

                      <span className="outline">recognitions</span>
                    </h1>
                  </div>

                  <div className="awards-name">
                    <ul className="text-center">
                      <li className="last-slide-list">
                        <Image src={awardLogo1} alt="" />
                      </li>

                      <li className="last-slide-list">
                        <Image src={awardLogo2} alt="" />
                      </li>

                      <li className="last-slide-list">
                        <Image src={awardLogo3} alt="" />
                      </li>

                      <li className="last-slide-list">
                        <Image src={awardLogo4} alt="" />
                      </li>

                      <li className="last-slide-list">
                        <Image src={awardLogo5} alt="" />
                      </li>

                      <li className="last-slide-list">
                        <Image src={awardLogo6} alt="" />
                      </li>

                      <li className="last-slide-list">
                        <Image src={awardLogo7} alt="" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardSection;

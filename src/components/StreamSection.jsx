"use client";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import portfolioImage1 from "@/app/(web)/assets/images/portfolio-img.webp";
import { instrument_sans, inter } from "@/app/(web)/assets/fonts/custom";
import Link from "next/link";

const StreamSection = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray(".portfolio-card");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".stream-sec",
        start: "top 10%",
        end: "bottom 30%",
        scrub: true,
        invalidateOnRefresh: true,
        // markers: true
      },
    });

    tl.fromTo(
      cards,
      {},
      {
        x: 0,
        y: 0,
        rotate: 0,
        ease: "power3.out",
        stagger: 0.02,
      }
    );

    return () => {
      tl.scrollTrigger && tl.scrollTrigger.kill();
      tl.kill();
    };
  }, []);

  return (
    <>
      {/* ================= Fun Facts ================= */}
      <section className="stream-sec">
        <div className="container">
          <div className="about-content-area portfolio-top-wrap">
            <h3 className={`${inter.className} abt-heading mb-5 text-start`}>
              [ FunFacts ]
            </h3>

            <p
              className={`${instrument_sans.className} abt-para text-start mb-4`}
            >
              "A streamlined <br />
              solution build to power <br />
              business."
            </p>

            <p
              className={`para-section para-section-2 mt-0 ${instrument_sans.className}`}
            >
              We’re more than pixels and code — we’re coffee lovers, cat people,
              meme sharers, and design geeks.
            </p>

            <div className="portfolio-counter-wrapper">
              <div className="counter-box">
                <h4>0%</h4>
                <p>
                  Customer <br /> satisfaction
                </p>
              </div>
              <div className="counter-box">
                <h4>0+</h4>
                <p>
                  Years of <br /> experience
                </p>
              </div>
              <div className="counter-box">
                <h4>0+</h4>
                <p>
                  Projects <br /> Completed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Portfolio Cards ================= */}
      <section className="stream-sec-2">
        <div className="container">
          <div className="portfolio-item-wrapper">
            <div className="portfolio-card portfolio-card-1">
              <Image src={portfolioImage1} alt="portfolio" />
              <Link href="#" className="portfolio-btn">
                <span>
                  <i className="fa-solid fa-eye"></i>
                </span>
              </Link>
              <div className="portfolio-card-categories">
                <p>
                  <Link href="">Web design</Link> <Link href="">Portfolio</Link>
                </p>
              </div>
            </div>
            <div className="portfolio-card portfolio-card-2">
              <Image src={portfolioImage1} alt="portfolio" />
              <Link href="#" className="portfolio-btn">
                <span>
                  <i className="fa-solid fa-eye"></i>
                </span>
              </Link>
              <div className="portfolio-card-categories">
                <p>
                  <Link href="">Web design</Link> <Link href="">Portfolio</Link>
                </p>
              </div>
            </div>
            <div className="portfolio-card portfolio-card-3">
              <Image src={portfolioImage1} alt="portfolio" />
              <Link href="#" className="portfolio-btn">
                <span>
                  <i className="fa-solid fa-eye"></i>
                </span>
              </Link>
              <div className="portfolio-card-categories">
                <p>
                  <Link href="">Web design</Link> <Link href="">Portfolio</Link>
                </p>
              </div>
            </div>
            <div className="portfolio-card portfolio-card-4">
              <Image src={portfolioImage1} alt="portfolio" />
              <Link href="#" className="portfolio-btn">
                <span>
                  <i className="fa-solid fa-eye"></i>
                </span>
              </Link>
              <div className="portfolio-card-categories">
                <p>
                  <Link href="">Web design</Link> <Link href="">Portfolio</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StreamSection;

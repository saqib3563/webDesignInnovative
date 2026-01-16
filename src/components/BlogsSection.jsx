"use client";
import { instrument_sans, inter } from "@/app/(web)/assets/fonts/custom";
import blogImg1 from "@/app/(web)/assets/images/blog-image-1.webp";
import blogImg2 from "@/app/(web)/assets/images/blog-image-2.webp";
import blogImg3 from "@/app/(web)/assets/images/blog-image-3.webp";
import blogImg4 from "@/app/(web)/assets/images/blog-image-4.webp";
import blogImg5 from "@/app/(web)/assets/images/blog-image-5.webp";
import blogImg6 from "@/app/(web)/assets/images/blog-image-6.webp";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import SwiperComponent from "./slider";
import { SwiperSlide } from "swiper/react";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Blogs = () => {
  const breakpoints = {
    991: {
      slidesPerView: 3,
    },
    575: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  };

  useLayoutEffect(() => {
    const cards = document.querySelectorAll(".blog-cards");

    if (!cards.length) return;

    // 3D hover effect
    cards.forEach((card) => {
      gsap.set(card, { perspective: 800 });
      const rotateX = gsap.quickTo(card, "rotationX", { ease: "power3" });
      const rotateY = gsap.quickTo(card, "rotationY", { ease: "power3" });
      const scaleCard = gsap.quickTo(card, "scale", { ease: "power3" });

      card.addEventListener("pointermove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateXVal = gsap.utils.interpolate(15, -15, y / rect.height);
        const rotateYVal = gsap.utils.interpolate(-15, 15, x / rect.width);
        rotateX(rotateXVal);
        rotateY(rotateYVal);
        scaleCard(1.05);
      });

      card.addEventListener("pointerleave", () => {
        rotateX(0);
        rotateY(0);
        scaleCard(1);
      });
    });

    // Scroll-triggered animation
    gsap.from(cards, {
      scrollTrigger: {
        trigger: cards[0],
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="padd-y padd-x blogs">
      <div className="container-fluid">
        {/* HEADING AREA */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-8 col-12" data-aos="fade-right">
            <span
              className={`${inter.className} abt-heading mb-3 d-block text-start`}
            >
              [ Blogs ]
            </span>
            <h2 className="primary-font">Insights & Updates</h2>
          </div>
          <div className="col-lg-4 col-12">
            <p
              data-aos="fade-left"
              className={`para-section ${instrument_sans.className}`}
            >
              Stay ahead with insights on design trends, branding tips, and
              digital marketing strategies. Elevate your brand with expert
              advice and industry updates. Subscribe today for unlimited access.
            </p>
          </div>
        </div>

        {/* BLOGS CARDS */}
        <div className="row" data-aos="fade-up">
          <SwiperComponent
            breakpoints={breakpoints}
            slidesPerView={4}
            spaceBetween={10}
            arrowBtns={false}
            autoplay={{
              delay: 0, // linear continuous scroll
              disableOnInteraction: true,
            }}
            speed={3000} // jitni speed chahiye adjust kar sakte ho
            loop={true}
          >
            {[
              {
                img: blogImg1,
                para: "Awarded as a top professional in web design services for 2026.",
                rating: "5.0",
              },
              {
                img: blogImg2,
                para: "Proud to be a BBB Accredited business, demonstrating trust and commitment to excellence.",
                rating: "4.8",
              },
              {
                img: blogImg3,
                para: "Ranked as one of the top web design agencies on Clutch for 2026.",
                rating: "4.9",
              },
              {
                img: blogImg4,
                para: "Listed among the top web design and development companies on DesignRush for 2026, showcasing our industry leadership.",
                rating: "4.7",
              },
              {
                img: blogImg4,
                para: "Featured among the best web design agencies for 2026 by UpCity, known for our innovative solutions and client satisfaction.",
                rating: "4.7",
              },
              {
                img: blogImg5,
                para: "Recognized as a leader in WordPress, ReactJs, and Web Design in the United States.",
                rating: "4.7",
              },
            ].map((slide, i) => (
              <SwiperSlide key={i}>
                <div className="blog-cards">
                  <div className="blog-border">
                    <div className="blog-name-area award-item">
                      <Image src={slide.img} height={60} width={130} alt=""/>
                      <p className="rating-para">
                        <i className="fa-solid fa-star"></i>
                        {slide.rating}
                      </p>
                    </div>
                  </div>
                  <div className="blog-image-area">
                    <p className={` ${instrument_sans.className}`}>{slide.para}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </SwiperComponent>
        </div>
      </div>
    </section>
  );
};

export default Blogs;

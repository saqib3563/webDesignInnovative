"use client"
import { instrument_sans, inter } from "@/app/(web)/assets/fonts/custom"
import blogImg1 from "@/app/(web)/assets/images/blog-1.webp"
import blogImg2 from "@/app/(web)/assets/images/blog-2.webp"
import blogImg3 from "@/app/(web)/assets/images/blog-3.webp"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import Image from "next/image"
import SwiperComponent from "./slider"
import { SwiperSlide } from "swiper/react"
import { useLayoutEffect } from "react"

gsap.registerPlugin(ScrollTrigger)

const Blogs = () => {
  const breakpoints = {
    991: {
      slidesPerView: 3,
    },
    575: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1
    }
  };

  useLayoutEffect(() => {
    const cards = document.querySelectorAll(".blog-cards")

    if (!cards.length) return

    // 3D hover effect
    cards.forEach((card) => {
      gsap.set(card, { perspective: 800 })
      const rotateX = gsap.quickTo(card, "rotationX", { ease: "power3" })
      const rotateY = gsap.quickTo(card, "rotationY", { ease: "power3" })
      const scaleCard = gsap.quickTo(card, "scale", { ease: "power3" })

      card.addEventListener("pointermove", (e) => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const rotateXVal = gsap.utils.interpolate(15, -15, y / rect.height)
        const rotateYVal = gsap.utils.interpolate(-15, 15, x / rect.width)
        rotateX(rotateXVal)
        rotateY(rotateYVal)
        scaleCard(1.05)
      })

      card.addEventListener("pointerleave", () => {
        rotateX(0)
        rotateY(0)
        scaleCard(1)
      })
    })

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
    })
  }, [])

  return (
    <section className="padd-y padd-x blogs">
      <div className="container-fluid">
        {/* HEADING AREA */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-8 col-12" data-aos="fade-right">
            <span className={`${inter.className} abt-heading mb-3 d-block text-start`}>
              [ Blogs ]
            </span>
            <h2 className="primary-font">Insights & Updates</h2>
          </div>
          <div className="col-lg-4 col-12">
            <p data-aos="fade-left" className={`para-section ${instrument_sans.className}`}>
              Stay ahead with insights on design trends, branding tips, and digital marketing strategies. Elevate your brand with expert advice and industry updates. Subscribe today for unlimited access.
            </p>
          </div>
        </div>

        {/* BLOGS CARDS */}
        <div className="row" data-aos="fade-up">
          <SwiperComponent
            breakpoints={breakpoints}
            slidesPerView={3}
            spaceBetween={10}
            btnStyle1="my-btn-slide"
            btnStyle2="my-btn-slide"
            arrowBtns={true}>

            {[blogImg1, blogImg2, blogImg3, blogImg2].map((img, i) => (
              <SwiperSlide key={i}>
                <div className="blog-cards">
                  <div className="blog-border">
                    <div className="blog-name-area">
                      <span className="primary-font blog-heading">BLOG NAME</span>
                      <button className="arrow-btn-2"><i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                  </div>
                  <div className="blog-image-area">
                    <Image src={img} alt={`blog-${i + 1}`} className="img-fluid" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </SwiperComponent>
        </div>
      </div>
    </section>
  )
}

export default Blogs

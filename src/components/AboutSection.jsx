"use client"
import { instrument_sans, inter } from "@/app/(web)/assets/fonts/custom"
import backgroundImg from "@/app/(web)/assets/images/about.avif"
import webBoxImg from "@/app/(web)/assets/images/web_inovation_box.png"
import slideImg1 from "@/app/(web)/assets/images/partner-logo.avif"
import slideImg2 from "@/app/(web)/assets/images/partner-logo-2.avif"
import slideImg3 from "@/app/(web)/assets/images/partner-logo-3.avif"
import slideImg4 from "@/app/(web)/assets/images/partner-logo-4.avif"
import slideImg5 from "@/app/(web)/assets/images/partner-logo-5.avif"
import dot from "@/app/(web)/assets/images/dot.avif"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import Image from "next/image"
import { useEffect } from "react"
import { AnimationAboutUs } from "@/utils/animations/about-us"
import SwiperComponent from "./slider"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, FreeMode } from "swiper/modules"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

gsap.registerPlugin(ScrollTrigger)

const AboutUs = () => {
useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        // Store original text content before animation
        const headingEl = document.querySelector('.abt-heading')
        const paraEl = document.querySelector('.abt-para')
        const secondParaEl = document.querySelector('.second-para')
        
        const originalTexts = {
            heading: headingEl?.textContent,
            para: paraEl?.innerHTML,
            secondPara: secondParaEl?.textContent
        }

        const ctx = gsap.context(AnimationAboutUs)

        return () => {
            // Restore original text content
            if (headingEl && originalTexts.heading) {
                headingEl.innerHTML = originalTexts.heading
            }
            if (paraEl && originalTexts.para) {
                paraEl.innerHTML = originalTexts.para
            }
            if (secondParaEl && originalTexts.secondPara) {
                secondParaEl.innerHTML = originalTexts.secondPara
            }
            
            ctx.revert()
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])


    return (
        <section
            className="about-sec"
            style={{ backgroundImage: `url(${backgroundImg.src})` }}
        >
            <div className="padd-x">
                <h3 className={`${inter.className} abt-heading mb-5`}>[ About us ]</h3>

                <p className={`${instrument_sans.className} abt-para `}>
                    At Web Design Innovators, we design beautiful and <br />
                    intuitive websites that elevate your brand. Join us in turning <br />
                    ideas into reality.
                </p>

            </div>

            <div className="slide-strip-wrapper">
                <div className="slide-strip-inner">
                    <Swiper
                        slidesPerView={7}
                        spaceBetween={10}
                        loop={true}
                        speed={3000}              // slow & smooth
                        allowTouchMove={false}
                        freeMode={{
                            enabled: true,
                            momentum: false,
                            sticky: true
                        }}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false,
                            stopOnLastSlide: false
                        }}
                        modules={[FreeMode, Autoplay]}
                        className="testimonial-slider"
                        breakpoints={{
                            1280: {
                                slidesPerView: 7,
                            },
                            767: {
                                slidesPerView: 5
                            },
                            380: {
                                slidesPerView: 4
                            }
                        }}
                    >
                        <SwiperSlide> <div className="slide-item"><Image src={slideImg1} alt="" className="img-fluid" /></div></SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-item"><Image src={dot} alt="" className="img-fluid dot-img" /></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-item"><Image src={slideImg2} alt="" className="img-fluid" /></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-item"><Image src={dot} alt="" className="img-fluid dot-img" /></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-item"><Image src={slideImg3} alt="" className="img-fluid" /></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-item"><Image src={dot} alt="" className="img-fluid dot-img" /></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-item"><Image src={slideImg4} alt="" className="img-fluid" /></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-item"><Image src={dot} alt="" className="img-fluid dot-img" /></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-item"><Image src={slideImg5} alt="" className="img-fluid" /></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-item"><Image src={dot} alt="" className="img-fluid dot-img" /></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-item"><Image src={slideImg5} alt="" className="img-fluid" /></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-item"><Image src={dot} alt="" className="img-fluid dot-img" /></div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <Image src={webBoxImg} alt="web_innovator_box" className="innovation_box" />
            </div>
            <div className="padd-x">
                <p className="primary-font second-para">Where imagination and technology collide in a bold, futuristic aesthetic. Our work blends neon glow, experimental design, and sharp creative strategy.</p>
            </div>
        </section>
    )
}

export default AboutUs

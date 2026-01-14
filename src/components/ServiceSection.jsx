"use client"
import { instrument_sans, inter } from "@/app/(web)/assets/fonts/custom"
import serviceBg from "@/app/(web)/assets/images/service-bg.webp"
import columnImag1 from "@/app/(web)/assets/images/col-image.webp"
import columnImag2 from "@/app/(web)/assets/images/slide-1.webp"
import btnBg from "@/app/(web)/assets/images/btn-bg.png"
import diamondImage from "@/app/(web)/assets/images/diamond.webp"

import Image from "next/image"
import { useCallback, useEffect, useRef, useState } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { AnimationService } from "@/utils/animations/service-section"


const ServiceSection = () => {
    const imageRef = useRef(null)
    const sectionRef = useRef(null)
    const diamondRef = useRef(null)
    const [currentImage, setCurrentImage] = useState(0)

    const imagesShow = {
        0: columnImag1,
        1: columnImag2,
        2: columnImag1,
        3: columnImag1
    }

    const contentTexts = [
        "UI/UX Design",
        "Development",
        "Copy Writing",
        "Branding & Strategy"
    ]

    const changeImage = useCallback((index) => {
        if (index === currentImage) return;
        
        const el = imageRef.current
        if (!el) return

        gsap.to(el, {
            opacity: 0,
            scale: 0.9,
            duration: 0.3,
            ease: "power2.inOut",
            onComplete: () => {
                setCurrentImage(index)
                gsap.fromTo(
                    el,
                    { opacity: 0, scale: 1.1 },
                    { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" }
                )
            }
        })
    }, [currentImage])

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        if (!sectionRef.current || !diamondRef.current) return

        const ctx = gsap.context(
            AnimationService(diamondRef, sectionRef), sectionRef)

        return () => ctx.revert()
    }, [])


    return (
        <section
            ref={sectionRef}
            style={{ backgroundImage: `url(${serviceBg.src})` }}
            className="padd-y-2 padd-x service-section position-relative"
        >
            <div className="container-fluid">
                <div className="row mb-5">
                    <div className="col-12">
                        <span className={`${inter.className} abt-heading d-block text-start`}>
                            [ Service ]
                        </span>
                    </div>
                </div>

                <div className="row align-items-center align-items-lg-end">
                    <div className="col-md-6 col-12">
                        <div ref={imageRef} className="service-img-wrap mb-5">
                            <Image
                                src={imagesShow[currentImage]}
                                alt="service-image"
                                height={400}
                                style={{ width: "80%" }}
                            />
                        </div>

                        <p className={`para-section para-section-2 ${instrument_sans.className}`}>
                            Transforming insights into direction helping brands <br />
                            define goals, positioning, and creative pathways that <br />
                            drive growth.
                        </p>
                    </div>

                    <div className="col-md-6 col-12">
                        <div className="text_selectors_area">
                            {contentTexts.map((text, i) => (
                                <div
                                    key={i}
                                    className={`text-1 ${currentImage === i ? "active-color" : ""}`}
                                    onMouseEnter={() => changeImage(i)}
                                >
                                    <span className={`number_count ${instrument_sans.className}`}>
                                        [{i + 1}]
                                    </span>
                                    <span className="primary-font text_selectors">
                                        {text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 🔷 Diamond */}
                    <Image
                        ref={diamondRef}
                        src={diamondImage}
                        alt="diamond"
                        className="diamond-img"
                    />
                </div>
            </div>
        </section>
    )
}

export default ServiceSection

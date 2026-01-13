"use client"
import { instrument_sans, inter } from "@/app/(web)/assets/fonts/custom";
import { useEffect, useState } from "react";
import { FaqAnimation } from "@/utils/animations/faqs";
import Image from "next/image";
import web_box from "@/app/(web)/assets/images/innovation_box_2.png"
const FaqSection = () => {
    const [currentAccordion, setCurrentAccordion] = useState(0)
    const faqs = [
        {
            faqHead: "What services does WebDesign Innovators provide?",
            faqBody: "Absolutely not! This template is designed for no-code customization. You can easily modify all elements, content, and styles using Webflow's intuitive drag-and-drop interface."
        },
        {
            faqHead: "How can SquareUp help my business?",
            faqBody: "Absolutely not! This template is designed for no-code customization. You can easily modify all elements, content, and styles using Webflow's intuitive drag-and-drop interface."
        },
        {
            faqHead: "What industries does SquareUp work with?",
            faqBody: "Absolutely not! This template is designed for no-code customization. You can easily modify all elements, content, and styles using Webflow's intuitive drag-and-drop interface."
        },
        {
            faqHead: "Do you offer ongoing support and maintenance after the project is completed?",
            faqBody: "Absolutely not! This template is designed for no-code customization. You can easily modify all elements, content, and styles using Webflow's intuitive drag-and-drop interface."
        },
        {
            faqHead: "Can you work with existing design or development frameworks?",
            faqBody: "Absolutely not! This template is designed for no-code customization. You can easily modify all elements, content, and styles using Webflow's intuitive drag-and-drop interface."
        },
    ]

    const toggleAccordion = (index) => {
        setCurrentAccordion(index === currentAccordion ? null : index)
    }

    useEffect(() => {
        FaqAnimation()
    }, [])
    return (
        <section className="faq-sec">
            <div className="container-fluid">
                <div className="row align-items-center  padd-y padd-x row-gap-3">
                    <div className="col-lg-5 col-12">
                        <span className={`${inter.className} abt-heading mb-3 d-block text-start`}>
                            [ Faqs ]
                        </span>
                        <h2 className="primary-font" data-aos="fade-right">Got <br />
                            Questions?</h2>
                    </div>
                    <div className="col-lg-7 col-12">
                        <div className="faqs">
                            {faqs.map((faq, index) => {
                                return (
                                    <div className={`accordion-custom ${index === currentAccordion ? "active" : ""}`} key={index}>
                                        <div className="accordion-custom-head" onClick={() => toggleAccordion(index)}>
                                            <p className={`faq-question ${instrument_sans.className}`}>{faq.faqHead}</p>
                                            <i className={`fa-solid ${index === currentAccordion ? "fa-xmark" : "fa-plus"}`}></i>
                                        </div>
                                        <div className="accordion-custom-body">
                                            <p className={`para-section ${instrument_sans.className}`}>{faq.faqBody}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-12 position-relative">
                        <div className="scrolling-text">
                            <div className="rail">
                                <h4 className="primary-font slide-font">WebDesignInnovators.COM</h4>
                                <h4 className="primary-font slide-font">WebDesignInnovators.COM</h4>
                                <h4 className="primary-font slide-font">WebDesignInnovators.COM</h4>
                                <h4 className="primary-font slide-font">WebDesignInnovators.COM</h4>
                            </div>
                        </div>
                        <Image src={web_box} alt="" className="img-fluid last_box_web" loading="lazy" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FaqSection;
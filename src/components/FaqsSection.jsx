"use client";
import { instrument_sans, inter } from "@/app/(web)/assets/fonts/custom";
import { useEffect, useState } from "react";
import { FaqAnimation } from "@/utils/animations/faqs";
import Image from "next/image";
import web_box from "@/app/(web)/assets/images/innovation_box_2.png";
import client_image_7 from "@/app/(web)/assets/images/client_image-7.png";
import ScrollRevealHandler from "@/components/ScrollRevealHandler";
import FancyButton from "./FancyButton";
const FaqSection = () => {
  const [currentAccordion, setCurrentAccordion] = useState(0);
  const faqs = [
    {
      faqHead: "What services does WebDesign Innovators provide?",
      faqBody:
        "Absolutely not! This template is designed for no-code customization. You can easily modify all elements, content, and styles using Webflow's intuitive drag-and-drop interface.",
    },
    {
      faqHead: "How can SquareUp help my business?",
      faqBody:
        "Absolutely not! This template is designed for no-code customization. You can easily modify all elements, content, and styles using Webflow's intuitive drag-and-drop interface.",
    },
    {
      faqHead: "What industries does SquareUp work with?",
      faqBody:
        "Absolutely not! This template is designed for no-code customization. You can easily modify all elements, content, and styles using Webflow's intuitive drag-and-drop interface.",
    },
    {
      faqHead:
        "Do you offer ongoing support and maintenance after the project is completed?",
      faqBody:
        "Absolutely not! This template is designed for no-code customization. You can easily modify all elements, content, and styles using Webflow's intuitive drag-and-drop interface.",
    },
    {
      faqHead: "Can you work with existing design or development frameworks?",
      faqBody:
        "Absolutely not! This template is designed for no-code customization. You can easily modify all elements, content, and styles using Webflow's intuitive drag-and-drop interface.",
    },
    {
      faqHead: "What services does WebDesign Innovators provide?",
      faqBody:
        "Absolutely not! This template is designed for no-code customization. You can easily modify all elements, content, and styles using Webflow's intuitive drag-and-drop interface.",
    },
    {
      faqHead: "What services does WebDesign Innovators provide?",
      faqBody:
        "Absolutely not! This template is designed for no-code customization. You can easily modify all elements, content, and styles using Webflow's intuitive drag-and-drop interface.",
    },
  ];

  const toggleAccordion = (index) => {
    setCurrentAccordion(index === currentAccordion ? null : index);
  };

  useEffect(() => {
    FaqAnimation();
  }, []);
  return (
    <section className="faq-sec">
      <ScrollRevealHandler />
      <div className="container-fluid">
        <div className="row  padd-y padd-x row-gap-3 align-items-center">
          <div className="col-lg-5 col-12">
            <span
              className={`${inter.className} abt-heading mb-3 d-block text-start`}
            >
              [ Faqs ]
            </span>
            <h2 className="primary-font reveal-text" data-aos="fade-right">
              Got <br />
              Questions?
            </h2>
            <div className="sticky-wrapper">
              <div className="faq-form-wrapper">
                <p className="response-para">
                  <i className="fa-solid fa-circle"></i>
                  <span>Response time: 1 hours</span>
                </p>
                <h2 className="primary-font">
                  Tell details about your project
                </h2>
                <form action="#">
                  <div className="wrp">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Full name"
                      className="text-inp"
                    />
                  </div>
                  <div className="wrp">
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="Your email"
                      className="text-inp"
                    />
                  </div>
                  <div className="wrp">
                    <input
                      type="tel"
                      name=""
                      id=""
                      placeholder="Your Phone"
                      className="text-inp"
                    />
                  </div>
                  <div className="wrp">
                    <textarea
                      name=""
                      id=""
                      placeholder="Your Message"
                      className="text-inp"
                    ></textarea>
                  </div>
                  {/* <div className="form-check">
                  <input type="checkbox" name="subs" className="check-inp" />
                  <label htmlFor="subs" className="check-label">
                    Subscribe to Newsletter
                  </label>
                </div> */}
                  <div className="author-area">
                    {/* <div className="author">
                    <Image
                      src={client_image_7}
                      alt=""
                      className="img-fluid"
                      loading="lazy"
                    />
                    <div>
                      <h6>Liven Geo</h6>
                      <p>Support Developer</p>
                    </div>
                  </div> */}
                    {/* <button
                    className={`btn-main ${instrument_sans.className}`}
                    data-aos="zoom-in"
                  >
                    <span className="text">Submit now</span>
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </button> */}
                    <FancyButton data-aos="zoom-in" text="Submit now" />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-12">
            <div className="right-col-wrapper ">
              <div className="faqs">
                {faqs.map((faq, index) => {
                  return (
                    <div
                      className={`accordion-custom ${
                        index === currentAccordion ? "active" : ""
                      }`}
                      key={index}
                    >
                      <div
                        className="accordion-custom-head"
                        onClick={() => toggleAccordion(index)}
                      >
                        {/* Counting Number */}
                        <span className="faq-count primary-font">
                          {(index + 1).toString().padStart(2, "0")}
                        </span>

                        <p
                          className={`faq-question ${instrument_sans.className}`}
                        >
                          {faq.faqHead}
                        </p>
                        <i className="fa-solid fa-plus"></i>
                      </div>
                      <div className="accordion-custom-body">
                        <p
                          className={`para-section ${instrument_sans.className}`}
                        >
                          {faq.faqBody}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 position-relative">
            <div className="scrolling-text">
              <div className="rail">
                <h4 className="primary-font slide-font">
                  WebDesignInnovators.COM
                </h4>
                <h4 className="primary-font slide-font">
                  WebDesignInnovators.COM
                </h4>
                <h4 className="primary-font slide-font">
                  WebDesignInnovators.COM
                </h4>
                <h4 className="primary-font slide-font">
                  WebDesignInnovators.COM
                </h4>
              </div>
            </div>
            <Image
              src={web_box}
              alt=""
              className="img-fluid last_box_web"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import sliderImage from "@/app/(web)/assets/images/slide-1.webp"
import sliderImage2 from "@/app/(web)/assets/images/slide-2.webp"
import sliderImage3 from "@/app/(web)/assets/images/slide-3.webp"
import { instrument_sans } from "@/app/(web)/assets/fonts/custom";



const SliderSection2 = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let panels = gsap.utils.toArray(".panel")
      ;

    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
        anticipatePin: 1,
        invalidateOnRefresh: true
      });
    });

    let maxScroll;
    let pageScrollTrigger = ScrollTrigger.create({ // snap whole page to the closest section!
      // normally we'd just do snap: 1 / panels.length but we'll use a function-based value so that we can handle the very start and end values in a special way to prevent looping on the snap
      snap: false
    });
    function onResize() {
      maxScroll = ScrollTrigger.maxScroll(window) - 1;
    }
    onResize();
    window.addEventListener("resize", onResize);

  }, [])
  return (
  <div className="position-relative">
    <section className="panel green">
      <Image fill className="image img-fluid" loading="lazy" quality={100} sizes="100vw" src={sliderImage} alt="" />
     <div className="content_area padd-x pt-5" >
        <div className="category-area">
          <div className="category">
            <a href="#" className="text-decoration-none">
              <span className={`${instrument_sans.className} category-font`}>Web & App Design</span>
            </a>
          </div>
          <div className="category">
            <a href="#" className="text-decoration-none">
              <span className={`${instrument_sans.className} category-font`}>Responsive Frontends</span>
            </a>
          </div>
        </div>
        <div><p className="para-section mb-3">Landing page design for news platform</p>
          <h2 className="primary-font">Project Name</h2></div>
      </div>
      <div className='dots-area'>
        {[...Array(3)].map((_, i) => (
          <span key={i - 1} className={`custom-bullet primary-font ${i === 0 ? 'active' : ''}`
          }>0{i + 1}</span>))}
      </div>
    </section>
    <section className="panel green">
      <Image fill className="image img-fluid" loading="lazy" quality={100} sizes="100vw" src={sliderImage2} alt="" />
      <div className="content_area padd-x pt-5">
        <div className="category-area">
          <div className="category">
            <a href="#" className="text-decoration-none">
              <span className={`${instrument_sans.className} category-font`}>Web & App Design</span>
            </a>
          </div>
          <div className="category">
            <a href="#" className="text-decoration-none">
              <span className={`${instrument_sans.className} category-font`}>Responsive Frontends</span>
            </a>
          </div>
        </div>
        <div><p className="para-section mb-3">Landing page design for news platform</p>
          <h2 className="primary-font">Project Name</h2></div>
      </div>
      <div className='dots-area'>

        {[...Array(3)].map((_, i) => (

          <span key={i - 1} className={`custom-bullet primary-font ${i === 1 ? 'active' : ''}`
          }>0{i + 1}</span>))}
      </div>
    </section>

    <section className="panel green">
      <Image fill className="image img-fluid last-image" loading="lazy" quality={100} sizes="100vw" src={sliderImage3} alt="" />
      <div className="content_area padd-x pt-5">
        {/* Categories */}
        <div className="category-area">
          <div className="category">
            <a href="#" className="text-decoration-none">
              <span className={`${instrument_sans.className} category-font`}>Web & App Design</span>
            </a>
          </div>
          <div className="category">
            <a href="#" className="text-decoration-none">
              <span className={`${instrument_sans.className} category-font`}>Responsive Frontends</span>
            </a>
          </div>
        </div>

        {/* Project Title */}
        <div className="mt-4">
          <p className="para-section mb-3">Logo Design</p>
          <h2 className="primary-font">Project Name</h2>
        </div>
      </div>

      <div className='dots-area'>

        {[...Array(3)].map((_, i) => (

          <span key={i - 1} className={`custom-bullet primary-font ${i === 2 ? 'active' : ''}`
          }>0{i + 1}</span>))}
      </div>
    </section>


  </div>
  )
}

export default SliderSection2;
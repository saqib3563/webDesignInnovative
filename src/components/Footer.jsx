"use client";

import Image from "next/image";
import logoImage from "@/app/(web)/assets/images/logo.avif";
import { instrument_sans, inter } from "@/app/(web)/assets/fonts/custom";
import Link from "next/link";
import { useRef } from "react";
import { usePathname } from "next/navigation";
import SwiperComponent from "./slider";
import { SwiperSlide } from "swiper/react";
import logo1 from "@/app/(web)/assets/images/footer-logo-1.webp";
import logo2 from "@/app/(web)/assets/images/footer-logo-2.webp";
import logo3 from "@/app/(web)/assets/images/footer-logo-3.webp";
import logo4 from "@/app/(web)/assets/images/footer-logo-4.webp";
import logo5 from "@/app/(web)/assets/images/footer-logo-5.webp";
import logo6 from "@/app/(web)/assets/images/footer-logo-6.webp";
import logo7 from "@/app/(web)/assets/images/footer-logo-7.webp";
import logo8 from "@/app/(web)/assets/images/footer-logo-8.webp";
import logo9 from "@/app/(web)/assets/images/footer-logo-9.webp";
import logo10 from "@/app/(web)/assets/images/footer-logo-10.webp";
import logo11 from "@/app/(web)/assets/images/footer-logo-11.webp";
import logo12 from "@/app/(web)/assets/images/footer-logo-12.webp";

const Footer = () => {
  // --- Dynamic logos array ---
  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12,
  ];

  const footerRef = useRef(null);
  const path = usePathname();
  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About Us",
      path: "#",
    },
    {
      title: "Projects",
      path: "#",
    },
    {
      title: "Services",
      path: "#",
    },
    {
      title: "Contact Us",
      path: "#",
    },
    {
      title: "Blogs",
      path: "#",
    },
    {
      title: "FAQS",
      path: "#",
    },
  ];

  return (
    <footer ref={footerRef} className="padd-y padd-x">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            {/* <div className="area-logo-footer">
              <Image src={logoImage} alt="logo" className="img-fluid logo mb-3" />
              <p className={`para-section mb-3 ${instrument_sans.className}`}>
                Crafting bold visuals and powerful stories that inspire.
              </p>

              <div className="social-links-area mb-5">
                {["instagram", "x-twitter", "linkedin", "youtube"].map((icon, i) => (
                  <Link key={i} href="#" className="social-links">
                    <i className={`fa-brands fa-${icon}`}></i>
                  </Link>
                ))}
              </div>

              <nav className="nav-footer-links">
                <ul>
                  {navLinks.map((item, i) => (
                    <li key={i}>
                      <Link href="#" className={`${inter.className} ${path.includes(item.path) ? 'active' : ''}`}>{item?.title}</Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <span className="separator" />
            </div> */}

            <div className="footer-upper">
              <div className="row justify-content-md-center justify-content-start">
                <div className="col-md-3 col-6">
                  <h4 className="mb-4 quick-link-hd">
                    <i className="fa-solid fa-circle animate-pulse"></i>
                    Company
                  </h4>
                  <ul className="quick-link-list">
                    <li>
                      <Link href="#" className="quick-link">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="quick-link">
                        Works
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="quick-link">
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="quick-link">
                        Blogs
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="quick-link">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="order-1 order-md-0 col-md-9">
                  <h4 className="mb-4 quick-link-hd">
                    <i className="fa-solid fa-circle animate-pulse"></i>{" "}
                    Services
                  </h4>
                  <div className="row">
                    <div className="col-12 col-md-4">
                      <ul className="quick-link-list">
                        <li>
                          <Link href="#" className="quick-link">
                            Design & Dev
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="quick-link">
                            App Development
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="quick-link">
                            E-Commerce
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="quick-link">
                            Video Animation
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-12 col-md-4">
                      <ul className="quick-link-list">
                        <li>
                          <Link href="#" className="quick-link">
                            Web Maintenance
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="quick-link">
                            Domain & Hosting
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-12 col-md-4">
                      <ul className="quick-link-list">
                        <li>
                          <Link href="#" className="quick-link">
                            Branding
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="quick-link">
                            Digital Marketing
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <span className="separator" />

            <div className="row align-items-center">
              <div className="col-xl-8 col-md-7 col-12 ft-center">
                <span
                  className={`footer-para-1 mb-3 ${instrument_sans.className} d-block`}
                >
                  SERVING GLOBALLY
                </span>
                <span className="primary-font secondary-heading mb-4 d-block">
                  Based in USA
                </span>
                <span className="primary-font main-footer-head d-block">
                  Let’s Chat
                </span>
              </div>

              <div className="col-xl-4 col-md-5 col-12 ft-center">
                <span className="primary-font secondary-heading mb-3 d-block">
                  Email Newsletter
                </span>
                <span
                  className={`footer-para-1 footer-para-2 mb-3 ${instrument_sans.className} d-block`}
                >
                  Get the Latest Inspiration & Insights
                </span>

                <div className="inp-border">
                  <div className="footer-inp-wrp">
                    <input
                      type="text"
                      className={`inp-footer ${instrument_sans.className}`}
                      placeholder="Your Email"
                    />
                    <button className="signup-btn primary-font">Signup</button>
                  </div>
                </div>
              </div>
            </div>

            <span className="separator" />

            <div className="last-row"></div>
            <div className="row align-items-center">
              <div className="mb-4 col-md-4 mb-md-6">
                <div>
                  <p
                    className={`footer-para-1 mb-3 ${instrument_sans.className}`}
                  >
                    © {new Date().getFullYear()} – Web Design Innovators
                  </p>
                  <Link
                    href="mailto:contact@webdesigninnovations.com"
                    className="last-link primary-font"
                  >
                    contact@webdesigninnovations.com
                  </Link>
                </div>
              </div>
              <div className="col-md-4 order-1 order-md-0">
                <ul className="footer-social-links">
                  <li>
                    <Link href="#">
                      <i className="fa-brands fa-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa-brands fa-x-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa-brands fa-linkedin"></i>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mb-4 col-md-4 mb-md-0">
                <div className="text-end">
                  <Link
                    href="#"
                    className={`footer-para-1 d-block mb-2 ${instrument_sans.className}`}
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="#"
                    className={`footer-para-1 d-block ${instrument_sans.className}`}
                  >
                    Terms & Conditions
                  </Link>
                </div>
              </div>
            </div>

            {/* my slider herer */}
            {/* === Dynamic Footer Slider === */}
            <div className="footer-logo-slider">
              <SwiperComponent
                spaceBetween={30}
                slidesPerView={5}
                loop={true}
                autoplay={{ delay: 1000 }}
                speed={2000}
                breakpoints={{
                  1280: { slidesPerView: 5 }, // large screens
                  1024: { slidesPerView: 4 },
                  768: { slidesPerView: 3 },
                  500: { slidesPerView: 2 },
                  0: { slidesPerView: 1 }, // mobile
                }}
              >
                {logos.map((logo, index) => (
                  <SwiperSlide key={index}>
                    <Link href="#">
                      <Image
                        src={logo}
                        alt={`logo-${index}`}
                        width={245}
                        height={100}
                        style={{ objectFit: "contain" }}
                      />
                    </Link>
                  </SwiperSlide>
                ))}
              </SwiperComponent>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

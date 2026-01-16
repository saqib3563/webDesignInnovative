"use client";
import Link from "next/link";
import { instrument_sans, inter } from "@/app/(web)/assets/fonts/custom";
import hero_bg_2 from "@/app/(web)/assets/images/banner-image-2.png";

const AboutUsBanner = () => {
  return (
    <section
      className="padd-y padd-x about-page-banner"
      style={{
        backgroundImage: `url(${hero_bg_2.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container-fluid">
        <div className="page-header_wrapper">
          <h2 className="primary-font">About Us</h2>
          <div className="bread-crumb">
            <Link
              href="#"
              className="para-section para-sec-crumb text-decoration-none"
            >
              Home
            </Link>
            <span
              className={`${inter.className} para-section para-section-crumb`}
            >
              -
            </span>
            <span
              className={`${inter.className} para-section para-section-crumb`}
            >
              About Us
            </span>
          </div>
        </div>
        <div className="about-content-area">
          <h3 className={`${inter.className} abt-heading mb-5 text-start`}>
            [ who we are ]
          </h3>

          <p className={`${instrument_sans.className} abt-para text-start`}>
            From concept to execution, we build impactful <br /> digital
            solutions that resonate with real <br /> people and deliver results
          </p>
        </div>
        <div className="about-counter-area">
          <p
            className={`para-section para-section-2 mt-0 ${instrument_sans.className}`}
          >
            With expertise in areas such as web design, digital marketing,{" "}
            <br />
            social media management, and content creation, digital agencies play{" "}
            <br />a crucial role.
          </p>
          <div className="d-flex gap-5 countt">
            <div>
                <h2 className="">400+</h2>
                <p className={`${instrument_sans.className} `}>Successful Projects <br /> Delivered</p>
            </div>
            <div>
                <h2 className="">95%</h2>
                <p className={`${instrument_sans.className} `}>Successful Projects <br /> Delivered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsBanner;

"use client";

import { instrument_sans } from "@/app/(web)/assets/fonts/custom";

// import Link from "next/link";
// import { instrument_sans, inter } from "@/app/(web)/assets/fonts/custom";
// import hero_bg_2 from "@/app/(web)/assets/images/banner-image-2.png";

const MissionSection = () => {
  return (
    <section className="mission-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="primary-font" data-aos="fade-right">
              Innovative <br />
              <span className="outline">Mission</span>
            </h2>
          </div>
          <div className="col-md-6">
            <h3 className={`mission-hd mt-0 mb-4 ${instrument_sans.className}`}>
              01. Global Presense
            </h3>
            <p className={`para-section para-section-2 ${instrument_sans.className}`}>
              BYTRIX Technologies incorporates progressive digital <br />{" "}
              solutions and resources to equip tech-savvy businesses <br /> with
              advanced products and services. We have put <br /> forward
              cutting-edge technology to revolutionize <br /> businesses and
              business processes on an international level.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;

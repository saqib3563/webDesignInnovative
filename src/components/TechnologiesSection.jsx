"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import dummyImage from "@/app/(web)/assets/images/flag-img-1.svg";

const TechnologiesSection = () => {
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    gsap.fromTo(
      ".tab-conlist ul",
      { opacity: 0, y: 12 },
      {
        opacity: 1,
        y: 0,
        duration: 1.35,
        ease: "power2.out",
      }
    );
  }, [activeTab]);

  return (
    <section className="tecno-sec">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="primary-font mb-3 text-center">
              Technologies
              <br />
              We Expert
            </h2>

            {/* ===== TABS ===== */}
            <div className="tech-we-ex-menu-tabs">
              <ul>
                {[1, 2, 3, 4, 5].map((num, i) => (
                  <li key={num}>
                    <button
                      className={activeTab === num ? "active" : ""}
                      onClick={() => setActiveTab(num)}
                    >
                      {
                        [
                          "Mobile",
                          "Full Stack Development",
                          "Database",
                          "Backend",
                          "Blockchain",
                        ][i]
                      }
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* ===== CONTENT ===== */}
            <div className="tab-conlist">
              {activeTab === 1 && (
                <ul className="tab-conlist-1">
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Image src={dummyImage} alt="tech" />
                      <h4>IOS</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Image src={dummyImage} alt="tech" />
                      <h4>Android</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Image src={dummyImage} alt="tech" />
                      <h4>Iconic</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Image src={dummyImage} alt="tech" />
                      <h4>Kotlin</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Image src={dummyImage} alt="tech" />
                      <h4>Flutter</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Image src={dummyImage} alt="tech" />
                      <h4>Objective</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Image src={dummyImage} alt="tech" />
                      <h4>Swift</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Image src={dummyImage} alt="tech" />
                      <h4>React Native</h4>
                    </div>
                  </li>
                </ul>
              )}

              {activeTab === 2 && (
                <ul className="tab-conlist-2">
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Image src={dummyImage} alt="tech" />
                      <h4>Python</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Image src={dummyImage} alt="tech" />
                      <h4>JavaScript</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Image src={dummyImage} alt="tech" />
                      <h4>HTML</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Image src={dummyImage} alt="tech" />
                      <h4>SQL</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Image src={dummyImage} alt="tech" />
                      <h4>CSS</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Image src={dummyImage} alt="tech" />
                      <h4>React</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Image src={dummyImage} alt="tech" />
                      <h4>JAVA</h4>
                    </div>
                  </li>
                </ul>
              )}

              {activeTab === 3 && (
                <ul className="tab-conlist-3">
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Image src={dummyImage} alt="tech" />
                      <h4>Mongo db</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Image src={dummyImage} alt="tech" />
                      <h4>Mysql</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Image src={dummyImage} alt="tech" />
                      <h4>Mssql</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Image src={dummyImage} alt="tech" />
                      <h4>Firebase</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Image src={dummyImage} alt="tech" />
                      <h4>Dynamodb</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Image src={dummyImage} alt="tech" />
                      <h4>Redis</h4>
                    </div>
                  </li>
                </ul>
              )}

              {activeTab === 4 && (
                <ul className="tab-conlist-4">
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Image src={dummyImage} alt="tech" />
                      <h4>Php</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Image src={dummyImage} alt="tech" />
                      <h4>JAVA</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Image src={dummyImage} alt="tech" />
                      <h4>Node.js</h4>
                    </div>
                  </li>
                </ul>
              )}

              {activeTab === 5 && (
                <ul className="tab-conlist-5">
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Image src={dummyImage} alt="tech" />
                      <h4>Ethereum</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Image src={dummyImage} alt="tech" />
                      <h4>Solidity</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Image src={dummyImage} alt="tech" />
                      <h4>Bitcoin</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Image src={dummyImage} alt="tech" />
                      <h4>Stellar</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Image src={dummyImage} alt="tech" />
                      <h4>Node</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Image src={dummyImage} alt="tech" />
                      <h4>SRP</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Image src={dummyImage} alt="tech" />
                      <h4>Litecoin</h4>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div className="tablottie">
                      <Image src={dummyImage} alt="tech" />
                      <h4>Bitcoin Cash</h4>
                    </div>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;

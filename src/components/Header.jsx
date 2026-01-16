"use client"
import Image from "next/image"
import logoImage from "@/app/(web)/assets/images/logo.avif"
import iconMenu from "@/app/(web)/assets/images/Icon.png"
import { useContext, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { sideBarContext } from "@/app/context"

const Header = () => {
  const { toggleMenu } = useContext(sideBarContext);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);   
    const showAnim = gsap.from('header', {
      yPercent: -100,
      paused: true,
      duration: 0.2,
    }).progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: "max",

      // markers: true,
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse()
      }
    });


  }, [])


  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="header-main">
            <div>
              <a href=".">
                <Image src={logoImage} alt="logo" className={"img-fluid logo"} />
              </a>
            </div>
            <div>
              <button className="menu-btn" onClick={toggleMenu}>
                <Image src={iconMenu} alt="menu_icon" className={"img-fluid animation-rot"} /></button>
            </div>
          </div>
        </div>

      </header>

    </>
  )
}

export default Header

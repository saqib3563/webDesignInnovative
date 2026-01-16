import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const animateInitialObject = () => {
  const width = window.innerWidth;

  const initial = {
    position: "absolute",
    top: "20%",
    left: "50%",
    xPercent: -50,
    yPercent: -50,
    scale: 2,
    opacity: 0
  };

  if (width < 1576) {
    initial.top = "10%";
  }

  return initial;
};

const afterEffectAnimation = (diamondRef, sectionRef) => {
  const width = window.innerWidth;

  // Get the height of the section dynamically
  const sectionHeight = sectionRef.current.offsetHeight;

  return {
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top top",
      end: `+=${sectionHeight}`, // animation ends at section bottom
      scrub: 1,
      invalidateOnRefresh: true // ensures height recalculation on resize
    },
    top: "auto",
    left: "auto",
    bottom: "-30px",
    right: "5%",
    xPercent: 0,
    yPercent: 0,
    ease: "power2.out"
  };
};

export const AnimationService = (diamondRef, sectionRef) => {
  return () => {
    const diamond = diamondRef.current;

    // Set initial state first
    gsap.set(diamond, animateInitialObject());

    // Entrance animation: scale down and fade in
    gsap.to(diamond, {
      scale: 1,
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
      delay: 0.5
    });

    // Scroll-triggered movement to bottom-right
    gsap.to(diamond, afterEffectAnimation(diamondRef, sectionRef));
  };
};

import gsap from "gsap";

// const stripAnimate = () => {
//     const width = window.innerWidth;

//     const animateTrigger = {
//         trigger: ".slide-strip-wrapper",
//         start: "-100% 0%",
//         end: () => "+=280",
//         scrub: 2,
//         pin: true,
//         anticipatePin: 1,
//         pinSpacing: true
//     };

//     // if (width > 1800) {
//     //     animateTrigger.start = "-60% -5%";
//     // } else if (width >= 576 && width < 1024) {
//     //     animateTrigger.start = "-120% -5%";
//     // } else if (width < 576) {
//     //     animateTrigger.end = () => "+=100"
//     //     animateTrigger.start = "-120% -5%";
//     // }

//     return animateTrigger;
// };

export const AnimationAboutUs =
    () => {

        // Split text function
       const splitText = (selector) => {
    const element = document.querySelector(selector)
    if (!element) return null

    const html = element.innerHTML

    // <br> ko temporary token bana do
    const temp = html.replace(/<br\s*\/?>/gi, " %%BR%% ")

    const words = temp.split(" ")

    element.innerHTML = words
        .map(word => {
            if (word === "%%BR%%") return "<br/>"
            return `<span class="word">${word}</span>`
        })
        .join(" ")

    return element.querySelectorAll(".word")
}


        // Split heading into chars
        const splitChars = (selector) => {
            const element = document.querySelector(selector)
            if (!element) return null

            const text = element.textContent
            element.innerHTML = text.split('').map(char =>
                char === ' ' ? ' ' : `<span class="char">${char}</span>`
            ).join('')
            return element.querySelectorAll('.char')
        }

        // Split texts
        const headingChars = splitChars('.abt-heading')
        const paraWords = splitText('.abt-para')
        const secondParaWords = splitText('.second-para')

        // Heading chars animation - Modern glitch effect
        if (headingChars) {
            gsap.set(headingChars, { opacity: 0, y: 100, rotationX: -90 })
            gsap.to(headingChars, {
                opacity: 1,
                y: 0,
                rotationX: 0,
                duration: 1.2,
                stagger: {
                    amount: 0.8,
                    from: "random"
                },
                ease: "expo.out",
                scrollTrigger: {
                    trigger: ".about-sec",
                    start: "top 80%",
                }
            })
        }

        // About paragraph words - Magnetic reveal
        if (paraWords) {
            gsap.set(paraWords, { opacity: 0, scale: 0.8, filter: "blur(10px)" })
            gsap.to(paraWords, {
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
                duration: 0.8,
                stagger: {
                    amount: 1.2,
                    ease: "power2.inOut"
                },
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: ".about-sec",
                    start: "top 70%",
                }
            })
        }

        // Innovation box - 3D flip entrance
        gsap.set(".innovation_box", { opacity: 0, rotationY: 180, scale: 0.5 })
        gsap.to(".innovation_box", {
            opacity: 1,
            rotationY: 0,
            scale: 1,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".slide-strip-wrapper",
                start: "top 70%",
            }
        })

        // Second paragraph - Wave effect
        if (secondParaWords) {
            gsap.set(secondParaWords, { opacity: 0, y: 10, skewX: 15 })
            gsap.to(secondParaWords, {
                opacity: 1,
                y: 0,
                skewX: 0,
                duration: 0.6,
                stagger: {
                    amount: 1,
                    ease: "sine.inOut"
                },
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".second-para",
                    start: "top 85%",
                }
            })
        }

        // const strip = document.querySelector(".slide-strip-inner")

        // gsap.to(strip, {
        //     x: () => -(strip.scrollWidth - window.innerWidth),
        //     ease: "none",
        //     scrollTrigger: stripAnimate()
        // })

    }
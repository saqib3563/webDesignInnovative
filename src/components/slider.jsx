"use client";

import { useEffect, useState } from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  FreeMode
} from "swiper/modules";
import Button from "@/components/global/button";


const SwiperComponent = ({
  children,
  arrowBtns = false,
  slidesPerView = 5,
  spaceBetween = 10,
  loop = false,
  draggable = false,
  autoplayAllow = false,
  delay,
  disableOnInteraction = false,
  btnStyle1 = "",
  btnStyle2 = "",
  btnFunc1 = null,
  btnFunc2 = null,
  breakpoints = {},
  onReachEnd,
  dots,
  speed,
  freeMode,
  reverseDirection = false,
  ...props
}) => {
  const [swiper, setSwiper] = useState(null);
  useEffect(() => {
    if (!swiper) return;

    const handleClick = (e) => {
      const bullet = e.target.closest(".custom-bullet");
      if (!bullet) return;

      const index = Number(bullet.dataset.index);
      swiper.slideToLoop(index); // 🔥 loop-safe
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [swiper]);

  return (
    <>
      <Swiper
        className="px-2"
        onReachEnd={onReachEnd}
        breakpoints={breakpoints}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, FreeMode]}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        loop={loop}
        onSwiper={(swiper) => setSwiper(swiper)}
        {...(autoplayAllow && {
          autoplay: {
            delay: 0,
            disableOnInteraction:false,
            pauseOnMouseEnter:false,
            reverseDirection: reverseDirection
          },
        })}
        navigation={arrowBtns}
        scrollbar={{ draggable }}
        {...(dots && {
          pagination: {
            type: "custom",
            clickable: true,
            renderCustom: (swiper, current, total) => {
              let bullets = `<div class='${"dots-area"}'>`;
              for (let i = 1; i <= total; i++) {
                bullets += `<span data-index="${i - 1}" class="custom-bullet primary-font ${i === current ? 'active' : ''
                  }">0${i}</span>`;
              }
              bullets += '</div>';
              return bullets;
            },
          },
        })}
        freeMode={{
          enabled:freeMode,
          momentum:false,
          sticky:true
        }}
        speed={speed}
        {...props}
      >
        {children}
      </Swiper>
      {arrowBtns && (
        <div className="btn-main-arrow">
          <Button
            onClick={() => {
              swiper?.slidePrev();
              btnFunc1 && btnFunc1();
            }}
            className={`btn-arrows prev-btn ${btnStyle1}`}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </Button>
          <Button
            onClick={() => {
              swiper?.slideNext();
              btnFunc2 && btnFunc2();
            }}
            className={`btn-arrows next-btn ${btnStyle2}`}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </Button>
        </div>
      )}
    </>
  );
};

export default SwiperComponent;
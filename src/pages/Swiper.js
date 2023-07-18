import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./Swiper.css";

// import required modules
import { EffectCards } from "swiper/modules";

export default function Banner({ data }) {
  return (
    <div className="content">
      <div className="title">
        <h1>Recently Added Films</h1>
        <p>(Swipe Left...)</p>
      </div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {data?.map((film) => (
          <SwiperSlide className="cardSelf">
            <div>
              <p className="filmTitle">{film.title}</p>
              <img className="imgSelf" src={film.photo} alt={film.title} />
              <p className="filmDescription">{film.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

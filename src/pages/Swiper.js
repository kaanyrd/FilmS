import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./Swiper.css";
import { EffectCards } from "swiper/modules";
import noMovieIcon from "../assets/noMovie3.png";

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
          <SwiperSlide className="cardSelf" key={film.id}>
            <div>
              <p className="filmTitle">{film.title}</p>
              <img
                className="imgSelf"
                src={film.photo.length === 0 ? noMovieIcon : film.photo}
                alt={film.title}
              />
              <p className="filmDescription">{film.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

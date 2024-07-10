import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import fetchData from "../../../Utils/FetchData";

import "swiper/css";
import "swiper/css/navigation";

import "./style.css";
import BerandCart from "./BerandCart";

export default function BerandSlide() {
  const [berand, setBerand] = useState();

  useEffect(() => {
    (async () => {
      const res = await fetchData("brands?populate=*");
      setBerand(res.data);
    })();
  }, []);
  const berandItem = berand?.map((e, index) => (
    <SwiperSlide key={index}>
      <BerandCart
        title={e.attributes.name}
        image={
          import.meta.env.VITE_BASE_URL +
          e?.attributes?.image?.data?.attributes?.url
        }
      />
    </SwiperSlide>
  ));
  return (
    <>
      <Swiper
        slidesPerView={8}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          1200: {
            slidesPerView: 8,
          },
          1000: {
            slidesPerView: 6,
          },
          600: {
            slidesPerView: 4,
          },
          300: {
            slidesPerView: 3,
          },
        }}
        modules={[Autoplay]}
        className="berand"
      >
        {berandItem}
      </Swiper>
    </>
  );
}

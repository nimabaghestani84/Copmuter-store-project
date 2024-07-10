import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import fetchData from "../../../Utils/FetchData";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

export default function BannerSlide() {
  const [slide, setSlide] = useState();

  useEffect(() => {
    (async () => {
      const res = await fetchData("sliders?populate=*");
      setSlide(res.data);
    })();
  }, []);
  const bannerItem = slide?.map((e, index) => (
    <SwiperSlide key={index}>
      <img
        src={
          import.meta.env.VITE_BASE_URL +
          e?.attributes?.image?.data?.attributes?.url
        }
        alt={e?.attributes?.title}
      />
    </SwiperSlide>
  ));
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="banner"
      >
        {bannerItem}
      </Swiper>
    </>
  );
}

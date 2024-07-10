import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import fetchData from "../../../Utils/FetchData";

import "swiper/css";
import "swiper/css/navigation";

import "./style.css";
import CartDiscount from "./CardDiscount";
import { Stack } from "@mui/material";
import { motion } from "framer-motion";

export default function DiscountSlider() {
  const [slide, setSlide] = useState();

  useEffect(() => {
    (async () => {
      const res = await fetchData(
        "products?populate=*&filters[discount][$gt]=0"
      );
      setSlide(res.data);
    })();
  }, []);
  const bannerItem = slide?.map((e, index) => (
    <SwiperSlide key={index}>
      <CartDiscount
        id={e.id}
        title={e.attributes.name}
        image={
          import.meta.env.VITE_BASE_URL +
          e.attributes.image.data[0].attributes.url
        }
        price={e.attributes.price}
        discountPrice={e.attributes.price * (1 - e.attributes.discount / 100)}
        discount={e.attributes.discount}
      />
    </SwiperSlide>
  ));

  return (
    <>
      <Swiper
        slidesPerView={6}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          1200: {
            slidesPerView: 6,
          },
          1000: {
            slidesPerView: 4,
          },
          600: {
            slidesPerView: 3,
          },
          300: {
            slidesPerView: 2,
          },
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="discountSlider"
      >
        {bannerItem}
      </Swiper>
    </>
  );
}

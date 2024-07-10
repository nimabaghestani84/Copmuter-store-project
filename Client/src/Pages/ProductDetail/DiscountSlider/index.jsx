import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import fetchData from "../../../Utils/FetchData";

import "swiper/css";
import "swiper/css/navigation";

import "./style.css";
import SuggesCart from "./SuggesCard";
import { useParams } from "react-router-dom";

export default function SuggesSlider() {
  const [slide, setSlide] = useState();
  const [product, setProduct] = useState();

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const res = await fetchData(`products/${id}?populate=*`);
      setProduct(res.data);
    })();
  }, [id]);

  useEffect(() => {
    (async () => {
      const res = await fetchData(
        `products?populate=*&filters[categories][id][$eq]=${product?.attributes?.categories?.data[0]?.id}`
      );
      setSlide(res.data);
    })();
  }, [product]);

  const bannerItem = slide?.map((e, index) => (
    <SwiperSlide key={index}>
      <SuggesCart
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
        className="suggesSlider"
      >
        {bannerItem}
      </Swiper>
    </>
  );
}

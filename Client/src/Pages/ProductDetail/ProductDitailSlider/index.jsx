import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import fetchData from "../../../Utils/FetchData";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";
import { Box, Stack } from "@mui/material";
export default function ProductDitailSlider() {
  const [product, setProduct] = useState();

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const res = await fetchData(`products/${id}?populate=*`);
      setProduct(res.data);
    })();
  }, [id]);
  console.log(product);
  let bannerItem = [];

  for (let index = 0; index < 4; index++) {
    bannerItem.push(
      <Box
        sx={{ width: "100%", height: "100%", objectFit: "contain" }}
        component={"img"}
        src={
          import.meta.env.VITE_BASE_URL +
          product?.attributes?.image?.data[index]?.attributes?.url
        }
        alt="product image"
      />
    );
  }

  const bannerImages = bannerItem?.map((e, index) => (
    <SwiperSlide key={index}>
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        width={"100%"}
        height={"100%"}
      >
        {e}
      </Stack>
    </SwiperSlide>
  ));

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="imageBanner"
      >
        {bannerImages}
      </Swiper>
    </>
  );
}

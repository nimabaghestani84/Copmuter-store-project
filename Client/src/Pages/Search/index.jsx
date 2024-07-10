import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import ProductCard from "../Products/ProductCard";
import fetchData from "../../Utils/FetchData";
import ProductSkeleton from "../Products/ProductSkeleton";
import { motion } from "framer-motion";

export default function Search() {
  const { query } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetchData(
        `products?populate=*&filters[name][$containsi]=${query}`
      );
      setProducts(res.data);
    })();
  }, [query]);

  const productIteams = products.map((e, index) => (
    <ProductCard
      key={index}
      id={e.id}
      title={e?.attributes?.name}
      image={
        import.meta.env.VITE_BASE_URL +
        e?.attributes?.image?.data[0]?.attributes?.url
      }
      price={e?.attributes?.price}
      discountPrice={e?.attributes?.price * (1 - e?.attributes?.discount / 100)}
      discount={e?.attributes?.discount}
    />
  ));
  return (
    <Stack
    component={motion.div}
    initial={{ width: 0 ,height:0}}
    animate={{ width: "100%",height:'100%' }}
    exit={{
      x: window.innerWidth,
      transition: {
        duration: 5,
        type: "spring",
        ease: "easeOut"
      },
    }}>
      {products ? (
        <Stack
          my={"13vh"}
          width={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"20px"}
        >
          <Stack
            width={"100%"}
            bgcolor={"Secondary.secend"}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            flexWrap={"wrap"}
          >
            {productIteams}
          </Stack>
        </Stack>
      ) : (
        <ProductSkeleton />
      )}
    </Stack>
  );
}

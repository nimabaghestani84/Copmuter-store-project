import React, { useEffect, useState } from "react";
import CategoryCart from "./CategoryCart";
import { Stack } from "@mui/material";
import fetchData from "../../Utils/FetchData";
import CategorySkeleton from "./CategorySkeleton";
import { motion } from "framer-motion";

export default function Categories() {
  const [categoryItem, setCategoryItem] = useState();
  useEffect(() => {
    (async () => {
      try {
        const res = await fetchData("categories?populate=*");
        setCategoryItem(res.data);
      } catch (error) {
        alert(error);
      }
    })();
  }, []);

  const categoryItems = categoryItem?.map((e, index) => (
    <CategoryCart
      key={index}
      image={
        import.meta.env.VITE_BASE_URL +
        e?.attributes?.image?.data?.attributes?.url
      }
      title={e?.attributes?.name}
      id={e?.id}
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
      {categoryItem ? (
        <Stack
          width={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
          paddingTop={"20vh"}
          flexWrap={"wrap"}
        >
          <Stack
            width={"90%"}
            alignItems={"center"}
            justifyContent={"center"}
            flexWrap={"wrap"}
            direction={"row"}
            gap={"20px"}
          >
            {categoryItems}
          </Stack>
        </Stack>
      ) : (
        <CategorySkeleton />
      )}
    </Stack>
  );
}

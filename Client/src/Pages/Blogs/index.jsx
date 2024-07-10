import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import BlogsCard from "./BlogsCard";
import fetchData from "../../Utils/FetchData";
import BlogSkeleton from "./BlogSkeleton";
import { motion } from "framer-motion";

export default function Blogs() {
  const [blogItem, setBlogItem] = useState();
  // fetch
  useEffect(() => {
    (async () => {
      try {
        const Bres = await fetchData("blogs?populate=*");
        setBlogItem(Bres.data);
      } catch (error) {
        alert(error);
      }
    })();
  }, []);
  // loop on BlogsCard
  const blogItems = blogItem?.map((e, index) => (
    <BlogsCard
      key={index}
      image={
        import.meta.env.VITE_BASE_URL +
        e?.attributes?.image?.data?.attributes?.url
      }
      title={e?.attributes?.title}
      id={e.id}
      create={e?.attributes?.updatedAt}
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
      {blogItem ? (
        // Stack of Blogs
        <Stack
          mt={"13vh"}
          width={"100%"}
          height={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {blogItems}
        </Stack>
      ) : (
        // skeleton
        <BlogSkeleton />
      )}
    </Stack>
  );
}

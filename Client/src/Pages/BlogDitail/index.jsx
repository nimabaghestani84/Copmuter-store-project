import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchData from "../../Utils/FetchData";
import BlogDitailSkeleton from "./BlogDitailSkeleton";
import { motion } from "framer-motion";

export default function BlogDitail() {
  const { blogID } = useParams();
  const [blog, setBlog] = useState();
  // fetch
  useEffect(() => {
    (async () => {
      try {
        const res = await fetchData(`blogs/${blogID}?populate=*`);
        setBlog(res.data);
      } catch (error) {
        alert(error);
      }
    })();
  }, [blogID]);

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
      {blog ? (
        <Stack
          width={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
          pt={"15vh"}
          my={"10vh"}
        >
          <Stack
            width={"90%"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"50px"}
          >
            <Stack
              width={"100%"}
              height={"20vh"}
              alignItems={"start"}
              justifyContent={"start"}
              gap={"10px"}
            >
              {/* title */}
              <Typography sx={{ color: "text.main" }} variant="h4">
                {blog?.attributes?.title}
              </Typography>
              {/* update at */}
              <Typography sx={{ color: "primary.main" }} variant="body2">
                {blog?.attributes?.updatedAt}
              </Typography>
            </Stack>
            {/* image */}
            <Box
              component={"img"}
              width={"95%"}
              height={"60vh"}
              sx={{ objectFit: "contain" }}
              src={
                import.meta.env.VITE_BASE_URL +
                blog?.attributes?.image?.data?.attributes?.url
              }
              alt="blog image"
            />
            {/* Typography one */}
            <Typography sx={{ color: "text.secend" }} variant="body1">
              {blog?.attributes?.descriptionP1}
            </Typography>
            {/* Typography two */}
            <Typography sx={{ color: "text.secend" }} variant="body1">
              {blog?.attributes?.descriptionP2}
            </Typography>
          </Stack>
        </Stack>
      ) : (
        // skeleton
        <BlogDitailSkeleton />
      )}
    </Stack>
  );
}

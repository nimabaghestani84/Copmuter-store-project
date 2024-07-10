import React, { useEffect, useState } from "react";
import BannerSlide from "./BannerSlide";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DiscountSlider from "./DiscountSlider";
import Banner1 from "../../../public/b-4-1.jpg";
import Banner2 from "../../../public/b-4-2.jpg";
import Banner3 from "../../../public/b-4-3.jpg";
import Banner4 from "../../../public/b-4-4.jpg";
import Banner5 from "../../../public/b-2-1.jpg";
import Banner6 from "../../../public/b-2-2.jpg";
import MSIbanner from "../../../public/mid banner 1.png";
import fetchData from "../../Utils/FetchData";
import CategoryItem from "./CategoryItem";
import BerandSlide from "./BerandSlide";
import { Hourglass } from "react-loader-spinner";
import BlogCard from "./BlogCard";
import { motion } from "framer-motion";

export default function Home() {
  const [categoryItem, setCategoryItem] = useState();
  const [blogItem, setBlogItem] = useState();
  useEffect(() => {
    (async () => {
      try {
        // category
        const res = await fetchData("categories?populate=*");
        setCategoryItem(res.data);

        // blog
        const Bres = await fetchData("blogs?populate=*");
        setBlogItem(Bres.data);
      } catch (error) {
        alert(error);
      }
    })();
  }, []);

  // category map
  const categoryItems = categoryItem?.map((e, index) => (
    <CategoryItem
      key={index}
      image={
        import.meta.env.VITE_BASE_URL +
        e?.attributes?.image?.data?.attributes?.url
      }
      title={e?.attributes?.name}
      id={e.id}
    />
  ));

  // blog map
  const blogItems = blogItem?.map((e, index) => (
    <BlogCard
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
      initial={{ width: 0, height: 0 }}
      animate={{ width: "100%", height: "100%" }}
      exit={{
        x: window.innerWidth,
        transition: {
          duration: 5,
          type: "spring",
          ease: "easeOut",
        },
      }}
    >
      {
        categoryItem ? (
          <Stack>
            {/* Slider start */}
            <Box
              sx={{
                width: "100%",
                height: {
                  lg: "80vh",
                  md: "70vh",
                  sm: "40vh",
                },
                mt: "13vh",
              }}
            >
              <BannerSlide />
            </Box>
            {/* Slider end */}
            {/* Discount price banner satrt */}
            <Stack
              sx={{
                height: {
                  sm: "65vh",
                  md: "60vh",
                  xs: "65vh",
                },
              }}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Stack
                justifyContent={"space-evenly"}
                alignItems={"center"}
                direction={"column"}
                width={"95%"}
                sx={{
                  height: {
                    sm: "60vh",
                    md: "55vh",
                    xs: "60vh",
                  },
                  position: "relative",
                }}
                bgcolor={"primary.main"}
                borderRadius={"20px"}
                position={"relative"}
                overflow={"hidden"}
                component={motion.div}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                exit={{
                  x: window.innerWidth,
                  transition: {
                    duration: 5,
                    type: "spring",
                    ease: "easeOut",
                  },
                }}
              >
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  width={"90%"}
                  height={"20%"}
                  position={"absolute"}
                  top={0}
                  left={"5%"}
                  right={"5%"}
                >
                  <Typography
                    sx={{ color: "text.primarytext", fontSize: "1.5rem" }}
                  >
                    Best Discont
                  </Typography>
                  <Box
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <Typography
                      sx={{ color: "text.primarytext", fontSize: "1.5rem" }}
                    >
                      See More
                    </Typography>
                    <ArrowForwardIosIcon sx={{ color: "text.primarytext" }} />
                  </Box>
                </Stack>
                <Stack
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  width={"97%"}
                  height={"78%"}
                  position={"absolute"}
                  bottom={"5%"}
                  right={"2%"}
                  left={"2%"}
                >
                  <DiscountSlider />
                </Stack>
              </Stack>
            </Stack>
            {/* Discount price banner end */}
            {/* Grid banners start */}
            <Grid container px={"30px"} spacing={3}>
              <Grid
                item
                xs={12}
                sm={6}
                sx={{ overflow: "hidden", borderRadius: "20px" }}
              >
                <Stack
                component={motion.div}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                exit={{
                  x: window.innerWidth,
                  transition: {
                    duration: 5,
                    type: "spring",
                    ease: "easeOut",
                  },
                }}
                  alignItems={"center"}
                  justifyContent={"center"}
                  sx={{
                    width: "100%",
                    height: "100%",
                    transition: "all .5s",
                    overflow: "hidden",
                    borderRadius: "20px",
                    boxShadow: "0 0px 10px 5px rgba(0,0,0,.2)",
                    "&:hover": { boxShadow: "0 0px 15px 5px rgba(0,0,0,.3)" },
                  }}
                >
                  <Stack
                    component={motion.div}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    exit={{
                      x: window.innerWidth,
                      transition: {
                        duration: 0.5,
                        type: "spring",
                        ease: "easeOut",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        height: "100%",
                        boxShadow: "0 0px 5px 5px rgba(0,0,0,.2)",
                        borderRadius: "20px",
                        transition: "all 0.5s ease",
                        "&:hover": {
                          scale: "1.1",
                          boxShadow: "0 0px 5px 20px rgba(0,0,0,.4)",
                        },
                      }}
                      bgcolor="white"
                      component={"img"}
                      alt="Banner"
                      src={Banner1}
                    />
                  </Stack>
                </Stack>
              </Grid>

              <Grid item xs={12} sm={6} sx={{ overflow: "hidden" }}>
                <Stack
                  component={motion.div}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  exit={{
                    x: window.innerWidth,
                    transition: {
                      duration: 5,
                      type: "spring",
                      ease: "easeOut",
                    },
                  }}
                  alignItems={"center"}
                  justifyContent={"center"}
                  sx={{
                    width: "100%",
                    height: "100%",
                    transition: "all .5s",
                    overflow: "hidden",
                    borderRadius: "20px",
                    boxShadow: "0 0px 10px 5px rgba(0,0,0,.2)",
                    "&:hover": { boxShadow: "0 0px 15px 5px rgba(0,0,0,.3)" },
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      boxShadow: "0 0px 5px 5px rgba(0,0,0,.2)",
                      borderRadius: "20px",
                      transition: "all 0.5s ease",
                      "&:hover": {
                        scale: "1.1",
                        boxShadow: "0 0px 5px 20px rgba(0,0,0,.4)",
                      },
                    }}
                    bgcolor="white"
                    component={"img"}
                    alt="Banner"
                    src={Banner2}
                  />
                </Stack>
              </Grid>

              <Grid item xs={12} sm={6} sx={{ overflow: "hidden" }}>
                <Stack
                  component={motion.div}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  exit={{
                    x: window.innerWidth,
                    transition: {
                      duration: 5,
                      type: "spring",
                      ease: "easeOut",
                    },
                  }}
                  alignItems={"center"}
                  justifyContent={"center"}
                  sx={{
                    width: "100%",
                    height: "100%",
                    transition: "all .5s",
                    overflow: "hidden",
                    borderRadius: "20px",
                    boxShadow: "0 0px 10px 5px rgba(0,0,0,.2)",
                    "&:hover": { boxShadow: "0 0px 15px 5px rgba(0,0,0,.3)" },
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      boxShadow: "0 0px 5px 5px rgba(0,0,0,.2)",
                      borderRadius: "20px",
                      transition: "all 0.5s ease",
                      "&:hover": {
                        scale: "1.1",
                        boxShadow: "0 0px 5px 20px rgba(0,0,0,.4)",
                      },
                    }}
                    bgcolor="white"
                    component={"img"}
                    alt="Banner"
                    src={Banner3}
                  />
                </Stack>
              </Grid>

              <Grid item xs={12} sm={6} sx={{ overflow: "hidden" }}>
                <Stack
                  component={motion.div}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  exit={{
                    x: window.innerWidth,
                    transition: {
                      duration: 5,
                      type: "spring",
                      ease: "easeOut",
                    },
                  }}
                  alignItems={"center"}
                  justifyContent={"center"}
                  sx={{
                    width: "100%",
                    height: "100%",
                    transition: "all .5s",
                    overflow: "hidden",
                    borderRadius: "20px",
                    boxShadow: "0 0px 10px 5px rgba(0,0,0,.2)",
                    "&:hover": { boxShadow: "0 0px 15px 5px rgba(0,0,0,.3)" },
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      boxShadow: "0 0px 5px 5px rgba(0,0,0,.2)",
                      borderRadius: "20px",
                      transition: "all 0.5s ease",
                      "&:hover": {
                        scale: "1.1",
                        boxShadow: "0 0px 5px 20px rgba(0,0,0,.4)",
                      },
                    }}
                    bgcolor="white"
                    component={"img"}
                    alt="Banner"
                    src={Banner4}
                  />
                </Stack>
              </Grid>
            </Grid>
            {/* Grid banners end */}
            {/* category start */}
            <Stack
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              width={"100%"}
              py={"3%"}
            >
              <Typography
                sx={{ color: "text.main" }}
                component={"h2"}
                py={"2%"}
              >
                Categories
              </Typography>
              <Stack
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={"20px"}
                width={"90%"}
                flexWrap={"wrap"}
              >
                {categoryItems}
              </Stack>
            </Stack>
            {/* category end */}
            {/* Grid banners start */}
            <Grid container px={"30px"} spacing={3}>
              <Grid
                item
                xs={12}
                sm={6}
                sx={{ overflow: "hidden", borderRadius: "20px" }}
              >
                <Stack
                  component={motion.div}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  exit={{
                    x: window.innerWidth,
                    transition: {
                      duration: 5,
                      type: "spring",
                      ease: "easeOut",
                    },
                  }}
                  alignItems={"center"}
                  justifyContent={"center"}
                  sx={{
                    width: "100%",
                    height: "100%",
                    transition: "all .5s",
                    overflow: "hidden",
                    borderRadius: "20px",
                    boxShadow: "0 0px 10px 5px rgba(0,0,0,.2)",
                    "&:hover": { boxShadow: "0 0px 15px 5px rgba(0,0,0,.3)" },
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      boxShadow: "0 0px 5px 5px rgba(0,0,0,.2)",
                      borderRadius: "20px",
                      transition: "all 0.5s ease",
                      "&:hover": {
                        scale: "1.1",
                        boxShadow: "0 0px 5px 20px rgba(0,0,0,.4)",
                      },
                    }}
                    bgcolor="white"
                    component={"img"}
                    alt="Banner"
                    src={Banner5}
                  />
                </Stack>
              </Grid>

              <Grid item xs={12} sm={6} sx={{ overflow: "hidden" }}>
                <Stack
                  component={motion.div}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  exit={{
                    x: window.innerWidth,
                    transition: {
                      duration: 5,
                      type: "spring",
                      ease: "easeOut",
                    },
                  }}
                  alignItems={"center"}
                  justifyContent={"center"}
                  sx={{
                    width: "100%",
                    height: "100%",
                    transition: "all .5s",
                    overflow: "hidden",
                    borderRadius: "20px",
                    boxShadow: "0 0px 10px 5px rgba(0,0,0,.2)",
                    "&:hover": { boxShadow: "0 0px 15px 5px rgba(0,0,0,.3)" },
                  }}
                >
                  <Stack
                    component={motion.div}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    exit={{
                      x: window.innerWidth,
                      transition: {
                        duration: 0.5,
                        type: "spring",
                        ease: "easeOut",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        height: "100%",
                        boxShadow: "0 0px 5px 5px rgba(0,0,0,.2)",
                        borderRadius: "20px",
                        transition: "all 0.5s ease",
                        "&:hover": {
                          scale: "1.1",
                          boxShadow: "0 0px 5px 20px rgba(0,0,0,.4)",
                        },
                      }}
                      bgcolor="white"
                      component={"img"}
                      alt="Banner"
                      src={Banner6}
                    />
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
            {/* Grid banners end */}
            {/* Berands carts start */}
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              width={"100%"}
              py={"3%"}
            >
              <Typography
                sx={{ color: "text.main" }}
                component={"h2"}
                py={"2%"}
              >
                Berands
              </Typography>
              <Stack
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={"20px"}
                width={"90%"}
                flexWrap={"wrap"}
              >
                <BerandSlide />
              </Stack>
            </Stack>
            {/* Berands carts end */}

            {/* MSI banner start */}
            <Stack
              component={motion.div}
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              exit={{
                x: window.innerWidth,
                transition: {
                  duration: 5,
                  type: "spring",
                  ease: "easeOut",
                },
              }}
              width={"100%"}
              height={"25vh"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Stack
                width={"90%"}
                height={"100%"}
                borderRadius={"20px"}
                overflow={"hidden"}
                sx={{ boxShadow: "0 0px 10px 5px rgba(0,0,0,.2)" }}
              >
                <Box
                  component={"img"}
                  src={MSIbanner}
                  alt="banner"
                  width={"100%"}
                  height={"100%"}
                  sx={{ objectFit: "cover" }}
                />
              </Stack>
            </Stack>
            {/* MSI banner end */}

            {/* Blog card start */}
            <Stack
              width={"100%"}
              my={"40px"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Stack
                width={"90%"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={"40px"}
                direction={"row"}
                flexWrap={"wrap"}
              >
                {blogItems}
              </Stack>
              {/* Blog card end */}
            </Stack>
          </Stack>
        ) : (
          // loading stack start
          <Stack
            sx={{
              position: "fixed",
              inset: "0",
              mt: "13vh",
              bgcolor: "Secondary.main",
              opacity: "1",
              overflow: "hidden",
              zIndex: "1",
            }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Hourglass />
          </Stack>
        )
        // loading stack end
      }
    </Stack>
  );
}

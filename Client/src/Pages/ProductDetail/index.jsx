import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Option1 from "../../../public/ic1.svg";
import Option2 from "../../../public/ic2.svg";
import Option3 from "../../../public/ic3.svg";
import Option4 from "../../../public/ic4.svg";
import ProductDitailSkeleton from "./ProductDitailSkeleton";
import { useParams } from "react-router-dom";
import fetchData from "../../Utils/FetchData";
import { useDispatch, useSelector } from "react-redux";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { addItem, removeItem } from "../../Store/Slices/Cart";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import SuggesSlider from "./DiscountSlider";
import ProductDitailSlider from "./ProductDitailSlider";
import { motion } from "framer-motion";

export default function ProductDitail() {
  const [product, setProduct] = useState();
  const { id } = useParams();
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.list)?.filter(
    (e) => e.id == id
  )[0]?.quantity;
  useEffect(() => {
    (async () => {
      const res = await fetchData(`products/${id}?populate=*`);
      setProduct(res.data);
    })();
  }, [id]);
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
      {/* Pruduct Ditail Cart Start */}
      {product ? (
        <Stack
          mt={"13vh"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
          sx={{ height: "90vh", bgcolor: "Secondary.main" }}
        >
          <Stack
            width={"100%"}
            height={"95%"}
            sx={{
              flexDirection: {
                xl: "row",
                lg: "row",
                md: "row",
                sm: "column",
                xs: "column",
              },
            }}
          >
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              sx={{
                width: {
                  xl: "40%",
                  lg: "40%",
                  md: "40%",
                  sm: "100%",
                  xs: "100%",
                },
                height: {
                  xl: "100%",
                  lg: "100%",
                  md: "100%",
                  sm: "50%",
                  xs: "50%",
                },
                bgcolor: "white",
              }}
            >
              <Box
                sx={{
                  width: {
                    xl: "90%",
                    lg: "90%",
                    md: "90%",
                    sm: "50%",
                    xs: "50%",
                  },
                  height: {
                    xl: "80%",
                    lg: "80%",
                    md: "80%",
                    sm: "95%",
                    xs: "95%",
                  },
                }}
              >
                <ProductDitailSlider />
              </Box>
            </Stack>
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              sx={{
                position: "relative",
                width: {
                  xl: "60%",
                  lg: "60%",
                  md: "60%",
                  sm: "100%",
                  xs: "100%",
                },
                height: {
                  xl: "100%",
                  lg: "100%",
                  md: "100%",
                  sm: "50%",
                  xs: "50%",
                },
                bgcolor: "Secondary.main",
              }}
            >
              <Box
                sx={{
                  width: {
                    xl: "95%",
                    lg: "95%",
                    md: "95%",
                    sm: "90%",
                    xs: "90%",
                  },
                  height: {
                    xl: "80%",
                    lg: "80%",
                    md: "80%",
                    sm: "95%",
                    xs: "95%",
                  },
                }}
              >
                <Stack
                  justifyContent={"start"}
                  alignItems={"start"}
                  p={"3%"}
                  gap={"20px"}
                  sx={{ width: "100%", height: "100%" }}
                >
                  <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                    {product.attributes?.name}
                  </Typography>
                  <Typography variant="body1">
                    {product.attributes?.description}
                  </Typography>
                </Stack>
              </Box>
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                  position: {
                    xl: "absolute",
                    lg: "absolute",
                    md: "absolute",
                    sm: "fixed",
                    xs: "fixed",
                  },
                  bottom: {
                    xl: "50px",
                    lg: "50px",
                    md: "50px",
                    sm: "0",
                    xs: "0",
                  },
                  right: "0",
                  left: "0",
                  width: "100%",
                  height: "100px",
                  bgcolor: "Secondary.main",
                  zIndex: "1",
                }}
              >
                <Stack
                  direction={"row-reverse"}
                  width={"80%"}
                  height={"100%"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  gap={"5px"}
                >
                  <Stack
                    width={"150px"}
                    height={"80%"}
                    justifyContent={"center"}
                    alignItems={"start"}
                    gap={"5px"}
                  >
                    <Stack
                      direction={"row"}
                      width={"100%"}
                      height={"80%"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      gap={"40px"}
                    >
                      {product?.attributes?.discount ? (
                        <Typography
                          sx={{
                            color: "text.main",
                            fontSize: "1.5em",
                            fontWeight: "bold",
                          }}
                        >
                          {product?.attributes?.price *
                            (1 - product?.attributes?.discount / 100)}
                          $
                        </Typography>
                      ) : (
                        <Typography
                          sx={{
                            color: "text.main",
                            fontSize: "1.5em",
                            fontWeight: "bold",
                          }}
                        >
                          {product.attributes?.price}$
                        </Typography>
                      )}

                      {product?.attributes?.discount ? (
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            bgcolor: "primary.main",
                            borderRadius: "20px",
                            width: "80px",
                            height: "30px",
                          }}
                        >
                          <Typography sx={{ color: "text.primarytext" }}>
                            {product?.attributes?.discount}%
                          </Typography>
                        </Box>
                      ) : (
                        <Box></Box>
                      )}
                    </Stack>

                    <Stack
                      direction={"row"}
                      width={"100%"}
                      height={"50px"}
                      pl={"5px"}
                      justifyContent={"start"}
                      alignItems={"center"}
                      gap={"20px"}
                    >
                      {product?.attributes?.discount ? (
                        <Typography
                          variant="body2"
                          component={"del"}
                          sx={{
                            color: "text.secend",
                            px: "10%",
                            pb: "10px",
                            textDecoration: "line-through !important",
                          }}
                        >
                          {product?.attributes?.price}$
                        </Typography>
                      ) : (
                        <Typography></Typography>
                      )}
                    </Stack>
                  </Stack>
                  <Stack
                    width={"150px"}
                    height={"50px"}
                    direction={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    borderRadius={"10px"}
                    sx={{ boxShadow: "0 10px 20px 5px rgba(0,0,0,.2)" }}
                  >
                    {quantity && (
                      <Stack
                        width={"40px"}
                        m={"10px"}
                        height={"40px"}
                        alignItems={"center"}
                        justifyContent={"center"}
                      >
                        <IconButton onClick={() => dispatch(removeItem(id))}>
                          {quantity == 1 ? (
                            <DeleteRoundedIcon sx={{ color: "red" }} />
                          ) : (
                            <RemoveIcon />
                          )}
                        </IconButton>
                      </Stack>
                    )}
                    {quantity && (
                      <Typography sx={{ fontSize: "1.5em" }}>
                        {quantity}
                      </Typography>
                    )}

                    {quantity ? (
                      <Stack
                        width={"50px"}
                        m={"10px"}
                        height={"40px"}
                        alignItems={"center"}
                        justifyContent={"center"}
                      >
                        <IconButton onClick={() => dispatch(addItem(product))}>
                          <AddIcon sx={{ color: "primary.main" }} />
                        </IconButton>
                      </Stack>
                    ) : (
                      <Button
                        onClick={() => dispatch(addItem(product))}
                        variant="contained"
                        sx={{
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "5px",
                          bgcolor: "primary.main",
                          borderRadius: "10px",
                        }}
                      >
                        shop
                        <ShoppingCartRoundedIcon />
                      </Button>
                    )}
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      ) : (
        <ProductDitailSkeleton />
      )}
      {/* Pruduct Ditail Cart end */}

      {/* options icons start */}
      <Stack
        width={"100%"}
        minHeight={"10vh"}
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"10px"}
        my={"20px"}
        flexWrap={"wrap"}
      >
        <Stack
          direction={"row"}
          width={"300px"}
          height={"95%"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"5px"}
          flexWrap={"wrap"}
        >
          <Box
            component={"img"}
            src={Option1}
            alt="option"
            sx={{ width: "50px", height: "50px" }}
          />
          <Typography sx={{ width: "200px" }}>Fast payment</Typography>
        </Stack>

        <Stack
          direction={"row"}
          width={"300px"}
          height={"95%"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"5px"}
          flexWrap={"wrap"}
        >
          <Box
            component={"img"}
            src={Option2}
            alt="option"
            sx={{ width: "50px", height: "50px" }}
          />{" "}
          <Typography sx={{ width: "200px" }}>7 days garanty</Typography>
        </Stack>

        <Stack
          direction={"row"}
          width={"300px"}
          height={"95%"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"5px"}
          flexWrap={"wrap"}
        >
          <Box
            component={"img"}
            src={Option3}
            alt="option"
            sx={{ width: "50px", height: "50px" }}
          />{" "}
          <Typography sx={{ width: "200px" }}>Express send</Typography>
        </Stack>

        <Stack
          direction={"row"}
          width={"300px"}
          height={"95%"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"5px"}
          flexWrap={"wrap"}
        >
          <Box
            component={"img"}
            src={Option4}
            alt="option"
            sx={{ width: "50px", height: "50px" }}
          />{" "}
          <Typography sx={{ width: "200px" }}>
            Confirmation of originality
          </Typography>
        </Stack>
      </Stack>
      {/* options icons end */}

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
            <Typography sx={{ color: "text.primarytext", fontSize: "1.5rem" }}>
              Best Discont
            </Typography>
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
            <SuggesSlider />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

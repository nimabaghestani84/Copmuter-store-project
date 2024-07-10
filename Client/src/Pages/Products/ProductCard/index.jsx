import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({
  image,
  price,
  title,
  discountPrice,
  discount,
  id,
}) {
  return (
    <Link to={`/product-ditail/${id}/${title.replaceAll(" ", "-")}`}>
      <Stack
        width={"250px"}
        height={"300px"}
        border={"2px"}
        bgcolor={"Secondary.main"}
        sx={{ border: 0.5, borderColor: "GrayText", overflow: "hidden" }}
      >
        <Stack
          width={"100%"}
          height={"160px"}
          bgcolor={"white"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ overflow: "hidden" }}
        >
          <Box
            component={"img"}
            width={"100%"}
            height={"100%"}
            src={image}
            alt={title}
            sx={{
              objectFit: "contain",
              "&:hover": { scale: "1.1" },
              transition: "all 0.5s",
            }}
          />
        </Stack>
        <Stack p={"5%"} justifyContent={"center"} gap={"10px"} width={"95%"}>
          <Typography sx={{ color: "text.main" }}>
            {title.slice(0, 20)}...
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "90%",
              height: "30px",
              pl: "5%",
            }}
          >
            {discount ? (
              <Typography sx={{ color: "text.main" }}>
                {discountPrice}$
              </Typography>
            ) : (
              <Typography sx={{ color: "text.main" }}>{price}$</Typography>
            )}
            {discount ? (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "primary.main",
                  borderRadius: "20px",
                  width: "50px",
                  height: "20px",
                }}
              >
                <Typography sx={{ color: "text.primarytext" }}>
                  {discount}%
                </Typography>
              </Box>
            ) : (
              <Box></Box>
            )}
          </Box>
          {discount ? (
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
              {price}$
            </Typography>
          ) : (
            <Typography></Typography>
          )}
        </Stack>
      </Stack>
    </Link>
  );
}

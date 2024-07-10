import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function SuggesCart({
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
        alignItems={"start"}
        justifyContent={"space-between"}
        gap={"0px"}
        sx={{
          bgcolor: "Secondary.main",
          color: "text.main",
          overflow: "hidden",
          borderRadius: "20px",
          width: "190px",
          height: "230px",
          position: "relative",
          boxShadow: "0 5px 10px 5px rgba(0,0,0,.1)",
        }}
      >
        <Box
          sx={{
            bgcolor: "white",
            width: "100%",
            height: "60%",
            display: "flex",
            alignItems: "start",
            justifyContent: "center",
          }}
        >
          <Box
            component={"img"}
            sx={{
              width: "98%",
              height: "100%",
              objectFit: "contain",
            }}
            src={image}
            alt={title}
          />
        </Box>
        <Typography
          sx={{
            color: "text.main",
            px: "5%",
          }}
        >
          {title.slice(0, 18)}...
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
    </Link>
  );
}

import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

export default function CategoryItem({ image, title, id }) {
  return (
    <Stack
    component={motion.div}
      initial={{ scale: 0 }}
      whileInView={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}>
    <Link to={`/products/${id}/${title.replaceAll(" ", "-")}}`}>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        gap={"10px"}
        width={"100px"}
        height={"130px"}
      >
        <Stack
          sx={{
            "&:hover": { boxShadow: "0 0px 15px 5px rgba(25,118,210,.3)" },
            transition: "all .5s",
          }}
          bgcolor={"primary.main"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
          height={"90%"}
          borderRadius={"20px"}
          >
          <Box
            component={"img"}
            src={image}
            alt={title}
            sx={{ width: "90%", height: "90%", objectFit: "contain" }}
            />
        </Stack>
        <Typography sx={{ color: "text.main" }}>{title}</Typography>
      </Stack>
    </Link>
</Stack>
  );
}

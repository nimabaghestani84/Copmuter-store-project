import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function BlogsCard({ image, title, id, create }) {
  return (
    <Stack
      width={"90%"}
      height={"200px"}
      direction={"row"}
      alignItems={"center"}
      justifyContent={"start"}
      overflow={"hidden"}
      bgcolor={"Secondary.main"}
      gap={"20px"}
      borderBottom={1}
      borderColor={"text.main"}
    >
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        sx={{
          width: {
            xl: "300px",
            lg: "300px",
            md: "300px",
            sm: "0",
            xs: "0",
          },
          height: "100%",
          bgcolor: "white",
        }}
      >
        <Box
          component={"img"}
          src={image}
          alt={title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Stack>
      <Link to={`/blog-ditail/${id}/${title.replaceAll(" ", "-")}`}>
        <Stack
          alignItems={"start"}
          justifyContent={"start"}
          height={"60%"}
          width={"500px"}
        >
          <Typography variant="body1" sx={{ color: "text.main" }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "primary.main" }}>
            {create}
          </Typography>
        </Stack>
      </Link>
    </Stack>
  );
}

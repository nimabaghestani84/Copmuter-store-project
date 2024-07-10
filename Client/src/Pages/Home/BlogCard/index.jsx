import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard({ id, title, image, create }) {
  return (
    <Link to={`/blog-ditail/${id}/${title.replaceAll(" ", "-")}`}>
      <Stack
        width={"250px"}
        height={"350px"}
        borderRadius={"20px"}
        overflow={"hidden"}
        border={1}
        borderColor={"text.main"}
        alignItems={"center"}
        justifyContent={"space-between"}
        bgcolor={"Secondary.main"}
        sx={{ borderColor: "text.secend" }}
      >
        <Stack
          width={"95%"}
          height={"50%"}
          borderRadius={"10px"}
          overflow={"hidden"}
          justifyContent={"center"}
          alignItems={"center"}
          mt={"3%"}
        >
          <Box
            sx={{ objectFit: "cover" }}
            component={"img"}
            src={image}
            alt={title}
            width={"100%"}
            height={"100%"}
          />
        </Stack>
        <Stack
          width={"95%"}
          height={"40%"}
          justifyContent={"start"}
          alignItems={"start"}
          gap={"10px"}
        >
          <Typography
            sx={{ color: "primary.main", fontSize: "10px" }}
            variant="body2"
          >
            Update At:{create}
          </Typography>
          <Typography sx={{ color: "text.main" }} variant="body1">
            {title}.
          </Typography>
        </Stack>
      </Stack>
    </Link>
  );
}

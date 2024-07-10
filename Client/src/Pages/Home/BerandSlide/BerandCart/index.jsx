import { Box, Stack } from "@mui/material";
import React from "react";

export default function BerandCart({ image, title }) {
  return (
    <Stack
      width={"100px"}
      height={"100px"}
      borderRadius={"20px"}
      bgcolor={"Secondary.main"}
    >
      <Box
        component={"img"}
        src={image}
        alt={title}
        sx={{
          width: "95%",
          height: "95%",
          objectFit: "contain",
        }}
      />
    </Stack>
  );
}

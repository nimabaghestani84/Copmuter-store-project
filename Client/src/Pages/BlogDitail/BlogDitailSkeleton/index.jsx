import { Skeleton, Stack } from "@mui/material";
import React from "react";

export default function BlogDitailSkeleton() {
  return (
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
          {/* ttile */}
          <Skeleton variant="text" width={"80%"} sx={{ fontSize: "2em" }} />
          {/* update at */}
          <Skeleton variant="text" width={"30%"} sx={{ fontSize: "0.5em" }} />
        </Stack>
        {/* image */}
        <Skeleton variant="rectangular" width={"75%"} height={"60vh"} />
        <Stack
          width={"95%"}
          justifyContent={"start"}
          alignItems={"center"}
          gap={"10px"}
        >
          {/* text one */}
          <Skeleton variant="text" width={"90%"} />
          <Skeleton variant="text" width={"90%"} />
          <Skeleton variant="text" width={"90%"} />
          <Skeleton variant="text" width={"90%"} />
          <Skeleton variant="text" width={"40%"} />
        </Stack>

          {/* text two */}
        <Stack
          width={"95%"}
          justifyContent={"start"}
          alignItems={"center"}
          gap={"10px"}
        >
          <Skeleton variant="text" width={"90%"} />
          <Skeleton variant="text" width={"90%"} />
          <Skeleton variant="text" width={"90%"} />
          <Skeleton variant="text" width={"90%"} />
          <Skeleton variant="text" width={"40%"} />
        </Stack>
      </Stack>
    </Stack>
  );
}

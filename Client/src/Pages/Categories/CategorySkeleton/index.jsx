import { Skeleton, Stack } from "@mui/material";
import React from "react";

export default function CategorySkeleton() {
  return (
    <Stack
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      direction={"row"}
    >
      <Stack
        width={"90%"}
        paddingTop={"20vh"}
        minHeight={"100px"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignItems={"center"}
        direction={"row"}
        gap={"20px"}
      >
        <Skeleton
          variant="rounded"
          width={200}
          height={200}
          sx={{ borderRadius: "20px" }}
        />
        <Skeleton
          variant="rounded"
          width={200}
          height={200}
          sx={{ borderRadius: "20px" }}
        />
        <Skeleton
          variant="rounded"
          width={200}
          height={200}
          sx={{ borderRadius: "20px" }}
        />
        <Skeleton
          variant="rounded"
          width={200}
          height={200}
          sx={{ borderRadius: "20px" }}
        />
        <Skeleton
          variant="rounded"
          width={200}
          height={200}
          sx={{ borderRadius: "20px" }}
        />
        <Skeleton
          variant="rounded"
          width={200}
          height={200}
          sx={{ borderRadius: "20px" }}
        />
        <Skeleton
          variant="rounded"
          width={200}
          height={200}
          sx={{ borderRadius: "20px" }}
        />
        <Skeleton
          variant="rounded"
          width={200}
          height={200}
          sx={{ borderRadius: "20px" }}
        />
      </Stack>
    </Stack>
  );
}

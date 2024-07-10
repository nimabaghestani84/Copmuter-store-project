import { Skeleton, Stack } from "@mui/material";
import React from "react";

export default function BlogSkeleton() {
  return (
    <>
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
          <Skeleton variant="rectangular" width={"100%"} height={"100%"} />
        </Stack>

        <Stack
          alignItems={"start"}
          justifyContent={"start"}
          height={"60%"}
          width={"500px"}
        >
          <Skeleton variant="text" width={"90%"} sx={{ fontSize: "1.5em" }} />
          <Skeleton variant="text" width={"20%"} sx={{ fontSize: "1.5em" }} />
          <Skeleton variant="text" width={"40%"} />
        </Stack>
      </Stack>

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
          <Skeleton variant="rectangular" width={"100%"} height={"100%"} />
        </Stack>

        <Stack
          alignItems={"start"}
          justifyContent={"start"}
          height={"60%"}
          width={"500px"}
        >
          <Skeleton variant="text" width={"90%"} sx={{ fontSize: "1.5em" }} />
          <Skeleton variant="text" width={"20%"} sx={{ fontSize: "1.5em" }} />
          <Skeleton variant="text" width={"40%"} />
        </Stack>
      </Stack>

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
          <Skeleton variant="rectangular" width={"100%"} height={"100%"} />
        </Stack>

        <Stack
          alignItems={"start"}
          justifyContent={"start"}
          height={"60%"}
          width={"500px"}
        >
          <Skeleton variant="text" width={"90%"} sx={{ fontSize: "1.5em" }} />
          <Skeleton variant="text" width={"20%"} sx={{ fontSize: "1.5em" }} />
          <Skeleton variant="text" width={"40%"} />
        </Stack>
      </Stack>
    </>
  );
}

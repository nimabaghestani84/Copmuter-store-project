import { Box, Skeleton, Stack, Typography } from "@mui/material";
import React from "react";

export default function ProductDitailSkeleton() {
  return (
    <>
      <Stack
        mt={"13vh"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"100%"}
        sx={{ height: "90vh", bgcolor: "Secondary.main" }}
      >
        <Stack
          width={"95%"}
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
              <Skeleton width={"100%"} height={"100%"} variant="rectangular" />
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
                bgcolor: "Secondary.main",
              }}
            >
              <Stack
                justifyContent={"start"}
                alignItems={"start"}
                p={"3%"}
                gap={"20px"}
                sx={{ width: "100%", height: "100%" }}
              >
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1.5rem", width: "80%" }}
                />
                <Skeleton variant="text" sx={{ width: "100%" }} />
                <Skeleton variant="text" sx={{ width: "100%" }} />
                <Skeleton variant="text" sx={{ width: "100%" }} />
                <Skeleton variant="text" sx={{ width: "60%" }} />
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
                height={"90%"}
                justifyContent={"space-between"}
                alignItems={"center"}
                gap={"5px"}
              >
                <Stack
                  width={"100px"}
                  height={"80%"}
                  justifyContent={"center"}
                  alignItems={"start"}
                  gap={"5px"}
                >
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "1rem", width: "60%" }}
                  />
                </Stack>
                <Stack
                  width={"150px"}
                  height={"40px"}
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Skeleton width={"100%"} height={"100%"} variant="rounded" />
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

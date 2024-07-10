import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import notfaundimg from "../../../public/notFaund.png";
import KeyboardReturnRoundedIcon from "@mui/icons-material/KeyboardReturnRounded";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <Stack
    component={motion.div}
        initial={{ width: 0 ,height:0}}
        animate={{ width: "100%",height:'100%' }}
        exit={{
          x: window.innerWidth,
          transition: {
            duration: 5,
            type: "spring",
            ease: "easeOut"
          },
        }}>
      <Stack
        sx={{
          height: {
            sm: "90vh",
            md: "85vh",
            xs: "90vh",
          },
          my: "13vh",
        }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stack
          justifyContent={"space-evenly"}
          alignItems={"center"}
          direction={"column"}
          width={"95%"}
          sx={{
            height: {
              sm: "85vh",
              md: "80vh",
              xs: "85vh",
            },
          }}
          bgcolor={"Secondary.main"}
          borderRadius={"20px"}
          position={"relative"}
          overflow={"hidden"}
        >
          <Typography
            sx={{ color: "text.main", fontWeight: "bold" }}
            variant={"h2"}
          >
            Oops!
          </Typography>
          <Typography sx={{ color: "text.main" }} variant={"body"}>
            You are lost
          </Typography>
          <Box
            component={"img"}
            src={notfaundimg}
            alt="404 image"
            width={"30%"}
            height={"60%"}
            sx={{ objectFit: "contain" }}
          />
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Link sx={{ color: "text.main" }} to={"/"}>
              Back to home{" "}
            </Link>
            <KeyboardReturnRoundedIcon />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

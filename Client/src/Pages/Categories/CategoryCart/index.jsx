import React from "react";
import "atropos/css";
import { Box, Stack, Typography } from "@mui/material";
import Atropos from "atropos";
import "./atropos.min.css";
import "./atropos.min.js";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CategoryCart({ image, title, id }) {
  const myAtropos = Atropos({
    el: `.my-atropos${id}`,
    rotateLock: true,
    shadow: true,
    shadowOffset: 50,
    durationEnter: 1000,
  });

  
  return (
    <Stack
    component={motion.div}
    initial={{ scale: 0 }}
    animate={{ rotate: 360, scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20
    }}
    >
      <Stack sx={{ width: "200px" }} className="atroposes">
        <Stack
          className={`atropos des-atropos my-atropos${id}`}
          sx={{ width: "200px", height: "200px", borderRadius: "20px" }}
        >
          <Stack
            className="atropos-scale"
            sx={{ width: "200px", height: "200px", borderRadius: "20px" }}
          >
            <Stack
              className="atropos-rotate"
              sx={{ width: "200px", height: "200px", borderRadius: "20px" }}
            >
              <Stack className="atropos-inner">
                <Stack
                  sx={{ width: "200px", height: "200px", position: "relative" }}
                  alignItems={"center"}
                  justifyContent={"center"}
                  bgcolor={"primary.main"}
                  borderRadius={"20px"}
                >
                  <Stack
                    width={"90%"}
                    height={"90%"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    atropos-offset="-5"
                  >
                    <Box
                      component={"img"}
                      src={image}
                      alt={title}
                      sx={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </Stack>
                  <Link to={`/products/${id}/${title.replaceAll(" ", "-")}}`}>
                    <Box
                      sx={{
                        width: "60%",
                        height: "50px",
                        bgcolor: "Secondary.main",
                        borderRadius: "40px",
                        position: "absolute",
                        bottom: "5%",
                        left: "20%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      //   className="text-over"
                      data-atropos-offset="5"
                    >
                      <Typography
                        data-atropos-offset="5"
                        variant="h6"
                        color={"text.main"}
                      >
                        {title}
                      </Typography>
                    </Box>
                  </Link>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

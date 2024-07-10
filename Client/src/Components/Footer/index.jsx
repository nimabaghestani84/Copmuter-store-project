import React, { useState } from "react";
import { Box, Link, Stack, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import logo from "../../../public/Logo.png";
import AccordionCom from "./AccordionCom";

export default function Footer() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Stack
        sx={{
          height: {
            sm: "90vh",
            md: "85vh",
            xs: "90vh",
          },
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
          bgcolor={"primary.main"}
          borderRadius={"20px"}
          position={"relative"}
          overflow={"hidden"}
        >
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            height={"80px"}
            borderBottom={1}
            position={"absolute"}
            top={"0"}
            left={"5%"}
            right={"5%"}
            overflow={"hidden"}
          >
            <Stack>
              <Box
                component={"img"}
                width={"80px"}
                height={"80%"}
                src={logo}
                alt="logo"
              />
            </Stack>
            <Link
              href="#"
              sx={{
                width: "130px",
                height: "40px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: "10px",
                backgroundColor: "Secondary.main",
                boxShadow: "initial",
              }}
              underline="none"
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <Typography color={"text.main"}>Back to up</Typography>
                <ArrowUpwardIcon sx={{ color: "text.secend" }} />
              </Box>
            </Link>
          </Stack>

          <Stack
            justifyContent={"center"}
            alignItems={"start"}
            gap={"30px"}
            width={"95%"}
            position={"absolute"}
            top={"100px"}
            left={"5%"}
            right={"5%"}
          >
            <Box
              sx={{
                width:{xl:'350px',lg:'350px',md:'350px',sm:'90%',xs:'90%'},
                height: "50px",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                borderRadius: "10px",
                backgroundColor: "Secondary.main",
              }}
            >
              <Typography>Follow us:</Typography>
              <GitHubIcon sx={{ fontSize: "2rem", color: "text.main" }} />
              <LinkedInIcon sx={{ fontSize: "2rem", color: "text.main" }} />
              <TelegramIcon sx={{ fontSize: "2rem", color: "text.main" }} />
              <InstagramIcon sx={{ fontSize: "2rem", color: "text.main" }} />
            </Box>

            <Stack
              direction={"row"}
              px={"40px"}
              width={"80%"}
              justifyContent={"space-between"}
              gap={"20px"}
              alignContent={"space-between"}
              sx={{
                display: {
                  sm: "none",
                  md: "flex",
                  xs: "none",
                },
              }}
            >
              <Stack
                direction={"column"}
                justifyContent={"start"}
                gap={"5px"}
                alignItems={"start"}
              >
                <Typography variant="h4" sx={{ color: "text.primarytext" }}>
                  Contact us:
                </Typography>
                <Typography
                  variant="body1"
                  px={"5px"}
                  sx={{ color: "text.primarytext", opacity: "0.8" }}
                >
                  Phone: 09156532989
                </Typography>
                <Typography
                  variant="body1"
                  px={"5px"}
                  sx={{ color: "text.primarytext", opacity: "0.8" }}
                >
                  Email: nimabaghestani84
                </Typography>
                <Typography
                  variant="body1"
                  px={"5px"}
                  sx={{ color: "text.primarytext", opacity: "0.8" }}
                >
                  Telegram: @Nima_Bagh
                </Typography>
                <Typography
                  variant="body1"
                  px={"5px"}
                  sx={{ color: "text.primarytext", opacity: "0.8" }}
                >
                  Instagram: ___nima.b___
                </Typography>
              </Stack>

              <Stack
                direction={"column"}
                justifyContent={"start"}
                gap={"5px"}
                alignItems={"start"}
              >
                <Typography variant="h4" sx={{ color: "text.primarytext" }}>
                  Excellence:
                </Typography>
                <Typography
                  variant="body1"
                  px={"5px"}
                  sx={{ color: "text.primarytext", opacity: "0.8" }}
                >
                  {" "}
                  UI/UX
                </Typography>
                <Typography
                  variant="body1"
                  px={"5px"}
                  sx={{ color: "text.primarytext", opacity: "0.8" }}
                >
                  {" "}
                  HTML 5
                </Typography>
                <Typography
                  variant="body1"
                  px={"5px"}
                  sx={{ color: "text.primarytext", opacity: "0.8" }}
                >
                  {" "}
                  CSS 3
                </Typography>
                <Typography
                  variant="body1"
                  px={"5px"}
                  sx={{ color: "text.primarytext", opacity: "0.8" }}
                >
                  {" "}
                  Java Script
                </Typography>
                <Typography
                  variant="body1"
                  px={"5px"}
                  sx={{ color: "text.primarytext", opacity: "0.8" }}
                >
                  {" "}
                  React
                </Typography>
              </Stack>

              <Stack
                direction={"column"}
                justifyContent={"start"}
                gap={"5px"}
                alignItems={"start"}
              >
                <Typography variant="h4" sx={{ color: "text.primarytext" }}>
                  About us:
                </Typography>
                <Typography
                  variant="body1"
                  px={"5px"}
                  sx={{ color: "text.primarytext", opacity: "0.8" }}
                >
                  Companyny
                </Typography>
                <Typography
                  variant="body1"
                  px={"5px"}
                  sx={{ color: "text.primarytext", opacity: "0.8" }}
                >
                  Fund of Company
                </Typography>
                <Typography
                  variant="body1"
                  px={"5px"}
                  sx={{ color: "text.primarytext", opacity: "0.8" }}
                >
                  CEO manager
                </Typography>
                <Typography
                  variant="body1"
                  px={"5px"}
                  sx={{ color: "text.primarytext", opacity: "0.8" }}
                >
                  Location
                </Typography>
                <Typography
                  variant="body1"
                  px={"5px"}
                  sx={{ color: "text.primarytext", opacity: "0.8" }}
                >
                  Why us?
                </Typography>
                <Typography
                  variant="body1"
                  px={"5px"}
                  sx={{ color: "text.primarytext", opacity: "0.8" }}
                >
                  Help
                </Typography>
              </Stack>

              <Stack
                direction={"column"}
                justifyContent={"start"}
                gap={"5px"}
                alignItems={"start"}
              >
                <Typography variant="h4" sx={{ color: "text.primarytext" }}>
                  Services:
                </Typography>
                <Typography
                  variant="body1"
                  px={"5px"}
                  sx={{ color: "text.primarytext", opacity: "0.8" }}
                >
                  Then buy
                </Typography>
                <Typography
                  variant="body1"
                  px={"5px"}
                  sx={{ color: "text.primarytext", opacity: "0.8" }}
                >
                  Questions
                </Typography>
                <Typography
                  variant="body1"
                  px={"5px"}
                  sx={{ color: "text.primarytext", opacity: "0.8" }}
                >
                  Privacy
                </Typography>
                <Typography
                  variant="body1"
                  px={"5px"}
                  sx={{ color: "text.primarytext", opacity: "0.8" }}
                >
                  Rules
                </Typography>
              </Stack>
            </Stack>

            <Stack
              alignItems={"center"}
              sx={{
                display: {
                  sm: "flex",
                  md: "none",
                  xs: "flex",
                },
                width: "90%",
                height: "500px",
              }}
            >
              <AccordionCom />
            </Stack>
          </Stack>

          <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{
              width: "100%px",
              height: "100px",
              position: "absolute",
              bottom: "0",
              left: "0",
              right: "0",
            }}
          >
            <Typography
              sx={{ color: "white" }}
              variant="body2"
              color="text.secend"
              align="center"
            >
              Copyright © Nima shop
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

// <Stack
// alignItems={"center"}
// sx={{
//   display: {
//     sm: "flex",
//     md: "none",
//     xs: "flex",
//   },
//   width: "90%",
//   height: "500px",
// }}
// >
// <Accordion
//   expanded={expanded === "panel1"}
//   onChange={handleChange("panel1")}
//   sx={{ width: "100%" }}
// >
//   <AccordionSummary
//     aria-controls="panel1bh-content"
//     id="panel1bh-header"
//     expandIcon={
//       <ExpandMoreIcon sx={{ color: "text.primarytext" }} />
//     }
//     sx={{
//       bgcolor: "primary.main",
//       color: "text.primarytext",
//       width: "100%",
//     }}
//   >
//     Contact us:
//   </AccordionSummary>
//   <AccordionDetails
// sx={{
//   display: "flex",
//   justifyContent: "start",
//   gap: "5px",
//   alignItems: "start",
//   flexDirection: "column",
//   width: "100%",
// }}
//   >
// <Typography variant="body1" px={"5px"}>
//   Phone: 09156532989
// </Typography>
// <Typography variant="body1" px={"5px"}>
//   Email: nimabaghestani84
// </Typography>
// <Typography variant="body1" px={"5px"}>
//   Telegram: @Nima_Bagh
// </Typography>
// <Typography variant="body1" px={"5px"}>
//   Instagram: ___nima.b___
// </Typography>
//   </AccordionDetails>
// </Accordion>

// <Accordion
//   expanded={expanded === "panel2"}
//   onChange={handleChange("panel2")}
//   sx={{ width: "100%" }}
// >
//   <AccordionSummary
//     expandIcon={
//       <ExpandMoreIcon sx={{ color: "text.primarytext" }} />
//     }
//     aria-controls="panel2bh-content"
// id="panel2bh-header"
//     sx={{
//       bgcolor: "primary.main",
//       color: "text.primarytext",
//       width: "100%",
//     }}
//   >
//     Excellence:
//   </AccordionSummary>
//   <AccordionDetails
//     sx={{
//       display: "flex",
//       justifyContent: "start",
//       gap: "5px",
//       alignItems: "start",
//       flexDirection: "column",
//       width: "100%",
//     }}
//   >
//     <Typography variant="body1" px={"5px"}>
//       {" "}
//       UI/UX
//     </Typography>
//     <Typography variant="body1" px={"5px"}>
//       {" "}
//       HTML 5
//     </Typography>
//     <Typography variant="body1" px={"5px"}>
//       {" "}
//       CSS 3
//     </Typography>
//     <Typography variant="body1" px={"5px"}>
//       {" "}
//       Java Script
//     </Typography>
//     <Typography variant="body1" px={"5px"}>
//       {" "}
//       React
//     </Typography>
//   </AccordionDetails>
// </Accordion>

// <Accordion
//   expanded={expanded === "panel3"}
//   onChange={handleChange("panel3")}
//   sx={{ width: "100%" }}
// >
//   <AccordionSummary
//     expandIcon={
//       <ExpandMoreIcon sx={{ color: "text.primarytext" }} />
//     }
//     aria-controls="panel1-content"
//     id="panel1-header"
// sx={{
//   bgcolor: "primary.main",
//   color: "text.primarytext",
//   width: "100%",
//     }}
//   >
//     About us:
//   </AccordionSummary>
//   <AccordionDetails
//     sx={{
//       display: "flex",
//       justifyContent: "start",
//       gap: "5px",
//       alignItems: "start",
//       flexDirection: "column",
//       width: "100%",
//     }}
//   >
//     <Typography variant="body1" px={"5px"}>
//       Companyny
//     </Typography>
//     <Typography variant="body1" px={"5px"}>
//       Fund of Company
//     </Typography>
//     <Typography variant="body1" px={"5px"}>
//       CEO manager
//     </Typography>
//     <Typography variant="body1" px={"5px"}>
//       Location
//     </Typography>
//     <Typography variant="body1" px={"5px"}>
//       Why us?
//     </Typography>
//     <Typography variant="body1" px={"5px"}>
//       Help
//     </Typography>
//   </AccordionDetails>
// </Accordion>

// <Accordion
//   expanded={expanded === "panel4"}
//   onChange={handleChange("panel4")}
//   sx={{ width: "100%" }}
// >
//   <AccordionSummary
//     expandIcon={
//       <ExpandMoreIcon sx={{ color: "text.primarytext" }} />
//     }
//     aria-controls="panel1-content"
//     id="panel1-header"
//     sx={{
//       bgcolor: "primary.main",
//       color: "text.primarytext",
//       width: "100%",
//     }}
//   >
//     Services:
//   </AccordionSummary>
//   <AccordionDetails
//     sx={{
//       display: "flex",
//       justifyContent: "start",
//       gap: "5px",
//       alignItems: "start",
//       flexDirection: "column",
//       width: "100%",
//     }}
//   >
//     <Typography variant="body1" px={"5px"}>
//       Then buy
//     </Typography>
//     <Typography variant="body1" px={"5px"}>
//       Questions
//     </Typography>
//     <Typography variant="body1" px={"5px"}>
//       Privacy
//     </Typography>
//     <Typography variant="body1" px={"5px"}>
//       Rules
//     </Typography>
//   </AccordionDetails>
// </Accordion>
// </Stack>

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Stack } from "@mui/material";

export default function AccordionCom() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Stack 
    alignItems={"center"}
sx={{
  display: {
    sm: "flex",
    md: "none",
    xs: "flex",
  },
  width: "100%",
  height: "500px",
}}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{ width: "100%" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "text.primarytext" }} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{
                 bgcolor: "primary.main",
                 color: "text.primarytext",
                 width: "100%",
                }}
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Contact us:
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            display: "flex",
            justifyContent: "start",
            gap: "5px",
            alignItems: "start",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <Typography variant="body1" px={"5px"}>
            Phone: 09156532989
          </Typography>
          <Typography variant="body1" px={"5px"}>
            Email: nimabaghestani84
          </Typography>
          <Typography variant="body1" px={"5px"}>
            Telegram: @Nima_Bagh
          </Typography>
          <Typography variant="body1" px={"5px"}>
            Instagram: ___nima.b___
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={{ width: "100%" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "text.primarytext" }}/>}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          sx={{
                bgcolor: "primary.main",
                color: "text.primarytext",
                width: "100%",
              }}
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Excellence:</Typography>
        </AccordionSummary>
        <AccordionDetails 
         sx={{
               display: "flex",
               justifyContent: "start",
               gap: "5px",
               alignItems: "start",
               flexDirection: "column",
               width: "100%",
             }}>
          <Typography variant="body1" px={"5px"}>

      UI/UX
    </Typography>
    <Typography variant="body1" px={"5px"}>
      HTML 5
    </Typography>
    <Typography variant="body1" px={"5px"}>
      CSS 3
    </Typography>
    <Typography variant="body1" px={"5px"}>
      Java Script
    </Typography>
    <Typography variant="body1" px={"5px"}>
      React
    </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        sx={{ width: "100%" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  sx={{ color: "text.primarytext" }}/>}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          sx={{
            bgcolor: "primary.main",
            color: "text.primarytext",
            width: "100%"}}
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
          About us:
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography variant="body1" px={"5px"}>
     Companyny
   </Typography>
   <Typography variant="body1" px={"5px"}>
     Fund of Company
   </Typography>
   <Typography variant="body1" px={"5px"}>
     CEO manager
   </Typography>
   <Typography variant="body1" px={"5px"}>
     Location
   </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        sx={{ width: "100%" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "text.primarytext" }}  />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          sx={{
                  bgcolor: "primary.main",
                  color: "text.primarytext",
                  width: "100%",
                }}
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
          Services:
          </Typography>
        </AccordionSummary>
        <AccordionDetails
         sx={{
               display: "flex",
               justifyContent: "start",
               gap: "5px",
               alignItems: "start",
               flexDirection: "column",
               width: "100%",
             }}>
           <Typography variant="body1" px={"5px"}>
      Then buy
    </Typography>
    <Typography variant="body1" px={"5px"}>
      Questions
    </Typography>
    <Typography variant="body1" px={"5px"}>
      Privacy
    </Typography>
    <Typography variant="body1" px={"5px"}>
      Rules
    </Typography>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
}

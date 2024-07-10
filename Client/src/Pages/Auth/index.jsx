import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { Stack } from "@mui/material";
import { motion } from "framer-motion";

export default function Auth() {
  const [pageType, setPageType] = useState("signIn");
  const handlePageType = () => {
    setPageType(pageType === "signIn" ? "signUp" : "signIn");
  };
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
      {
        //handel chenge page
        pageType === "signIn" ? (
          <SignIn handlePageType={handlePageType} />
        ) : (
          <SignUp handlePageType={handlePageType} />
        )
      }
    </Stack>
  );
}

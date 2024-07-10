import React from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import SignUpPhoto from "../../../../public/back auth 1.jpg";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import axios from "axios";
import useFormFields from "../../../Utils/useFormFields";

export default function SginUp({ handlePageType }) {
  const [fields, handleChange] = useFormFields();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:1337/api/auth/local/register", fields)
      .then((res) => {
        if (res.data.jwt) {
          alert("register successfully");
          handlePageType();
        }
      })
      .catch((err) => {
        alert(err.response.data.error.message);
        console.log(err);
      });
  };
  return (
    <Stack width={"100%"} height={"90vh"} direction={"row"}>
      {/* image */}
      <Box
        sx={{
          width: { xl: "60%", lg: "60%", md: "60%", sm: "0", xs: "0" },
          height: "100%",
          objectFit: "cover",
        }}
        component={"img"}
        src={SignUpPhoto}
        alt="SignUpPhoto Back ground"
      />

      <Stack
        sx={{
          width: { xl: "40%", lg: "40%", md: "40%", sm: "100%", xs: "100%" },
          height: "100%",
          bgcolor: "Secondary.main",
        }}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"10px"}
      >
        <PersonIcon sx={{ color: "text.main", fontSize: "3rem" }} />
        <Typography variant="h4">Sign Up</Typography>
        {/* textboxs start */}
        <Box
          width={"70%"}
          sx={{
            height: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          component={"form"}
        >
          {/* Email input */}
          <TextField
            onChange={handleChange}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Enter Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          {/* userName input */}
          <TextField
            onChange={handleChange}
            margin="normal"
            required
            fullWidth
            id="username"
            label="Enter your UserName"
            name="username"
          />
          {/* password input */}
          <TextField
            onChange={handleChange}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {/* Submit button */}
          <Button
            variant="contained"
            fullWidth
            sx={{
              bgcolor: "primary.main",
              color: "text.primarytext",
            }}
            onClick={handleSubmit}
            type="submit"
          >
            Submit
          </Button>
          {/* chenge page link */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "start",
              justifyContent: "start",
              py: "10px",
            }}
          >
            <Button onClick={handlePageType}>
              <Typography>Already have an account?</Typography>
            </Button>
          </Box>
        </Box>
        {/* textboxs end */}
      </Stack>
    </Stack>
  );
}

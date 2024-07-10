import React from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import SignInPhoto from "../../../../public/back auth 2.jpg";
import PersonIcon from "@mui/icons-material/Person";
import useFormFields from "../../../Utils/useFormFields";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../../../Store/Slices/Auth";

export default function SignIn({ handlePageType }) {
  const [fields, handleChange] = useFormFields();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:1337/api/auth/local", fields)
      .then((res) => {
        if (res.data.jwt) {
          alert("login successfully");
          dispatch(login({ user: res.data.user, token: res.data.jwt }));
        }
      })
      .catch((err) => {
        alert(err.response.data.error.message);
      });
  };
  return (
    <Stack width={"100%"} height={"90vh"} direction={"row"}>
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
        <Typography variant="h4">Sign In</Typography>
        {/* text boxs start */}
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
          onSubmit={handleSubmit}
        >
          {/* Email input */}
          <TextField
            margin="normal"
            required
            onChange={handleChange}
            fullWidth
            id="identifier"
            label="Email Address or Username"
            name="identifier"
            autoComplete="email"
            autoFocus
          />
          {/* password input */}
          <TextField
            margin="normal"
            required
            fullWidth
            onChange={handleChange}
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
              <Typography>You don`t have an account?</Typography>
            </Button>
          </Box>
        </Box>
        {/* text boxs end */}
      </Stack>
      {/* image */}
      <Box
        sx={{
          width: { xl: "60%", lg: "60%", md: "60%", sm: "0", xs: "0" },
          height: "100%",
          objectFit: "cover",
        }}
        component={"img"}
        src={SignInPhoto}
        alt="SignUpPhoto Back ground"
      />
    </Stack>
  );
}

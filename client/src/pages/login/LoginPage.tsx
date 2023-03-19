import React from "react";
import { Box, Typography, Button } from "@mui/material";
const LoginPage = () => {
  return (
    <div
      style={{
        marginTop: "100px",
      }}
    >
      <Box
        sx={{
          width: {
            md: "500px",
            sm: 0.75,
            xs: 0.9,
          },
          mx: "auto",
          border: "1px solid red",
          p: "15px",
        }}
      >
        <Box>
          <Typography mb="5px"> email </Typography>
          <input
            style={{
              border: "1px solid divider",
              width: "100%",
              fontSize: "21px",
              padding: "9px",
              borderRadius: "25px",
              outline: 0,
            }}
          />
        </Box>
        <Box
          sx={{
            mt: "10px",
          }}
        >
          <Typography mb="5px"> Password </Typography>
          <input
            style={{
              border: "1px solid divider",
              width: "100%",
              fontSize: "21px",
              padding: "9px",
              borderRadius: "25px",
              outline: 0,
            }}
            placeholder="Password"
          />
        </Box>
        <Box
          sx={{
            mt: "10px",
          }}
        >
          <Button>Submit</Button>
        </Box>
      </Box>
    </div>
  );
};

export default LoginPage;

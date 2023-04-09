import { Stack, Typography, Avatar, Button } from "@mui/material";
import React, { useState, ReactElement, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import CartDrawer from "../Drawers/CartDrawer";
import FavouritesDrawer from "../Drawers/FavouritesDrawer";

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    document.onscroll = () => {
      const scrollChecked = window.scrollY > 25;
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      scrollChecked !== scroll ? setScroll(scrollChecked) : undefined;
    };
  }, [scroll]);
  return (
    <>
      {!["/login", "/signup"].includes(pathname) ? (
        <Stack
          sx={{
            backgroundColor: scroll ? "#151616" : "transparent",
            position: scroll ? "fixed" : "absolute",
            top: scroll ? 0 : "25px",
            width: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            py: "20px",
            px: "100px",
            transition: "all 0.3s",
            zIndex: 2,
          }}
        >
          <Typography
            sx={{ color: scroll ? "#fff" : "#000", cursor: "pointer" }}
            variant="h4"
            onClick={() => navigate("/")}
          >
            Store 23
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            sx={{
              gap: "10px",
            }}
          >
            <Button
              sx={{
                textTransform: "capitalize",
                color: scroll ? "#fff" : "#000",
                backgroundColor: "transparent !important",
                fontWeight: "bold",
              }}
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
            <Button
              sx={{
                textTransform: "capitalize",
                color: scroll ? "#fff" : "#000",
                backgroundColor: "transparent !important",
                fontWeight: "bold",
              }}
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </Button>
            <CartDrawer scroll={scroll} />
            <FavouritesDrawer scroll={scroll} />
          </Stack>
        </Stack>
      ) : undefined}
    </>
  );
};

export default Navbar;

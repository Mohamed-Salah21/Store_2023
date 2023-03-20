import { Stack, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import React, { useState, ReactElement, useEffect } from "react";
import { useNavigate } from "react-router";
import CartDrawer from "../Drawers/CartDrawer";
import FavouritesDrawer from "../Drawers/FavouritesDrawer";
const Navbar = (): ReactElement => {
  const navigate = useNavigate();
  const [scroll, setScroll] = useState<number | boolean>(0);
  useEffect(() => {
    document.onscroll = (): void => {
      const scrollChecked = window.scrollY > 30;
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      scrollChecked !== scroll ? setScroll(scrollChecked) : undefined;
    };
  }, [scroll]);
  return (
    <Stack
      sx={{
        backgroundColor: scroll ? "#151616" : "transparent",
        position: scroll ? "fixed" : "absolute",
        top: scroll ? 0 : "40px",
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
        <CartDrawer scroll={scroll} />
        <FavouritesDrawer scroll={scroll} />
      </Stack>
    </Stack>
  );
};

export default Navbar;

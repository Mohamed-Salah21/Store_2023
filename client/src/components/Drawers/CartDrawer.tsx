import * as React from "react";
import { Drawer, Box, List, Typography, Button } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Stack from "@mui/material/Stack";
type Anchor = "top" | "left" | "bottom" | "right";
type cartDrawerProps = {
  scroll: number | boolean;
};
const CartDrawer = (props: cartDrawerProps) => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  return (
    <div>
      <Button
        onClick={toggleDrawer("right", true)}
        sx={{
          minWidth: 0,
        }}
      >
        <ShoppingBagOutlinedIcon />
      </Button>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer("right", false)}
          onKeyDown={toggleDrawer("right", false)}
        >
          <List>
            {[...Array(4)].map((_, index) => (
              <Stack key={index}>
                <Typography>Item {index}</Typography>
              </Stack>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
};
export default CartDrawer;

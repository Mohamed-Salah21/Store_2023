import React from "react";
import { Paper, Typography, Stack, Button, Box } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useNavigate } from "react-router";
import { useCreateOrderMutation } from "../../rtk_query/cartApi";
import { useLikeProductMutation } from "../../rtk_query/favourites";

const Product = ({ product }) => {
  const [createOrder, { isLoading }] = useCreateOrderMutation();
  const [likeProduct, { isLoading: load }] = useLikeProductMutation();
  const navigate = useNavigate();
  const createOrderInCart = (order) => {
    createOrder(order._id);
  };
  const likeProductInfav = (product) => {
    likeProduct(product._id);
  };
  return (
    <Paper
      sx={{
        width: 0.9,
        mx: "auto",
        position: "relative",
        overflow: "hidden",
        pt: "20px",
        "&:hover": {
          ".box": {
            zIndex: 1,
          },
          ".stack": {
            transform: "translateY(0)",
          },
        },
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{
          height: "200px",
          width: "auto",
          margin: "0 auto",
          display: "block",
          cursor: "pointer",
        }}
        onClick={() => navigate(`/products/${product._id}`)}
      />
      <Typography
        sx={{
          py: "20px",
          textAlign: "center",
          px: "10px",
        }}
      >
        {product.title}
      </Typography>
      <Typography
        sx={{
          py: "20px",
          textAlign: "center",
        }}
      >
        ${product.price}
      </Typography>
      <Stack
        className="stack"
        direction="row"
        justifyContent="flex-end"
        sx={{
          transition: "transform 0.3s",
          transform: "translateY(-200px)",
          position: "absolute",
          right: "20px",
          top: "20px",
        }}
      >
        <Button
          sx={{
            bgcolor: "#fff !important",
            height: "40px",
            width: "40px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
          onClick={() => createOrderInCart(product)}
        >
          <ShoppingBagOutlinedIcon />
        </Button>
      </Stack>
      <Stack
        className="stack"
        direction="row"
        justifyContent="flex-end"
        sx={{
          transition: "transform 0.3s",
          transform: "translateY(-200px)",
          position: "absolute",
          right: "20px",
          top: "70px",
        }}
      >
        <Button
          sx={{
            bgcolor: "#fff !important",
            height: "40px",
            width: "40px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
          onClick={() => likeProductInfav(product)}
        >
          <FavoriteBorderOutlinedIcon />
        </Button>
      </Stack>
    </Paper>
  );
};

export default Product;

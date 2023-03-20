import { Box, Grid, Typography, Button, Stack } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import React from "react";
const SingleProduct = () => {
  return (
    <Box
      sx={{
        pt: "200px",
        width: {
          md: 0.75,
          xs: 0.9,
        },
        mx: "auto",
      }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          lg={4}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt=""
            style={{
              height: "300px",
              width: "auto",
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          lg={8}
          sx={{
            mt: {
              lg: 0,
              xs: "30px",
            },
          }}
        >
          <Box
            sx={{
              width: {
                lg: 0.75,
                md: 0.85,
                xs: 0.95,
              },
              mx: "auto",
              bgcolor: "#EEF3FB",
              position: "relative",
              px: "20px",
              pt: "60px",
            }}
          >
            <Typography
              sx={{
                bgcolor: "#ED088C",
                color: "#fff",
                position: "absolute",
                top: "-10px",
                fontSize: "23px",
                px: "20px",
              }}
            >
              {" "}
              clothes{" "}
            </Typography>

            <Typography
              sx={{
                color: "#0056A6",
                fontWeight: "bold",
              }}
            >
              Mens Casual Premium Slim Fit T-Shirts
            </Typography>
            <Stack
              sx={{
                flexDirection: "row",
                alignItems: "center",
                gap: "15px",
                mt: "20px",
              }}
            >
              <Button
                sx={{
                  bgcolor: "#333 !important",
                  height: "40px",
                  width: "40px",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
              >
                <FavoriteBorderOutlinedIcon sx={{ color: "#fff" }} />
              </Button>
              <Button
                sx={{
                  backgroundColor: "#333333 !important",
                  color: "#fff",
                  px: "20px",
                }}
              >
                add to cart
              </Button>
            </Stack>
            <Box
              sx={{
                mt: "30px",
                pb: "30px",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                quia in optio debitis facilis, vitae, neque ipsa mollitia ipsam
                et minus consectetur! Veritatis doloremque velit quos blanditiis
                deserunt consequuntur soluta?
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SingleProduct;
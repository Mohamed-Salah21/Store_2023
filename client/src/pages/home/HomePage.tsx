import React from "react";
import { Box, Grid, CircularProgress, Stack } from "@mui/material";
import { useGetAllProductsQuery } from "../../rtk_query/productsApi";
import Product from "../../components/home/Product";
const HomePage = () => {
  const { data, isLoading } = useGetAllProductsQuery(undefined);
  return (
    <Box
      sx={{
        pt: "200px",
      }}
    >
      <Grid container>
        {isLoading ? (
          <Grid xs={12} item>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              sx={{
                height: "40vh",
              }}
            >
              <CircularProgress />
            </Stack>
          </Grid>
        ) : (
          data?.products.map((product) => (
            <Grid item lg={3} md={6} xs={12} mt="20px" key={product._id}>
              <Product product={product} />
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default HomePage;

import React from "react";
import { Box, Grid, CircularProgress, Stack, Typography } from "@mui/material";
import { useGetAllProductsQuery } from "../../rtk_query/productsApi";
import Product from "../../components/home/Product";

const HomePage = () => {
  const [category, setCategory] = React.useState("all");
  const { data, isLoading } = useGetAllProductsQuery(
    category !== "all" ? category : undefined
  );
  const categories = ["all", "phones", "headphones", "shoes"];
  return (
    <Box
      sx={{
        pt: "200px",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap="15px"
      >
        {categories?.map((categoryItem) => (
          <Typography
            onClick={() => setCategory(categoryItem)}
            sx={{
              px: "10px",
              py: "5px",
              borderRadius: "5px",
              cursor: "pointer",
              border: category === categoryItem ? "1px solid #000" : undefined,
            }}
          >
            {categoryItem}
          </Typography>
        ))}
      </Stack>
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

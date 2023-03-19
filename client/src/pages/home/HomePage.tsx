import React from "react";
import { Box, Grid, Paper } from "@mui/material";
// import { useGetAllProductsQuery } from "../../rtk_query/productsApi";
const HomePage = () => {
  // const { data } = useGetAllProductsQuery(undefined);
  // console.log("data", data);
  React.useEffect(() => {
    fetch("http://localhost:4000/ecommerce/products")
      .then((res) => res.json())
      .then((data) => console.log("fetched", data));
  }, []);
  return (
    <Box
      sx={{
        pt: "200px",
      }}
    >
      <Grid container>
        {[...Array(25)].map(() => (
          <Grid item lg={3} md={6} xs={12} mt="20px">
            <Paper
              sx={{
                height: "20vh",
                width: 0.9,
                mx: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p>Oka</p>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomePage;

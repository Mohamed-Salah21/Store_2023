import React from "react";
import { Grid, Box, Stack, Button } from "@mui/material";
import TextWriter from "../../components/textWriter/TextWriter";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { publicStyle } from "../../App";
import { string, object } from "yup";
import { useNavigate } from "react-router";
const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: object({
      email: string()
        .email(() => "Invalid email")
        .required("Email is required"),
      password: string().required("Password is required"),
    }),
    onSubmit: async () => toast.success("ok"),
  });
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    formik;
  const navigate = useNavigate();
  return (
    <Grid container>
      <Grid
        item
        lg={9}
        md={8}
        xs={12}
        sx={{
          height: {
            md: "100vh",
            xs: "300px",
          },
          bgcolor: publicStyle.bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            height: {
              xl: "75%",
              lg: "60%",
              md: "50%",
              xs: "200px",
            },
            width: {
              xl: "75%",
              lg: "60%",
              md: "50%",
              xs: "90%",
            },
          }}
        >
          <img
            src="https://www.bettercommerce.io/images/platform/engage-banner-img.svg"
            alt=""
            style={{
              objectFit: "contain",
              height: "100%",
              width: "100%",
            }}
          />
        </Box>
      </Grid>
      <Grid
        item
        lg={3}
        md={4}
        xs={12}
        sx={{
          pt: 6,
          pb: {
            md: 0,
            xs: 8,
          },
        }}
      >
        <form onSubmit={handleSubmit}>
          <Typography
            variant="h5"
            align="center"
            sx={{
              fontSize: {
                md: "23px",
                xs: "18px",
              },
            }}
          >
            Welcome to Store23
          </Typography>
          <Box
            sx={{
              width: {
                sm: 0.75,
                xs: 0.9,
              },
              mx: "auto",
              mt: "50px",
            }}
          >
            <TextWriter
              label="Email"
              name="email"
              value={values.email}
              error={errors.email}
              isTouched={touched.email}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            <TextWriter
              label="Password"
              name="password"
              value={values.password}
              error={errors.password}
              isTouched={touched.password}
              handleChange={handleChange}
              handleBlur={handleBlur}
              extraStyle={{ mt: 3 }}
            />
            <Button
              type="submit"
              sx={{
                mt: "30px",
                width: 1,
                bgcolor: `${publicStyle.bg} !important`,
                color: "#fff",
                textAlign: "center",
                textTransform: "capitalize",
              }}
            >
              Login
            </Button>
            <Stack
              direction="row"
              alignItems="center"
              gap="5px"
              sx={{
                gap: "5px",
                mt: "10px",
              }}
            >
              <Typography
                sx={{
                  color: publicStyle.bg,
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </Typography>
              <Typography sx={{ color: "#BDB0B2", fontSize: "14px" }}>
                Don't have an account?
              </Typography>
            </Stack>
          </Box>
        </form>
      </Grid>
    </Grid>
  );
};

export default LoginPage;

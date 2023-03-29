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
    <Box
      sx={{
        bgcolor: publicStyle.color1,
        p: "20px 0 50px",
      }}
    >
      <Box
        sx={{
          border: "1px solid red",
          bgcolor: "#fff",
          p: "40px 20px",
          borderRadius: "20px",
          width: {
            md: "700px",
            sm: 0.75,
            xs: 0.9,
          },
          m: "100px auto",
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
      </Box>
    </Box>
  );
};

export default LoginPage;

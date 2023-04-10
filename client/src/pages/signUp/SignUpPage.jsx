import React from "react";
import {
  Grid,
  Box,
  Typography,
  Stack,
  Button,
  IconButton,
} from "@mui/material";
import { publicStyle } from "../../App";
import TextWriter from "../../components/textWriter/TextWriter";
import { useFormik } from "formik";
import { date, object, string } from "yup";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

import FileImageUpload from "../../components/fileUpload/FileImageUpload";
const SignUpPage = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      phone: "",
      image: "",
    },
    validationSchema: object({
      username: string().required("Username is required"),
      email: string()
        .email(() => "Invalid email")
        .required("Email is required"),
      password: string().required("Password is required"),
      phone: string()
        .matches(/^\d+$/, () => "Digits only")
        .required("Phone is required"),
      image: string().required("Proile picture is required"),
      birthDate: date()
        .typeError("Birth date is required")
        .required("Birth date is required"),
    }),
    onSubmit: async () => toast.success("ok"),
  });
  const {
    values,
    setValues,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = formik;
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = React.useState(null);

  const handleUploadImg = (e) => {
    if (e.target.files) {
      setProfileImage(e.target.files[0]);
      setValues({
        ...values,
        image: e.target.files[0]?.name,
      });
    }
    return;
  };
  const handleRemoveUploadedImg = () => {
    setProfileImage(null);
    setValues({
      ...values,
      image: "",
    });
  };
  return (
    <Box
      sx={{
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
              mb: 3,
              fontWeight: "bold",
            }}
          >
            Join Us
          </Typography>
          <Grid container>
            <Grid xs={12} px={"2%"} mb={"25px"}>
              <FileImageUpload
                error={errors.image}
                isTouched={touched.image}
                file={profileImage}
                uploading={handleUploadImg}
                removing={handleRemoveUploadedImg}
              />
            </Grid>
            <Grid xs={12} md={6} px={"2%"}>
              <TextWriter
                label="Username"
                name="username"
                value={values.username}
                error={errors.username}
                isTouched={touched.username}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
            </Grid>
            <Grid item xs={12} md={6} px={"2%"}>
              <TextWriter
                label="Email"
                name="email"
                value={values.email}
                error={errors.email}
                isTouched={touched.email}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
            </Grid>
            <Grid xs={12} md={6} px={"2%"} mt="10px">
              <TextWriter
                label="Password"
                name="password"
                value={values.password}
                error={errors.password}
                isTouched={touched.password}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
            </Grid>
            <Grid xs={12} md={6} px={"2%"} mt="10px">
              <TextWriter
                label="Phone"
                name="phone"
                value={values.phone}
                error={errors.phone}
                isTouched={touched.phone}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            sx={{
              mt: "30px",
              display: "block",
              width: {
                md: "200px",
                xs: 1,
              },
              px: {
                md: "40px",
                xs: 0,
              },
              bgcolor: `${publicStyle.bg} !important`,
              color: "#fff",
              textAlign: "center",
              textTransform: "capitalize",
              mx: "auto",
            }}
          >
            Sign Up
          </Button>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
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
              onClick={() => navigate("/login")}
            >
              Login
            </Typography>
            <Typography sx={{ color: "#BDB0B2", fontSize: "14px" }}>
              Do you have account?
            </Typography>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default SignUpPage;

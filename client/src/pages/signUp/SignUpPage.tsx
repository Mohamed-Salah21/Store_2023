import React from "react";
import {
  Grid,
  Box,
  Typography,
  Stack,
  Button,
  IconButton,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { publicStyle } from "../../App";
import TextWriter from "../../components/textWriter/TextWriter";
import { useFormik } from "formik";
import { date, object, string } from "yup";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      phone: "",
      birthDate: null,
      image: "",
    },
    validationSchema: object({
      username: string().required("Username is required"),
      email: string()
        .email(() => "Invalid email")
        .required("Email is required"),
      password: string().required("Password is required"),
      phone: string().required("Phone is required"),
      image: string().required("Image is required"),
      birthDate: date().required("Birth date is required"),
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
  const [profileImage, setProfileImage] = React.useState<File | null>(null);

  const handleUploadImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setProfileImage(e.target.files[0]);
      setValues({
        ...values,
        image: e.target.files[0]?.name,
      });
    }
    return;
  };
  return (
    <Box
      sx={{
        backgroundColor: publicStyle.color1,
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
              <Box position="relative" pb={3}>
                <Box
                  sx={{
                    position: "relative",
                    width: "180px",
                    bgcolor: "#F1F3F4",
                    height: "180px",
                    border:
                      errors.image && touched.image
                        ? "1px solid red"
                        : "1px dashed #000",
                    "&:hover": {},
                  }}
                >
                  {profileImage ? (
                    <img
                      src={URL.createObjectURL(profileImage)}
                      alt="profile"
                      style={{
                        height: "100%",
                        width: "100%",
                      }}
                    />
                  ) : undefined}
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="label"
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      width: "50px",
                      height: "50px",
                      borderRadius: "25px",
                      bgcolor: "#fff !important",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <input
                      hidden
                      accept="image/*"
                      type="file"
                      onChange={handleUploadImg}
                    />
                    <PhotoCamera />
                  </IconButton>
                </Box>
                {errors.image && touched.image ? (
                  <Typography
                    sx={{
                      color: "red",
                      position: "absolute",
                      bottom: "5px",
                      left: 0,
                      fontSize: "12px",
                      fontWeight: "bold",
                      m: 0,
                    }}
                  >
                    {errors.image}
                  </Typography>
                ) : undefined}
              </Box>
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
            <Grid xs={12} md={6} px={"2%"} mt="10px">
              <TextWriter
                label="Birth Date"
                name="birthDate"
                type="date"
                value={values.birthDate}
                error={errors.birthDate}
                isTouched={touched.birthDate}
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

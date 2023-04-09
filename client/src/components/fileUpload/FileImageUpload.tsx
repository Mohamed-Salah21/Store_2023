import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
type FileUploadProps = {
  error: string | undefined;
  isTouched: boolean | undefined;
  file: File | null;
  uploading: (e: React.ChangeEvent<HTMLInputElement>) => void;
  removing: () => void;
};
const FileImageUpload: React.FC<FileUploadProps> = ({
  error,
  isTouched,
  file,
  uploading,
  removing,
}) => {
  return (
    <Box position="relative" pb={3}>
      <Box
        sx={{
          width: "180px",
          bgcolor: "#F1F3F4",
          height: "180px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: error && isTouched ? "1px solid red" : "1px dashed #000",
          "&:hover": {},
        }}
      >
        {file ? (
          <Box
            sx={{
              position: "relative",
              height: 1,
              width: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "&:hover": {
                label: {
                  opacity: 1,
                  zIndex: 0,
                },
              },
            }}
          >
            <img
              src={URL.createObjectURL(file)}
              alt="profile"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
              }}
            />
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
              sx={{
                opacity: 0,
                zIndex: -1,
                width: "50px",
                height: "50px",
                borderRadius: "25px",
                bgcolor: "#fff !important",
                transition: "0.3s all",
              }}
              onClick={removing}
            >
              <DeleteIcon
                sx={{
                  color: "#F25D6A",
                }}
              />
            </IconButton>
          </Box>
        ) : (
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
            sx={{
              width: "50px",
              height: "50px",
              borderRadius: "25px",
              bgcolor: "#fff !important",
            }}
          >
            <input hidden accept="image/*" type="file" onChange={uploading} />
            <PhotoCamera />
          </IconButton>
        )}
      </Box>
      {error && isTouched ? (
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
          {error}
        </Typography>
      ) : undefined}
    </Box>
  );
};

export default FileImageUpload;

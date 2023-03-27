import React from "react";
import { Box, Typography, InputBase } from "@mui/material";
type TextWriterProps = {
  label: string;
  name: string;
  value: string | null;
  type?: string;
  error: string | undefined;
  isTouched: boolean | undefined;
  extraStyle?: object | undefined;
  handleChange: { (e: React.ChangeEvent<HTMLInputElement>): void };
  handleBlur: { (e: React.FocusEvent<HTMLInputElement>): void };
};
const TextWriter: React.FC<TextWriterProps> = ({
  label,
  name,
  value,
  error,
  type,
  isTouched,
  extraStyle,
  handleChange,
  handleBlur,
}) => {
  return (
    <Box
      sx={{
        ...extraStyle,
        position: "relative",
        pb: 3,
      }}
    >
      <Typography component="label">{label}</Typography>
      <InputBase
        sx={{
          borderBottom: 1,
          borderColor: error && isTouched ? "red" : "divider",
          width: 1,
        }}
        type={type ? type : "text"}
        placeholder="Type here..."
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
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

export default TextWriter;

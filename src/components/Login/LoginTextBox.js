import { TextField, Typography } from "@mui/material";
import React from "react";

export default function LoginTextBox({
  label,
  placeholder,
  handleChange,
  password,
}) {
  return (
    <div>
      <Typography>{label}</Typography>
      <TextField
        type={password}
        placeholder={placeholder}
        fullWidth
        onChange={(e) => handleChange(e.target.value, label)}
      />
    </div>
  );
}

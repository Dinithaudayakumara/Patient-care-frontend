import { TextField, Typography } from "@mui/material";
import React from "react";

export default function LoginTextBox({ label, placeholder, handleChange }) {
  return (
    <div>
      <Typography>{label}</Typography>
      <TextField
        placeholder={placeholder}
        fullWidth
        onChange={(e) => handleChange(e.target.value, label)}
      />
    </div>
  );
}

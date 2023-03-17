import { TextField, Typography } from "@mui/material";
import React from "react";

export default function LoginTextBox({ info }) {
  return (
    <div>
      <Typography>{info.name}</Typography>
      <TextField placeholder={info.placeholder} fullWidth />
    </div>
  );
}

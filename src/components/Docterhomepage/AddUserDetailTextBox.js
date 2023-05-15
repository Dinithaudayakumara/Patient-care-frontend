import { TextField, Typography } from "@mui/material";
import React from "react";

export default function AddUserDetailTextBox({ name, placeholder, fieldname }) {
  return (
    <div>
      <Typography color="#004286">{fieldname}</Typography>
      <TextField
        sx={{ m: 1, width: 350 }}
        multiline={true}
        rows={4}
        placeholder={placeholder}
        size="small"
      />
    </div>
  );
}

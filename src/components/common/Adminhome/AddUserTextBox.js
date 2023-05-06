import { TextField, Typography } from "@mui/material";
import React from "react";

export default function AddUserTextBox({
  fieldname,
  placeholder,
  value,
  name,
  handleChange,
}) {
  return (
    <div>
      <Typography color="#004286">{fieldname}</Typography>
      <TextField
        value={value}
        onChange={(e) => handleChange(e.target.value, name)}
        sx={{ m: 1, width: 350 }}
        placeholder={placeholder}
        size="small"
      />
    </div>
  );
}

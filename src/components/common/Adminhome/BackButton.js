import { IconButton } from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function BackButton() {
  return (
    <div>
      <IconButton
        color="primary"
        aria-label="add to shopping cart"
        href="/admin"
      >
        <ArrowBackIcon style={{ fontSize: 50 }} />
      </IconButton>
    </div>
  );
}

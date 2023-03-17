import { Button } from "@mui/material";
import React from "react";

export default function LoginButton() {
  return (
    <div>
      <Button
        variant="contained"
        sx={{ textTransform: "none " }}
        fullWidth
        style={{ background: "linear-gradient(to right, #017AF1, #00E7F0)" }}
      >
        Login
      </Button>
    </div>
  );
}

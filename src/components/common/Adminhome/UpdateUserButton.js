import React from "react";
import { Button } from "@mui/material";

export default function UpdateUserButton(doctorOnClick) {
  return (
    <div>
      <Button
        variant="contained"
        sx={{ textTransform: "none ", width: "150px" }}
        style={{ background: "#017CF1" }}
      >
        Update
      </Button>
    </div>
  );
}

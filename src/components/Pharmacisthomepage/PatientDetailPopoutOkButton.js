import { Button } from "@mui/material";
import React from "react";

export default function PatientDetailPopoutOkButton() {
  return (
    <div>
      <Button
        variant="contained"
        sx={{ textTransform: "none ", width: "350px" }}
        style={{ background: "#017CF1" }}
      >
        OK
      </Button>
    </div>
  );
}

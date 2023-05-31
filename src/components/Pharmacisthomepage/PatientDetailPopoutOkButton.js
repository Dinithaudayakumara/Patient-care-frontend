import { Button } from "@mui/material";
import React from "react";

export default function PatientDetailPopoutOkButton({ handleOnClick }) {
  return (
    <div>
      <Button
        onClick={handleOnClick}
        variant="contained"
        sx={{ textTransform: "none ", width: "350px" }}
        style={{ background: "#017CF1" }}
      >
        OK
      </Button>
    </div>
  );
}

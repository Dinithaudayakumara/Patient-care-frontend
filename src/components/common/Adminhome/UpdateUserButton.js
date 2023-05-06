import React from "react";
import { Button } from "@mui/material";

export default function UpdateUserButton({ handleDoctorUpdate }) {
  return (
    <div>
      <Button
        variant="contained"
        sx={{ textTransform: "none ", width: "150px" }}
        style={{ background: "#017CF1" }}
        onClick={handleDoctorUpdate}
      >
        Update
      </Button>
    </div>
  );
}

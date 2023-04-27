import React from "react";
import { Button } from "@mui/material";

export default function AddUserButton({ doctorOnClick }) {
  return (
    <div>
      <Button variant="contained" onClick={doctorOnClick}>
        Add New{" "}
      </Button>
    </div>
  );
}

import React from "react";
import { Button } from "@mui/material";

export default function AddUserButton({ doctorOnClick }) {
  return (
    <div>
      <Button variant="contained" onClick={doctorOnClick} sx={{ width: "85%" }}>
        Add New
      </Button>
    </div>
  );
}

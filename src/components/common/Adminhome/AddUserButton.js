import React from "react";
import { Button } from "@mui/material";

export default function AddUserButton({ handleOnClick }) {
  return (
    <div>
      <Button variant="contained" onClick={handleOnClick} sx={{ width: "85%" }}>
        Add New
      </Button>
    </div>
  );
}

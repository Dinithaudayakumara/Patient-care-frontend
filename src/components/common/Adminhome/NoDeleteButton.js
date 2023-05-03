import { Button } from "@mui/material";
import React from "react";

export default function NoDeleteButton() {
  return (
    <div>
      <Button
        variant="contained"
        sx={{ textTransform: "none ", width: "150px" }}
      >
        No
      </Button>
    </div>
  );
}

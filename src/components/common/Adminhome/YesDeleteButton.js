import { Button } from "@mui/material";
import React from "react";

export default function YesDeleteButton() {
  return (
    <div>
      <Button
        variant="contained"
        sx={{ textTransform: "none ", width: "150px" }}
      >
        Yes
      </Button>
    </div>
  );
}

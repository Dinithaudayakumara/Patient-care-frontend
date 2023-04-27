import { Button } from "@mui/material";
import React from "react";

export default function ActionButton({ OnClick }) {
  return (
    <div>
      <Button variant="contained" onClick={OnClick}>
        Add New{" "}
      </Button>
    </div>
  );
}

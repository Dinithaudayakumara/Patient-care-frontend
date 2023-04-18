import { Button } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBarButton() {
  return (
    <div>
      <Button variant="outlined" startIcon={<SearchIcon />}>
        Search
      </Button>
    </div>
  );
}

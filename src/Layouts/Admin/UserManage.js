import React from "react";
import SearchBar from "../common/SearchBar";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export default function UserManage() {
  return (
    <div>
      <Grid2 container justifyContent="space-between" pt={2}>
        <Grid2 item pl={7}>
          <SearchBar />
        </Grid2>
      </Grid2>
    </div>
  );
}

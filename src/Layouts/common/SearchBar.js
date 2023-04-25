import React from "react";
import SearchField from "../../components/common/Searchbar/SearchField";
import SearchBarButton from "../../components/common/Searchbar/SearchBarButton";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export default function SearchBar() {
  return (
    <div >
      <Grid2 container spacing={3} alignItems="center" >
        <Grid2 item>
          <SearchField />
        </Grid2>
        <Grid2 item>
          <SearchBarButton />
        </Grid2>
      </Grid2>
    </div>
  );
}

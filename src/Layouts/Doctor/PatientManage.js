import React from "react";
import { Grid } from "@mui/material";
import SearchBar from "../common/SearchBar";

export default function PatientManage() {
  const [setOpen] = React.useState(false);

  const OnClick = () => {
    setOpen(true);
    setOpen(false);
  };

  // const handleClose = () => {

  // };
  return (
    <div>
      <Grid>
        <SearchBar OnClick={OnClick} />
      </Grid>
    </div>
  );
}

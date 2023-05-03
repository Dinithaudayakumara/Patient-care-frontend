import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";
import YesDeleteButton from "../../components/common/Adminhome/YesDeleteButton";
import NoDeleteButton from "../../components/common/Adminhome/NoDeleteButton";

export default function AdminPharmacistTableDelete() {
  return (
    <div>
      <Typography
        align="center"
        sx={{ fontSize: 29, paddingTop: 1, color: "#017CF1" }}
      >
        <b>Do you want to delete user ?</b>
      </Typography>

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Avatar sx={{ width: 150, height: 150 }} />

        <Typography align="center" pt={2}>
          Olive Viper
        </Typography>
      </Grid>

      <Grid container justifyContent="center" spacing={2} pt={3}>
        <Grid item>
          <YesDeleteButton />
        </Grid>
        <Grid item>
          <NoDeleteButton />
        </Grid>
      </Grid>
    </div>
  );
}

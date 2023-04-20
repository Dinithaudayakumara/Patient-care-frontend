import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import BackButton from "../../components/common/Adminhome/BackButton";

export default function AdminTopNav({ image }) {
  return (
    <div>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        pt={1}
        pr={8}
        pb={1}
      >
        <Grid item>
          <BackButton />
        </Grid>
        <Grid item>
          <Grid container alignItems="center" spacing={5}>
            <Grid item>
              <img src={image} alt="patient" width="135px" />
            </Grid>
            <Grid item style={{ textAlign: "left" }}>
              <Typography sx={{ fontSize: 30 }}>
                <b>Patient Details</b>
              </Typography>
              <Typography>#PHA1234</Typography>
              <Typography>Admin</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider />
    </div>
  );
}

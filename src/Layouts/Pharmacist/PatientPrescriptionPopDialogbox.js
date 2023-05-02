import { Grid, Typography } from "@mui/material";
import React from "react";
import ControlledCheckbox from "../../components/common/Details/ControlledCheckbox";
import PatientDetailPopoutOkButton from "../../components/Pharmacisthomepage/PatientDetailPopoutOkButton";

export default function PatientPrescriptionPopDialogbox() {
  return (
    <div style={{ textAlign: "center" }}>
      <Typography
        align="center"
        sx={{ fontSize: 29, paddingTop: 1, color: "#017CF1" }}
      >
        <b>Prescription List</b>
      </Typography>
      <Typography align="center" sx={{ fontSize: 13, paddingTop: 1 }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an un known printer took a galley of type and
        scrambled it to make a type specimen book.
      </Typography>
      <Grid container justifyContent="space-around" textAlign="left">
        <Grid item xs={6}>
          <Typography sx={{ pt: 3 }}>
            <spam style={{ color: "#004286" }}>Name</spam> Dr. Devid
          </Typography>
          <Typography sx={{ pt: 2 }}>
            <spam style={{ color: "#004286" }}>Date</spam> DD/MM/YYYY
          </Typography>
          <Typography sx={{ pt: 2 }}>
            <spam style={{ color: "#004286" }}>Persistent cough </spam>
          </Typography>
          <Typography sx={{ fontSize: 12 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Typography>
        </Grid>
        <Grid item>
          <Typography sx={{ pt: 3 }}>
            <spam style={{ color: "#004286" }}>
              <b>Prescription</b>
            </spam>
          </Typography>
          <Typography sx={{ fontSize: 12 }}>
            Lorem Ipsum is simply dummy text
          </Typography>
          <Typography sx={{ fontSize: 12 }}>
            Lorem Ipsum is simply dummy text
          </Typography>
          <Typography sx={{ fontSize: 12 }}>
            Lorem Ipsum is simply dummy text
          </Typography>
          <Typography sx={{ fontSize: 12 }}>
            Lorem Ipsum is simply dummy text
          </Typography>
          <Typography sx={{ pt: 2 }}>
            <spam style={{ color: "#004286" }}>
              <b>Prescription</b>
            </spam>
          </Typography>
          <Grid container alignItems="center">
            <Grid item>
              <ControlledCheckbox />
            </Grid>
            <Grid item>
              <Typography sx={{ fontSize: 14 }}>
                Patient Brought medicine{" "}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div style={{ paddingTop: 45 }}>
        <PatientDetailPopoutOkButton />
      </div>
    </div>
  );
}

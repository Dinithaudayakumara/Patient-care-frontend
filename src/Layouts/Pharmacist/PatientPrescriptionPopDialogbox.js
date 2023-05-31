import { Grid, Typography } from "@mui/material";
import React from "react";
import ControlledCheckbox from "../../components/common/Details/ControlledCheckbox";
import PatientDetailPopoutOkButton from "../../components/Pharmacisthomepage/PatientDetailPopoutOkButton";

export default function PatientPrescriptionPopDialogbox({ handleOnClick }) {
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
            <spam style={{ color: "#004286" }}>Name</spam> Dinitha Prasanna
          </Typography>
          <Typography sx={{ pt: 2 }}>
            <spam style={{ color: "#004286" }}>Date</spam> 02/04/2003
          </Typography>
          <Typography sx={{ pt: 2 }}>
            <spam style={{ color: "#004286" }}>Persistent cough </spam>
          </Typography>
          <Typography sx={{ fontSize: 12 }}>
            The prescribed medications for the patient consist of [Medication 1]
            for [specific condition], [Medication 2] for [specific condition],
            and [Medication 3] for [specific condition]. Please adhere to the
            recommended dosage instructions and contact the healthcare provider
            if any issues arise. Ensure proper storage and keep medications away
            from children.
          </Typography>
        </Grid>
        <Grid item>
          <Typography sx={{ pt: 3 }}>
            <spam style={{ color: "#004286" }}>
              <b>Prescription</b>
            </spam>
          </Typography>
          <Typography sx={{ fontSize: 12 }}>
            Amoxicillin 500mg: Take three times daily for 10 days.
          </Typography>
          <Typography sx={{ fontSize: 12 }}>
            Ibuprofen 400mg: Take every 6 hours as needed for pain.
          </Typography>
          <Typography sx={{ fontSize: 12 }}>
            Simvastatin 20mg: Take one tablet at bedtime for cholesterol.
          </Typography>
          <Typography sx={{ fontSize: 12 }}>
            Metformin 500mg: Take twice daily with meals for diabetes.
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
        <PatientDetailPopoutOkButton handleOnClick={handleOnClick} />
      </div>
    </div>
  );
}

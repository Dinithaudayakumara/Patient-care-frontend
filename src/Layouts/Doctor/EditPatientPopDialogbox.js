import { Grid, Typography } from "@mui/material";
import React from "react";
import AddUserTextBox from "../../components/common/Adminhome/AddUserTextBox";
import AddUserDetailTextBox from "../../components/Docterhomepage/AddUserDetailTextBox";
import UpdateUserButton from "../../components/common/Adminhome/UpdateUserButton";

export default function UpdatePatientPopDialogbox({ handleUpdate }) {
  return (
    <div>
      <Typography align="center" sx={{ fontSize: 29, paddingTop: 1 }}>
        <b>#KFH123</b>
      </Typography>
      <Typography align="center" sx={{ fontSize: 13, paddingTop: 1 }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Typography>

      <Grid container pt={5}>
        <Grid item xs={6} pl={3}>
          <AddUserTextBox fieldname="Date" placeholder="2003/04/02" />
          <AddUserDetailTextBox
            fieldname="Prescription"
            placeholder="The prescribed medications for the patient include [Medication 1], [Medication 2], and [Medication 3]. Please follow the provided dosage instructions and take each medication as directed. If any concerns arise, contact the healthcare provider. Keep medications out of reach of children and store them appropriately. "
          />
        </Grid>
        <Grid item xs={6}>
          <AddUserDetailTextBox
            fieldname="Prescription"
            placeholder="The prescribed medications for the patient consist of [Medication 1] for [specific condition], [Medication 2] for [specific condition], and [Medication 3] for [specific condition]. Please adhere to the recommended dosage instructions and contact the healthcare provider if any issues arise. Ensure proper storage and keep medications away from children. "
          />
          <Grid pl={1} pt={3}>
            <UpdateUserButton handleUpdate={handleUpdate} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

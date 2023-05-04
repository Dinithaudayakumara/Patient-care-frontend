import { Grid, Typography } from "@mui/material";
import React from "react";
import AddUserTextBox from "../../components/common/Adminhome/AddUserTextBox";
import AddUserDetailTextBox from "../../components/Docterhomepage/AddUserDetailTextBox";
import UpdateUserButton from "../../components/common/Adminhome/UpdateUserButton";

export default function UpdatePatientPopDialogbox() {
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
          <AddUserTextBox name="Date" placeholder="YYYY/MM/DD" />
          <AddUserDetailTextBox
            name="Prescription"
            placeholder="Lorem Ipsum is simply dummy text "
          />
        </Grid>
        <Grid item xs={6}>
          <AddUserDetailTextBox
            name="Prescription"
            placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type  "
          />
          <Grid pl={1} pt={3}>
            <UpdateUserButton />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

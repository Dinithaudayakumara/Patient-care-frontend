import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";
import AddUserTextBox from "../../components/common/Adminhome/AddUserTextBox";
import AddUserButton from "../../components/common/Adminhome/AddUserButton";

export default function DoctorAddNewDialogBox() {
  return (
    <div>
      <Typography
        align="center"
        sx={{ fontSize: 29, paddingTop: 1, color: "#017CF1" }}
      >
        <b>Add New</b>
      </Typography>
      <Typography align="center" sx={{ fontSize: 13, paddingTop: 1 }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Typography>

      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item pl={5}>
          <AddUserTextBox
            name="Name"
            placeholder="Enter your Name"
            fieldname="Name"
          />
          <AddUserTextBox
            name="Email"
            placeholder="Enter your email address"
            fieldname="Email"
          />
          <AddUserTextBox
            name="Password"
            placeholder="Enter Your Password"
            fieldname="Password"
          />
          <AddUserTextBox
            name="Type of Doctor "
            placeholder="Enter your Name"
            fieldname="Type of Doctor "
          />
        </Grid>
        <Grid item pr={17} pt={5} sx={{ textAlign: "center" }}>
          <Avatar sx={{ width: 180, height: 180 }}></Avatar>
          <Typography pt={4} sx={{ fontSize: 13 }}>
            Add Profile Picture
          </Typography>
          <div style={{ paddingTop: 50 }}>
            <AddUserButton />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

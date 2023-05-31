import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";
import AddUserTextBox from "../../components/common/Adminhome/AddUserTextBox";
import AddUserButton from "../../components/common/Adminhome/AddUserButton";
import { useDispatch, useSelector } from "react-redux";
import {
  createDoctor,
  setAdminSelectedDoctor,
} from "../../store/actions/doctorAction";

export default function DoctorAddNewDialogBox({ handleClose }) {
  const dispatch = useDispatch();

  const { adminSelectedDoctor } = useSelector((store) => store.doctorReducer);

  const handleChange = (value, name) => {
    dispatch(setAdminSelectedDoctor({ ...adminSelectedDoctor, [name]: value }));
  };

  console.log(adminSelectedDoctor);

  const handleOnClick = () => {
    dispatch(createDoctor(adminSelectedDoctor));
    handleClose();
  };

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
            name="firstName"
            placeholder="Enter your Name"
            fieldname="Name"
            handleChange={handleChange}
          />
          <AddUserTextBox
            name="email"
            placeholder="Enter your email address"
            fieldname="Email"
            handleChange={handleChange}
          />
          <AddUserTextBox
            name="password"
            placeholder="Enter Your Password"
            fieldname="Password"
            handleChange={handleChange}
          />
          <AddUserTextBox
            name="mobileNumber"
            placeholder="Enter your Number"
            fieldname="Number "
            handleChange={handleChange}
          />
          <AddUserTextBox
            name="specialty"
            placeholder="Enter your Name"
            fieldname="Type of Doctor "
            handleChange={handleChange}
          />
        </Grid>
        <Grid item pr={17} pt={1} sx={{ textAlign: "center" }}>
          <Avatar sx={{ width: 180, height: 180 }}></Avatar>
          <Typography pt={4} sx={{ fontSize: 13 }}>
            Profile Picture
          </Typography>
          <div style={{ paddingTop: 35 }}>
            <AddUserButton handleOnClick={handleOnClick} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

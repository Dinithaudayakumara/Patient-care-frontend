import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";
import AddUserTextBox from "../../components/common/Adminhome/AddUserTextBox";
import UpdateUserButton from "../../components/common/Adminhome/UpdateUserButton";
import { useDispatch, useSelector } from "react-redux";
import { setAdminSelectedDoctor } from "../../store/actions/doctorAction";

export default function AdminDoctorTableEdit({ handleUpdate }) {
  const dispatch = useDispatch();
  const { adminSelectedDoctor } = useSelector((store) => store.doctorReducer);
  console.log(adminSelectedDoctor);
  const handleChange = (value, name) => {
    dispatch(setAdminSelectedDoctor({ ...adminSelectedDoctor, [name]: value }));
    console.log(name);
    console.log(value);
  };

  return (
    <div>
      <Typography
        align="center"
        sx={{ fontSize: 29, paddingTop: 1, color: "#017CF1" }}
      >
        <b>Edit Doctor</b>
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
            fieldname="Name"
            placeholder="Enter your Name"
            value={adminSelectedDoctor.firstName}
            name="firstName"
            handleChange={handleChange}
          />
          <AddUserTextBox
            fieldname="Email"
            placeholder="Enter your email address"
            value={adminSelectedDoctor.email}
            name="email"
            handleChange={handleChange}
          />
          <AddUserTextBox
            fieldname="Password"
            placeholder="Enter Your Password"
            value={adminSelectedDoctor.password}
            name="password"
            handleChange={handleChange}
          />
          <AddUserTextBox
            fieldname="Number "
            placeholder="Enter your Number"
            value={adminSelectedDoctor.mobileNumber}
            name="mobileNumber"
            handleChange={handleChange}
          />
          <AddUserTextBox
            fieldname="Type of Doctor "
            placeholder="Enter your Name"
            value={adminSelectedDoctor.specialty}
            name="specialty"
            handleChange={handleChange}
          />
        </Grid>
        <Grid item pr={17} pt={5} sx={{ textAlign: "center" }}>
          <Avatar sx={{ width: 180, height: 180 }}></Avatar>
          <Typography pt={2} sx={{ fontSize: 13 }}>
            Add Profile Picture
          </Typography>
          <div style={{ paddingTop: 45 }}>
            <UpdateUserButton handleUpdate={handleUpdate} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";
import AddUserTextBox from "../../components/common/Adminhome/AddUserTextBox";
import UpdateUserButton from "../../components/common/Adminhome/UpdateUserButton";
import { useDispatch, useSelector } from "react-redux";
import { setAdminSelectedPharmacist } from "../../store/actions/pharmacistAction";

export default function AdminPharmacistTableEdit({ handleUpdate }) {
  const dispatch = useDispatch();
  const { adminSelectedPharmacist } = useSelector(
    (store) => store.pharmacistReducer
  );
  console.log(adminSelectedPharmacist);
  const handleChange = (value, name) => {
    dispatch(
      setAdminSelectedPharmacist({ ...adminSelectedPharmacist, [name]: value })
    );
    console.log(name);
    console.log(value);
  };

  return (
    <div>
      <Typography
        align="center"
        sx={{ fontSize: 29, paddingTop: 1, color: "#017CF1" }}
      >
        <b>Edit Pharmacist</b>
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
            value={adminSelectedPharmacist.firstName}
            name="firstName"
            handleChange={handleChange}
          />
          <AddUserTextBox
            fieldname="Email"
            placeholder="Enter your email address"
            value={adminSelectedPharmacist.email}
            name="email"
            handleChange={handleChange}
          />
          <AddUserTextBox
            fieldname="Password"
            placeholder="Enter Your Password"
            value={adminSelectedPharmacist.password}
            name="password"
            handleChange={handleChange}
          />
          <AddUserTextBox
            fieldname="Location"
            placeholder="Enter your Location"
            value={adminSelectedPharmacist.location}
            name="location "
            handleChange={handleChange}
          />
        </Grid>
        <Grid item pr={17} pt={5} sx={{ textAlign: "center" }}>
          <Avatar sx={{ width: 180, height: 180 }}></Avatar>
          <Typography pt={2} sx={{ fontSize: 13 }}>
            Add Profile Picture
          </Typography>
          <div style={{ paddingTop: 60 }}>
            <UpdateUserButton handleUpdate={handleUpdate} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

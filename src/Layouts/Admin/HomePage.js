import React from "react";
import Logo from "../../components/common/Logo";
import { Grid, Typography } from "@mui/material";
import AdminUserType from "../../components/Adminhomepage/AdminUserType";
import DoctorPic from "../../assets/images/doctorpic.png";
import PatientPic from "../../assets/images/patientpic.png";
import PharmacistPic from "../../assets/images/pharmacistpic.png";

export default function Adminbackgroundpic() {
  return (
    <div >
      <Logo />
      <Typography>
        Patient <span>Care</span>
      </Typography>
      <Grid container spacing={6} justifyContent="center" pt={10}>
        <Grid item>
          <AdminUserType type={"Doctor"} image={DoctorPic} />
        </Grid>
        <Grid item>
          <AdminUserType type={"Patient"} image={PatientPic} />
        </Grid>
        <Grid item>
          <AdminUserType type={"Pharmacist"} image={PharmacistPic} />
        </Grid>
      </Grid>
    </div>
  );
}

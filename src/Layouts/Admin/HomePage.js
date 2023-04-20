import React from "react";
import Logo from "../../components/common/Logo";
import { Button, Grid, Typography } from "@mui/material";
import AdminUserType from "../../components/Adminhomepage/AdminUserType";
import DoctorPic from "../../assets/images/doctorpic.png";
import PatientPic from "../../assets/images/patientpic.png";
import PharmacistPic from "../../assets/images/pharmacistpic.png";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

export default function Adminbackgroundpic() {
  return (
    <div>
      <Logo />
      <Typography sx={{ fontSize: 30 }}>
        <b>Patient</b> <span>Care</span>
      </Typography>
      <Grid container spacing={6} justifyContent="center" pt={10}>
        <Grid item>
          <AdminUserType
            type={"Doctor"}
            image={DoctorPic}
            route={"admin/doctor"}
          />
        </Grid>
        <Grid item>
          <AdminUserType
            type={"Patient"}
            image={PatientPic}
            route={"admin/patient"}
          />
        </Grid>
        <Grid item>
          <AdminUserType
            type={"Pharmacist"}
            image={PharmacistPic}
            route={"admin/pharmacist"}
          />
        </Grid>
      </Grid>

      <Button pt={200}>
        <ExitToAppIcon /> {/* Add the ExitToAppIcon here */}
      </Button>
    </div>
  );
}

import React, { useEffect } from "react";
import Logo from "../../components/common/Logo";
import { Button, Grid, Typography } from "@mui/material";
import AdminUserType from "../../components/Adminhomepage/AdminUserType";
import DoctorPic from "../../assets/images/doctorpic.png";
import PatientPic from "../../assets/images/patientpic.png";
import PharmacistPic from "../../assets/images/pharmacistpic.png";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useDispatch, useSelector } from "react-redux";
import { getAllPatients } from "../../store/actions/patientAction";
import { getAllDoctors } from "../../store/actions/doctorAction";
import { getAllPharmacists } from "../../store/actions/pharmacistAction";

export default function Adminbackgroundpic() {
  const dispatch = useDispatch();

  const { allPatientList } = useSelector((store) => store.patientReducer);
  const { allDoctorList } = useSelector((store) => store.doctorReducer);
  const { allPharmacistList } = useSelector((store) => store.pharmacistReducer);

  useEffect(() => {
    if (allPatientList.length === 0) {
      dispatch(getAllPatients());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (allDoctorList.length === 0) {
      dispatch(getAllDoctors());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (allPharmacistList.length === 0) {
      dispatch(getAllPharmacists());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Logo />
      <Typography sx={{ fontSize: 30 }}>
        <b>Patient</b> <span>Care</span>
      </Typography>
      <Grid container spacing={6} justifyContent="center" pt={10} pb={15}>
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

      <Button>
        <ExitToAppIcon />

        <Typography>Logout</Typography>
      </Button>
    </div>
  );
}

import React from "react";
import SearchBarWithButton from "../common/SearchBarWithButton";
import AdminPatientTable from "./AdminPatientTable";
import PatientPic from "../../assets/images/patientpic.png";
import AdminTopNav from "./AdminTopNav";
import { Dialog } from "@mui/material";
import PatientAddNewDialogBox from "./PatientAddNewDialogBox";
import { useDispatch } from "react-redux";
import { setAdminSelectedPatient } from "../../store/actions/patientAction";

export default function PatientAccountDashborad() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const OnClick = () => {
    setOpen(true);
    dispatch(
      setAdminSelectedPatient({
        email: "",
        firstName: "",
        lastName: "",
        mobileNumber: "",
        password: "",
        dateofBath: "",
        userName: "",
      })
    );
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AdminTopNav image={PatientPic} userType="Patient Details" />
      <SearchBarWithButton OnClick={OnClick} />
      <AdminPatientTable />
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="xl"
        PaperProps={{
          style: {
            width: "55%",
            height: "70%",
          },
        }}
      >
        <PatientAddNewDialogBox handleClose={handleClose} />
      </Dialog>
    </div>
  );
}

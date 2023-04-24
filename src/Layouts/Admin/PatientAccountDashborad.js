import React from "react";
import SearchBarWithButton from "../common/SearchBarWithButton";
import AdminPatientTable from "./AdminPatientTable";
import PatientPic from "../../assets/images/patientpic.png";
import AdminTopNav from "./AdminTopNav";
import { Dialog } from "@mui/material";
import PatientAddNewDialogBox from "./PatientAddNewDialogBox";

export default function PatientAccountDashborad() {

  const [open, setOpen] = React.useState(false);

  const OnClick = () => {
    setOpen(true);
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
       <PatientAddNewDialogBox />
      </Dialog>
    </div>
  );
}

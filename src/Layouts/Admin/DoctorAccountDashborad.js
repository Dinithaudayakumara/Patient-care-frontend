import React from "react";
import AdminTopNav from "./AdminTopNav";
import DoctorPic from "../../assets/images/doctorpic.png";
import SearchBarWithButton from "../common/SearchBarWithButton";
import AdminDoctorTable from "./AdminDoctorTable";
import { Dialog } from "@mui/material";
import DoctorAddNewDialogBox from "./DoctorAddNewDialogBox";

export default function DoctorAccountDashborad() {

  const [open, setOpen] = React.useState(false);

  const OnClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

      <AdminTopNav image={DoctorPic} userType="Doctor Details" />
      <SearchBarWithButton OnClick={OnClick} />
      <AdminDoctorTable />

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
       <DoctorAddNewDialogBox />
      </Dialog>

    </div>
  );
}

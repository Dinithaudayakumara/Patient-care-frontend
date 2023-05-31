import React from "react";
import AdminTopNav from "./AdminTopNav";
import DoctorPic from "../../assets/images/doctorpic.png";
import SearchBarWithButton from "../common/SearchBarWithButton";
import AdminDoctorTable from "./AdminDoctorTable";
import { Dialog } from "@mui/material";
import DoctorAddNewDialogBox from "./DoctorAddNewDialogBox";
import { useDispatch } from "react-redux";
import { setAdminSelectedDoctor } from "../../store/actions/doctorAction";

export default function DoctorAccountDashborad() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const OnClick = () => {
    setOpen(true);
    dispatch(
      setAdminSelectedDoctor({
        email: "",
        firstName: "",
        lastName: "",
        mobileNumber: "",
        password: "",
        specialty: "",
        userName: "",
      })
    );
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
        <DoctorAddNewDialogBox handleClose={handleClose} />
      </Dialog>
    </div>
  );
}

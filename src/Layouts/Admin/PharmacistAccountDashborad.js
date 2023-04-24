import React from "react";
import AdminTopNav from "./AdminTopNav";
import Pharmacistpic from "../../assets/images/pharmacistpic.png";
import SearchBarWithButton from "../common/SearchBarWithButton";
import AdminPharmacistTable from "./AdminPharmacistTable";
import { Dialog } from "@mui/material";
import PharmacistAddNewDialogBox from "./PharmacistAddNewDialogBox";

export default function PharmacistAccountDashborad() {
  const [open, setOpen] = React.useState(false);

  const OnClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AdminTopNav image={Pharmacistpic} userType="Pharmacist Details" />
      <SearchBarWithButton OnClick={OnClick} />
      <AdminPharmacistTable />

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
       <PharmacistAddNewDialogBox />
      </Dialog>
    </div>
  );
}

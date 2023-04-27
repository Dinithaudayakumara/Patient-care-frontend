import React from "react";
import SearchBarWithButton from "../common/SearchBarWithButton";
import { Dialog } from "@mui/material";
import AddNewPatient from "./AddNewPatient";

export default function PatientManage() {
  const [open, setOpen] = React.useState(false);

  const OnClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <SearchBarWithButton OnClick={OnClick} />
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
        <AddNewPatient />
      </Dialog>
    </div>
  );
}

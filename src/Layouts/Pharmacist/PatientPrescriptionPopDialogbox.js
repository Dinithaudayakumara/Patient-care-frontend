import { Typography } from "@mui/material";
import React from "react";

export default function PatientPrescriptionPopDialogbox() {
  return (
    <div>
      <Typography
        align="center"
        sx={{ fontSize: 29, paddingTop: 1, color: "#017CF1" }}
      >
        <b>Prescription List</b>
      </Typography>
      <Typography align="center" sx={{ fontSize: 13, paddingTop: 1 }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an un known printer took a galley of type and
        scrambled it to make a type specimen book.
      </Typography>
      <Typography></Typography>
    </div>
  );
}

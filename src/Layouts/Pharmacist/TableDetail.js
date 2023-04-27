import {
  Dialog,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import PatientPrescriptionPopDialogbox from "./PatientPrescriptionPopDialogbox";

const rows = [
  {
    id: "#KFH123",
    name: "Olive G.",
    number: "075457545",
    date: "12/12/2022",
    doctorname: "Dr.Devid",
  },
  {
    id: "#KFH123",
    name: "Olive G.",
    number: "075457545",
    date: "12/12/2022",
    doctorname: "Dr.Devid",
  },
  {
    id: "#KFH123",
    name: "Olive G.",
    number: "075457545",
    date: "12/12/2022",
    doctorname: "Dr.Devid",
  },
  {
    id: "#KFH123",
    name: "Olive G.",
    number: "075457545",
    date: "12/12/2022",
    doctorname: "Dr.Devid",
  },
];

export default function BasicTable() {
  const [selectedRow, setSelectedRow] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div style={{ paddingLeft: 50 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>T.P</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Checked Doctor Name</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((val, key) => (
            <TableRow
              key={key}
              hover
              onClick={() => {
                setSelectedRow(val);
                handleClickOpen();
              }}
              style={
                selectedRow === val
                  ? { backgroundColor: "#D7EBFF", color: "white" }
                  : {}
              }
            >
              <TableCell>{val.id}</TableCell>
              <TableCell>{val.name}</TableCell>
              <TableCell>{val.number}</TableCell>
              <TableCell>{val.date}</TableCell>
              <TableCell>{val.doctorname}</TableCell>
              <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="xl"
        PaperProps={{
          style: {
            width: "60%",
            height: "60%",
          },
        }}
      >
        <PatientPrescriptionPopDialogbox />
      </Dialog>
    </div>
  );
}

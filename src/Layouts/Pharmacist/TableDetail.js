import {
  Dialog,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import PatientPrescriptionPopDialogbox from "./PatientPrescriptionPopDialogbox";
import { useDispatch, useSelector } from "react-redux";
import { getAllPatients } from "../../store/actions/patientAction";

export default function BasicTable() {
  const dispatch = useDispatch();
  const [selectedRow, setSelectedRow] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (allPatientList.length === 0) {
      dispatch(getAllPatients());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { allPatientList } = useSelector((store) => store.patientReducer);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleOnClick = () => {
    handleClose();
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
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allPatientList.map((val, key) => (
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
              <TableCell>{val._id}</TableCell>
              <TableCell>{val.firstName + " " + val.lastName}</TableCell>
              <TableCell>{val.mobileNumber}</TableCell>
              <TableCell>{val.dateofBath}</TableCell>
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
        <PatientPrescriptionPopDialogbox handleOnClick={handleOnClick} />
      </Dialog>
    </div>
  );
}

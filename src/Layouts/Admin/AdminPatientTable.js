import {
  Dialog,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useDispatch, useSelector } from "react-redux";
import AdminPatientTableEdit from "../Adminpatientpage/AdminPatientTableEdit";

import {
  clearPatientUpdateStatus,
  getAllPatients,
  setAdminSelectedPatient,
} from "../../store/actions/patientAction";

export default function BasicTable() {
  const dispatch = useDispatch();
  const { allPatientList, patientUpdateStatus } = useSelector(
    (store) => store.patientReducer
  );

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    dispatch(clearPatientUpdateStatus());
  };

  const handleClose = () => {
    setOpen(false);
  };

  const setValue = (patient) => {
    dispatch(setAdminSelectedPatient(patient));
  };

  useEffect(() => {
    if (patientUpdateStatus === "completed") {
      dispatch(getAllPatients());
    }
  }, [dispatch, patientUpdateStatus]);

  return (
    <div style={{ paddingLeft: 30}}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>T.P</TableCell>
            <TableCell>Date</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allPatientList.map((val, key) => (
            <TableRow key={key} hover>
              <TableCell>{val._id}</TableCell>
              <TableCell>{val.firstName + " " + val.lastName}</TableCell>
              <TableCell>{val.mobileNumber}</TableCell>
              <TableCell>{val.dateofBath}</TableCell>
              <TableCell>
                <Grid container justifyContent="center">
                  <Grid item>
                    <IconButton
                      color="secondary"
                      onClick={() => {
                        handleClickOpen();
                        setValue(val);
                      }}
                    >
                      <EditOutlinedIcon style={{ color: "silver" }} />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton
                      color="primary"
                      onClick={() => handleClickOpen("delete")}
                    >
                      <DeleteIcon style={{ color: "red" }} />
                    </IconButton>
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="xl"
        PaperProps={{
          style: {
            width: "55%",
            height: "65%",
            maxHeight: "none",
          },
        }}
      >
        <AdminPatientTableEdit handleClose={handleClose} />
      </Dialog>
    </div>
  );
}

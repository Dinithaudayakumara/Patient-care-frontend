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
import AdminDoctorTableEdit from "../Admindoctorpage/AdminDoctorTableEdit";

import {
  clearDoctorUpdateStatus,
  getAllDoctors,
  setAdminSelectedDoctor,
} from "../../store/actions/doctorAction";

export default function BasicTable() {
  const dispatch = useDispatch();
  const { allDoctorList, doctorUpdateStatus } = useSelector(
    (store) => store.doctorReducer
  );

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    dispatch(clearDoctorUpdateStatus());
  };

  const handleClose = () => {
    setOpen(false);
  };

  const setValue = (doctor) => {
    dispatch(setAdminSelectedDoctor(doctor));
  };

  useEffect(() => {
    if (doctorUpdateStatus === "completed") {
      dispatch(getAllDoctors());
    }
  }, [dispatch, doctorUpdateStatus]);

  return (
    <div style={{ paddingLeft: 10, paddingRight: 10 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>T.P</TableCell>
            <TableCell>Type of Doctor</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allDoctorList.map((val, key) => (
            <TableRow key={key} hover>
              <TableCell>{val._id}</TableCell>
              <TableCell>{val.firstName}</TableCell>
              <TableCell>{val.mobileNumber}</TableCell>
              <TableCell>{val.specialty}</TableCell>
              <TableCell>
                <Grid container justifyContent="flex-start" spacing={2}>
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
                    <IconButton color="primary">
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
        <AdminDoctorTableEdit handleClose={handleClose} />
      </Dialog>
    </div>
  );
}

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
import AdminDoctorTableDelete from "../Admindoctorpage/AdminDoctorTableDelete";

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

  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

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
                        setOpenEdit(true);
                        setValue(val);
                        dispatch(clearDoctorUpdateStatus());
                      }}
                    >
                      <EditOutlinedIcon style={{ color: "silver" }} />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton
                      color="primary"
                      onClick={() => {
                        setOpenDelete(true);
                      }}
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
        open={openEdit}
        keepMounted
        onClose={() => {
          setOpenEdit(false);
        }}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="xl"
        PaperProps={{
          style: {
            width: "55%",
            height: "65%",
          },
        }}
      >
        {openEdit && (
          <AdminDoctorTableEdit isOpen={openEdit} setIsOpen={setOpenEdit} />
        )}
      </Dialog>

      <Dialog
        open={openDelete}
        keepMounted
        onClose={() => {
          setOpenDelete(false);
        }}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="xl"
        PaperProps={{
          style: {
            width: "35%",
            height: "45%",
          },
        }}
      >
        <AdminDoctorTableDelete isOpen={openDelete} setIsOpen={setOpenDelete} />
      </Dialog>
    </div>
  );
}

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
import AdminPatientTableDelete from "../Adminpatientpage/AdminPatientTableDelete";

import {
  clearPatientUpdateStatus,
  getAllPatients,
  setAdminSelectedPatient,
  updatePatient,
} from "../../store/actions/patientAction";

export default function BasicTable() {
  const dispatch = useDispatch();
  const { allPatientList, patientUpdateStatus, adminSelectedPatient } =
    useSelector((store) => store.patientReducer);

  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const setValue = (patient) => {
    dispatch(setAdminSelectedPatient(patient));
  };

  const handleUpdate = () => {
    dispatch(updatePatient(adminSelectedPatient));
    setOpenEdit(false);
  };

  useEffect(() => {
    if (patientUpdateStatus === "completed") {
      dispatch(getAllPatients());
    }
  }, [dispatch, patientUpdateStatus]);

  return (
    <div style={{ paddingLeft: 30 }}>
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
                        setOpenEdit(true);
                        setValue(val);
                        dispatch(clearPatientUpdateStatus());
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
          <AdminPatientTableEdit
            isOpen={openEdit}
            setIsOpen={setOpenEdit}
            handleUpdate={handleUpdate}
          />
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
        <AdminPatientTableDelete
          isOpen={openDelete}
          setIsOpen={setOpenDelete}
        />
      </Dialog>
    </div>
  );
}

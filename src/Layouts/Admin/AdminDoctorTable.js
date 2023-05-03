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
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useSelector } from "react-redux";
import AdminDoctorTableDelete from "../Admindoctorpage/AdminDoctorTableDelete";
import AdminDoctorTableEdit from "../Admindoctorpage/AdminDoctorTableEdit";

export default function BasicTable() {
  const { allDoctorList } = useSelector((store) => store.doctorReducer);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleClickOpen = (type) => {
    if (type === "edit") {
      setIsEditOpen(true);
    } else if (type === "delete") {
      setIsDeleteOpen(true);
    }
    setIsDialogOpen(true);
  };

  const handleClose = () => {
    setIsDialogOpen(false);
    setIsEditOpen(false);
    setIsDeleteOpen(false);
  };

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
              <TableCell>{val.firstName + " " + val.lastName}</TableCell>
              <TableCell>{val.mobileNumber}</TableCell>
              <TableCell>{val.specialty}</TableCell>
              <TableCell>
                <Grid container justifyContent="flex-start" spacing={2}>
                  <Grid item>
                    <IconButton
                      color="secondary"
                      onClick={() => handleClickOpen("edit")}
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
        open={isDialogOpen}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="xl"
        PaperProps={{
          style: {
            width: isEditOpen && isDeleteOpen ? "70%" : "50%",
            height: isEditOpen && isDeleteOpen ? "55%" : "50%",
            maxHeight: "none",
          },
        }}
      >
        {isEditOpen && (
          <AdminDoctorTableEdit isOpen={isEditOpen} setIsOpen={setIsEditOpen} />
        )}
        {isDeleteOpen && (
          <AdminDoctorTableDelete
            isOpen={isDeleteOpen}
            setIsOpen={setIsDeleteOpen}
          />
        )}
      </Dialog>
    </div>
  );
}

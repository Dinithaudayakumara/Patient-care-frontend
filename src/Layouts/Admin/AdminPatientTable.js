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
import AdminPatientTableEdit from "../Adminpatientpage/AdminPatientTableEdit";
import AdminPatientTableDelete from "../Adminpatientpage/AdminPatientTableDelete";

export default function BasicTable() {
  const { allPatientList } = useSelector((store) => store.patientReducer);
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
    <div>
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
          <AdminPatientTableEdit
            isOpen={isEditOpen}
            setIsOpen={setIsEditOpen}
          />
        )}
        {isDeleteOpen && (
          <AdminPatientTableDelete
            isOpen={isDeleteOpen}
            setIsOpen={setIsDeleteOpen}
          />
        )}
      </Dialog>
    </div>
  );
}

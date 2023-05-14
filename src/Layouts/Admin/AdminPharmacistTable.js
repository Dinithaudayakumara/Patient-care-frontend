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
import AdminPharmacistTableEdit from "../Adminpharmacistpage/AdminPharmacistTableEdit";
import AdminPharmacistTableDelete from "../Admindoctorpage/AdminDoctorTableDelete";

import {
  clearPharmacistUpdateStatus,
  getAllPharmacists,
  setAdminSelectedPharmacist,
  updatePharmacist,
} from "../../store/actions/pharmacistAction";

export default function BasicTable() {
  const dispatch = useDispatch();
  const { allPharmacistList, pharmacistUpdateStatus, adminSelectedPharmacist } =
    useSelector((store) => store.pharmacistReducer);

  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const setValue = (pharmacist) => {
    dispatch(setAdminSelectedPharmacist(pharmacist));
  };

  const handleUpdate = () => {
    dispatch(updatePharmacist(adminSelectedPharmacist));
    setOpenEdit(false);
  };

  useEffect(() => {
    if (pharmacistUpdateStatus === "completed") {
      dispatch(getAllPharmacists());
    }
  }, [dispatch, pharmacistUpdateStatus]);

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>T.P</TableCell>
            <TableCell>Location</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allPharmacistList.map((val, key) => (
            <TableRow key={key} hover>
              <TableCell>{val._id}</TableCell>
              <TableCell>{val.firstName + " " + val.lastName}</TableCell>
              <TableCell>{val.mobileNumber}</TableCell>
              <TableCell>{val.location}</TableCell>
              <TableCell>
                <Grid container justifyContent="center">
                  <Grid item>
                    <IconButton
                      color="secondary"
                      onClick={() => {
                        setOpenEdit(true);
                        setValue(val);
                        dispatch(clearPharmacistUpdateStatus());
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
          <AdminPharmacistTableEdit
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
        <AdminPharmacistTableDelete
          isOpen={openDelete}
          setIsOpen={setOpenDelete}
        />
      </Dialog>
    </div>
  );
}

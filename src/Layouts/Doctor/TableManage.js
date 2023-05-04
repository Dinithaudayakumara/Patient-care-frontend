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
import React, { useState, useEffect } from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { useDispatch, useSelector } from "react-redux";
import { getAllPatients } from "../../store/actions/patientAction";
// import EditPatientPopDialogbox from "./EditPatientPopDialogbox";l
import PatientFeedbackPopDialogbox from "./PatientFeedbackPopDialogbox";

export default function BasicTable() {
  const dispatch = useDispatch();
  const [selectedRow, setSelectedRow] = React.useState(null);
  const [openEdit, setOpenEdit] = useState(false);

  useEffect(() => {
    if (allPatientList.length === 0) {
      dispatch(getAllPatients());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { allPatientList } = useSelector((store) => store.patientReducer);

  const handleClickOpenEdit = () => {
    setOpenEdit(true);
  };

  return (
    <div style={{ paddingLeft: 50 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">Appointment ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>T.P</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allPatientList.map((val, key) => (
            <TableRow
              key={key}
              hover
              onClick={() => {
                setSelectedRow(val);
                handleClickOpenEdit();
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
              <TableCell>{val.time}</TableCell>
              <TableCell>
                <Grid container justifyContent="center" spacing={2}>
                  <Grid item>
                    <IconButton color="secondary">
                      <PictureAsPdfIcon style={{ color: "red" }} />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton
                      color="secondary"
                      onClick={() => {
                        setOpenEdit(true);
                      }}
                    >
                      <EditOutlinedIcon style={{ color: "silver" }} />
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
        onClose={() => setOpenEdit(false)}
        maxWidth="xl"
        PaperProps={{
          style: {
            width: "55%",
            height: "75%",
          },
        }}
      >
        <PatientFeedbackPopDialogbox isOpen={openEdit} setIsOpen={setOpenEdit} />
      </Dialog>

      {/* <PatientFeedbackPopDialogbox /> */}
    </div>
  );
}

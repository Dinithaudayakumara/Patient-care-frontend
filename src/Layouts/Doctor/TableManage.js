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
import EditPatientPopDialogbox from "./EditPatientPopDialogbox";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import PatientFeedbackPopDialogbox from "./PatientFeedbackPopDialogbox";

export default function BasicTable() {
  const dispatch = useDispatch();
  const [selectedRow, setSelectedRow] = React.useState(null);

  const [openEdit, setOpenEdit] = useState(false);
  const [openFeedback, setOpenFeedback] = useState(false);

  useEffect(() => {
    if (allPatientList.length === 0) {
      dispatch(getAllPatients());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { allPatientList } = useSelector((store) => store.patientReducer);

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
                  <Grid item>
                    <IconButton
                      color="secondary"
                      onClick={() => {
                        setOpenFeedback(true);
                      }}
                    >
                      <RateReviewOutlinedIcon style={{ color: "black" }} />
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
        onClose={() => {
          setOpenEdit(false);
        }}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="xl"
        PaperProps={{
          style: {
            width: "55%",
            height: "60%",
          },
        }}
      >
        <EditPatientPopDialogbox
          isOpen={openEdit}
          setIsOpen={setOpenEdit}
          // handleUpdate={handleUpdate}
        />
      </Dialog>

      <Dialog
        open={openFeedback}
        onClose={() => {
          setOpenFeedback(false);
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
        <PatientFeedbackPopDialogbox
          isOpen={openFeedback}
          setIsOpen={setOpenFeedback}
        />
      </Dialog>
    </div>
  );
}

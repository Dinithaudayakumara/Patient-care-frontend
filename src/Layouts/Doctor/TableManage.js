import {
  Dialog,
  DialogTitle,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

const rows = [
  {
    appointmentid: "#KFH123",
    name: "Olive G.",
    number: "075457545",
    date: "12/12/2022",
    time: "09.30AM",
  },
  {
    appointmentid: "#KFH123",
    name: "Olive G.",
    number: "075457545",
    date: "12/12/2022",
    time: "09.30AM",
  },
  {
    appointmentid: "#KFH123",
    name: "Olive G.",
    number: "075457545",
    date: "12/12/2022",
    time: "09.30AM",
  },
  {
    appointmentid: "#KFH123",
    name: "Olive G.",
    number: "075457545",
    date: "12/12/2022",
    time: "09.30AM",
  },
];

export default function BasicTable() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
          {rows.map((row, key) => (
            <TableRow key={key} hover>
              <TableCell>{row.appointmentid}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.number}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.time}</TableCell>
              <TableCell>
                <Grid container justifyContent="center" spacing={2}>
                  <Grid item>
                    <IconButton color="secondary" onClick={handleClickOpen}>
                      <PictureAsPdfIcon style={{ color: "red" }} />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton color="secondary" onClick={handleClickOpen}>
                      <EditOutlinedIcon style={{ color: "silver" }} />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton color="primary" onClick={handleClickOpen}>
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
      >
        <DialogTitle></DialogTitle>
      </Dialog>
    </div>
  );
}

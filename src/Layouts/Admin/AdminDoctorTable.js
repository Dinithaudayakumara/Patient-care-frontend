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

const rows = [
  { id: "#KFH123", name: "Olive G.", number:"075457545", typeofdoctor:"Family medicine"},
  { id: "#KFH123", name: "Olive G.", number:"075457545", typeofdoctor:"Internal Medicine"},
  { id: "#KFH123", name: "Olive G.", number:"075457545", typeofdoctor:"Pediatrician"},
  { id: "#KFH123", name: "Olive G.", number:"075457545", typeofdoctor:"Cardiologist"},

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
    <div style={{paddingLeft: 10,paddingRight:10}}>
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
          {rows.map((row, key) => (
            <TableRow key={key} hover>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.number}</TableCell>
              <TableCell>{row.typeofdoctor}</TableCell>
              <TableCell>
                
                
                <Grid container justifyContent="flex-start" spacing={2}>
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
                </Grid></TableCell>
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
        <DialogTitle>
          
        </DialogTitle>
      </Dialog>
    </div>
  );
}

import {
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
  { id: "#KFH123", name: "Olive G.", number:"075457545", date:"12/12/2022", doctorname:"Dr.Devid"},
  { id: "#KFH123", name: "Olive G.", number:"075457545", date:"12/12/2022", doctorname:"Dr.Devid"},
  { id: "#KFH123", name: "Olive G.", number:"075457545", date:"12/12/2022", doctorname:"Dr.Devid"},
  { id: "#KFH123", name: "Olive G.", number:"075457545", date:"12/12/2022", doctorname:"Dr.Devid"},

];

export default function BasicTable() {
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>T.P</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Checked Doctor Name</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, key) => (
            <TableRow key={key} hover>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.number}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.doctorname}</TableCell>
              <TableCell>
                
                
                <Grid container justifyContent="center">
                  <Grid item>
                    <IconButton color="secondary">
                      <EditOutlinedIcon style={{ color: "silver" }} />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton color="primary">
                      <DeleteIcon style={{ color: "red" }} />
                    </IconButton>
                  </Grid>
                </Grid></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

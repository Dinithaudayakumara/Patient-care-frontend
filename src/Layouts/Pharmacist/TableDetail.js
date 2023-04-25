import {

  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";


const rows = [
  { id: "#KFH123", name: "Olive G.", number:"075457545", date:"12/12/2022", doctorname:"Dr.Devid"},
  { id: "#KFH123", name: "Olive G.", number:"075457545", date:"12/12/2022", doctorname:"Dr.Devid"},
  { id: "#KFH123", name: "Olive G.", number:"075457545", date:"12/12/2022", doctorname:"Dr.Devid"},
  { id: "#KFH123", name: "Olive G.", number:"075457545", date:"12/12/2022", doctorname:"Dr.Devid"},

];

export default function BasicTable() {
  return (
    <div style={{paddingLeft:50}}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">ID</TableCell>
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
                
                
             </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}


import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(id, name, number, doctorname, data) {
  return { id, name, number, doctorname, data };
}

const rows = [
  createData("#KFH123", "Olive.G.S", "+9475457545", "12/12/2022", "Dr.Devid"),
  createData("#KFH123", "Olive.G", "075457545", "12/12/2022", "Dr.Devid"),
  createData("#KFH123", "Olive.G", "075457545", "12/12/2022", "Dr.Devid"),
  createData("#KFH123", "Olive.G", "075457545", "12/12/2022", "Dr.Devid"),
  createData("#KFH123", "Olive.G", "075457545", "12/12/2022", "Dr.Devid"),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">T.P</TableCell>
            <TableCell align="center">Last Date</TableCell>
            <TableCell align="center">Checked Doctor Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center"> {row.id}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.number}</TableCell>
              <TableCell align="center">{row.doctorname}</TableCell>
              <TableCell align="center">{row.data}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

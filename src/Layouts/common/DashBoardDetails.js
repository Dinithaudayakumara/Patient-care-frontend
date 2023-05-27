import { Typography } from "@mui/material";
import React from "react";
import UserId from "../../components/common/Details/UserId";
import UserName from "../../components/common/Details/UserName";

export default function DashBoardDetails() {
  return (
    <div style={{ textAlign: "left" }}>
      <Typography variant="h5">
        <b>Dashboard</b>
      </Typography>
      <UserId />
      <UserName />
    </div>
  );
}

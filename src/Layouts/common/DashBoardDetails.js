import { Typography } from "@mui/material";
import React from "react";
import UserId from "../../components/common/Details/UserId";
import UserName from "../../components/common/Details/UserName";
import UserType from "../../components/common/Details/UserType";

export default function DashBoardDetails() {
  return (
    <div style={{ textAlign: "left" }}>
      <Typography>Dashboard</Typography>
      <UserId />
      <UserName />
      <UserType />
    </div>
  );
}

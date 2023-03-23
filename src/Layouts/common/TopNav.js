import React from "react";
import DashBoardLogo from "../../components/common/DashBoardLogo";
import DashBoardDetails from "./DashBoardDetails";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import LogoutButton from "../../components/common/Details/LogoutButton";
import { Divider } from "@mui/material";

export default function TopNav() {
  return (
    <div>
      <Grid2 container>
        <Grid2 item xs={1} pt={2}>
          <DashBoardLogo />
        </Grid2>
        <Grid2 container xs={11} justifyContent="space-between" pt={3}>
          <Grid2 item pl={1}>
            <DashBoardDetails />
          </Grid2>
          <Grid2 item pr={5}>
            <LogoutButton />
          </Grid2>
        </Grid2>
      </Grid2>
      <div style={{ paddingTop: 20 }}>
        <Divider />
      </div>
    </div>
  );
}

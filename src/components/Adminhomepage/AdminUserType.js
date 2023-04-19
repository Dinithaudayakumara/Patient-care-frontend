import { Avatar, Typography } from "@mui/material";
import React from "react";
//import { NavLink } from "react-router-dom";

export default function AdminUserType({ type, image, info }) {
  return (
    // <NavLink style={{ textDecoration: "none" }} to={`/${info.route}`}>
    <div
      style={{
        backgroundColor: "#FFFFFF",
        width: 180,
        height: 180,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "20%", // Add border-radius property to curve the edges
        border: "2px solid black", // Add border property to set border color and width
      }}
      onClick={console.log("Hi")}
    >
      <Avatar alt="Remy Sharp" src={image} sx={{ width: 80, height: 80 }} />
      <Typography>{type}</Typography>
    </div>
    // </NavLink>
  );
}

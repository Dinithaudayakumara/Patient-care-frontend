import React from "react";
import AdminBackground from "../../assets/images/Adminbackgroundpic.jpeg";
import Logo from "../../components/common/Logo";
import { Typography } from "@mui/material";

export default function Adminbackgroundpic() {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${AdminBackground})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          opacity: 0.2,
        }}
      ></div>
      <Logo />
      <Typography>
        Patient <span>Care</span>
      </Typography>
      
    </div>
  );
}

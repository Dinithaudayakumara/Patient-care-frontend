import { Typography } from "@mui/material";
import React from "react";
import LoginTextBox from "../../components/Login/LoginTextBox";
import LoginButton from "../../components/Login/LoginButton";
import SignUpLabel from "../../components/SignUpLabel";

export default function LoginSection() {
  return (
    <div>
      <div style={{ paddingTop: 10, paddingBottom: 10 }}>
        <Typography>Patient Care</Typography>
      </div>
      <Typography>Log in</Typography>

      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          width: "30%",
          textAlign: "left",
        }}
      >
        <LoginTextBox
          info={{ name: "User Name", placeholder: "Enter your user name" }}
        />
        <div style={{ paddingTop: 10 }}>
          <LoginTextBox
            info={{ name: "Password", placeholder: "Enter your user password" }}
          />
        </div>
      </div>
      <div
        style={{
          paddingTop: 40,
          marginLeft: "auto",
          marginRight: "auto",
          width: "12%",
          paddingBottom: 20,
        }}
      >
        <LoginButton />
      </div>

      <SignUpLabel />
    </div>
  );
}

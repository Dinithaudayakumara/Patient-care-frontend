import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import LoginTextBox from "../../components/Login/LoginTextBox";
import LoginButton from "../../components/Login/LoginButton";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../store/actions/signInAction";
import { useNavigate } from "react-router-dom";

export default function LoginSection() {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  console.log(email, password);

  const handleOnClick = () => {
    dispatch(logIn(email, password));
  };

  const navigate = useNavigate();

  const { loginErrorMessage, userLoginLoadingStatus, user } = useSelector(
    (store) => store.signInReducer
  );

  useEffect(() => {
    console.log(userLoginLoadingStatus);
    console.log(loginErrorMessage);
    if (userLoginLoadingStatus === "sucess") {
      console.log(user);
      if (user.employeeType === "doctor") {
        navigate("/doctor");
      } else if (user.employeeType === "pharmacist") {
        navigate("/pharmacists");
      } else if (user.employeeType === "admin") {
        navigate("/admin");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userLoginLoadingStatus]);

  return (
    <div>
      <div style={{ paddingTop: 10, paddingBottom: 10 }}>
        <Typography fontSize={32}>
          <b>Patient</b> <span style={{ color: "red" }}>Care</span>
        </Typography>
      </div>

      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          width: "30%",
          textAlign: "left",
        }}
      >
        <LoginTextBox
          label="Email"
          placeholder="Enter your email address"
          handleChange={setEmail}
        />
        <div style={{ paddingTop: 10 }}>
          <LoginTextBox
            label="Password"
            placeholder="Enter your passsword"
            handleChange={setPassword}
          />
        </div>
      </div>
      {userLoginLoadingStatus === "fail" ? (
        <Typography pt={2} color="red" fontSize={14}>
          Email or password incorrect
        </Typography>
      ) : (
        ""
      )}

      <div
        style={{
          paddingTop: 30,
          marginLeft: "auto",
          marginRight: "auto",
          width: "12%",
          paddingBottom: 20,
        }}
      >
        <LoginButton handleOnClick={handleOnClick} />
      </div>
    </div>
  );
}

import React from "react";
import Logo from "../components/common/Logo";
import LoginSection from "../Layouts/Login/LoginSection";

export default function SignInPage() {
  return (
    <div>
      <div style={{ paddingTop: 50 }}>
        <Logo />
      </div>
      <LoginSection />
    </div>
  );
}

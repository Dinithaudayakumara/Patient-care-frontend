import React from "react";
import TopNav from "../Layouts/common/TopNav";
import UserManage from "../Layouts/Admin/UserManage";

export default function AdminDashboard() {
  return (
    <div>
      <TopNav />
      <UserManage />
    </div>
  );
}

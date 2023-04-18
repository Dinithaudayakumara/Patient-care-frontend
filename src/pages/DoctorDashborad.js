import React from "react";
import TopNav from "../Layouts/common/TopNav";
import PateintManage from "../Layouts/Doctor/PateintManage";
import TableManage from "../Layouts/Doctor/TableManage";

export default function DoctorDashborad() {
  return (
    <div>
      <TopNav />
      <PateintManage />
      <TableManage />
    </div>
  );
}

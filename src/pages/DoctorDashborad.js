import React from "react";
import TopNav from "../Layouts/common/TopNav";
import PatientManage from "../Layouts/Doctor/PatientManage";
import TableManage from "../Layouts/Doctor/TableManage";

export default function DoctorDashborad() {
  return (
    <div>
      <TopNav />
      <PatientManage />
      <TableManage />
    </div>
  );
}

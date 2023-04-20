import React from "react";
import AdminTopNav from "./AdminTopNav";
import DoctorPic from "../../assets/images/doctorpic.png";
import SearchBarWithButton from "../common/SearchBarWithButton";
import AdminDoctorTable from "./AdminDoctorTable";

export default function DoctorAccountDashborad() {
  return (
    <div>
      <AdminTopNav image={DoctorPic} />
      <SearchBarWithButton />
      <AdminDoctorTable />
    </div>
  );
}

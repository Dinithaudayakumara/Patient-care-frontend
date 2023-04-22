import React from "react";
import SearchBarWithButton from "../common/SearchBarWithButton";
import AdminPatientTable from "./AdminPatientTable";
import PatientPic from "../../assets/images/patientpic.png";
import AdminTopNav from "./AdminTopNav";

export default function PatientAccountDashborad() {
  return (
    <div>
      <AdminTopNav image={PatientPic} userType="Patient Details" />
      <SearchBarWithButton />
      <AdminPatientTable />
    </div>
  );
}

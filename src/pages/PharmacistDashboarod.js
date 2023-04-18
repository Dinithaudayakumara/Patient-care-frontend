import React from "react";
import TopNav from "../Layouts/common/TopNav";
import PatientInformation from "../Layouts/Pharmacist/PatientInformation";
import TableDetail from "../Layouts/Pharmacist/TableDetail";

export default function PharmacistDashboarod() {
  return (
    <div>
      <TopNav />
      <PatientInformation />
      <TableDetail />

    </div>
  );
}

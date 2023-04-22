import React from "react";
import AdminTopNav from "./AdminTopNav";
import Pharmacistpic from "../../assets/images/pharmacistpic.png";
import SearchBarWithButton from "../common/SearchBarWithButton";
import AdminPharmacistTable from "./AdminPharmacistTable";

export default function PharmacistAccountDashborad() {
  return (
    <div>
      <AdminTopNav image={Pharmacistpic} userType="Pharmacist Details" />
      <SearchBarWithButton />
      <AdminPharmacistTable />
    </div>
  );
}

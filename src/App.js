import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SignInPage from "./pages/SignInPage";
import AdminDashboard from "./pages/AdminDashboard";
import NoPage from "./pages/NoPage";
import PharmacistDashboarod from "./pages/PharmacistDashboarod";
import DoctorDashborad from "./pages/DoctorDashborad";
import DoctorAccountDashborad from "./Layouts/Admin/DoctorAccountDashborad";
import PatientAccountDashborad from "./Layouts/Admin/PatientAccountDashborad";
import PharmacistAccountDashborad from "./Layouts/Admin/PharmacistAccountDashborad";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<SignInPage />} />
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="doctor" element={<DoctorDashborad />} />
          <Route path="pharmacists" element={<PharmacistDashboarod />} />
          <Route path="admin/doctor" element={<DoctorAccountDashborad />} />
          <Route path="admin/patient" element={<PatientAccountDashborad />} />
          <Route
            path="admin/pharmacist"
            element={<PharmacistAccountDashborad />}
          />

          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

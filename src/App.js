import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SignInPage from "./pages/SignInPage";
import AdminDashboard from "./pages/AdminDashboard";
import NoPage from "./pages/NoPage";
import PharmacistDashboarod from "./pages/PharmacistDashboarod";
import DoctorDashborad from "./pages/DoctorDashborad";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<SignInPage />} />
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="doctor" element={<DoctorDashborad />} />
          <Route path="paharmacist" element={<PharmacistDashboarod />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

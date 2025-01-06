import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import LoginPage from "../pages/LoginPage";
import Dashboard from "../layouts/DashBoard";
import Calendar from "../pages/Calendar";
import VitalSigns from "../pages/VitalSigns";
// import Modules from "../pages/Modules";
// import InterfaceExample from "../pages/InterfaceExample";
import RegisterPage from "../pages/RegisterPage";
import MedicalOffice from "../pages/MedicalOffice";

export default function RoutesComp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="dashboard" element={<Dashboard />} />
        {/* <Route
          path="modules"
          element={<Modules handleModuleClick={() => {}} />}
        /> */}
        <Route path="modules/calendar" element={<Calendar />} />
        <Route path="modules/signs" element={<VitalSigns />} />
        <Route path="modules/consultorio" element={<MedicalOffice />} />
        {/* <Route path="modules/hospital" element={<InterfaceExample />} />
        <Route path="modules/odontologia" element={<InterfaceExample />} />
        <Route path="modules/optic" element={<InterfaceExample />} />
        <Route path="modules/pharmacy" element={<InterfaceExample />} />
        <Route path="modules/inventory" element={<InterfaceExample />} />
        <Route path="modules/example" element={<InterfaceExample />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

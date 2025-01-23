import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import LoginPage from "../pages/LoginPage";
import Dashboard from "../layouts/DashBoard";
import Calendar from "../pages/Calendar";
import VitalSigns from "../pages/VitalSigns";
import Modules from "../pages/Modules";
import InterfaceExample from "../pages/InterfaceExample";
// import RegisterPage from "../pages/RegisterPage";
import MedicalOffice from "../pages/MedicalOffice";
import ROUTES from "../enviroment/variables_routes";
// Formularios en modales a los cuales podra acceder el administrador
import RegisterEmployees from "../components/REGISTER/RegisterEmployees";

export default function RoutesComp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.LOGIN.BASE} element={<LoginPage />} />
        {/* <Route path="register" element={<RegisterPage />} /> */}
        {/*Definicion de ruta padre */}
        <Route path={ROUTES.DASHBOARD.BASE2} element={<Dashboard />}>
          <Route path={ROUTES.MODULES.BASE3} element={<Modules />}></Route>
          <Route path={ROUTES.MODULES.MFCHILD} element={<Calendar />} />
          <Route path={ROUTES.MODULES.MSCHILD} element={<VitalSigns />} />
          <Route path={ROUTES.MODULES.MTCHILD} element={<MedicalOffice />} />
          <Route path={ROUTES.MODULES.M5CHILD} element={<InterfaceExample />} />
        </Route>
        <Route path="/regisempleados" element={<RegisterEmployees />} />

        {/*En caso de que no se encuentre una ruta, esta sera la pagina que se mostrara */}
        <Route path={ROUTES.NOTFOUND.BASE4} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

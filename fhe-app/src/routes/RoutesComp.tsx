import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import LoginPage from "../pages/LoginPage";
import Dashboard from "../layouts/DashBoard";
import Calendar from "../pages/Calendar";
import VitalSigns from "../pages/VitalSigns";
import Modules from "../pages/Modules";
import InterfaceExample from "../pages/InterfaceExample";
import MedicalOffice from "../pages/MedicalOffice";
import ROUTES from "../enviroment/variables_routes";
// componentes de administrador
import ConfEmployeePage from "../pages/admin/ConfEmployeePage";
import ConfSpecialtiesPage from "../pages/admin/ConfSpecialtiesPage";
import ConfOfficePage from "../pages/admin/ConfOfficePage";
import MedicalRecordPage from "../pages/MedicalRecordPage";

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
          <Route path={ROUTES.MODULES.M4CHILD} element={<MedicalRecordPage />} />
          <Route path={ROUTES.MODULES.M5CHILD} element={<InterfaceExample />} />
        </Route>
        {/*Segundo ruta padre para las paginas de administrador */}
        <Route path={ROUTES.ADMIN.BASE4} element={<Dashboard />}>
          <Route path={ROUTES.ADMIN.ADMINPAGEMPLOYEE} element={<ConfEmployeePage />} />
          <Route path={ROUTES.ADMIN.ADMINPAGEOFFICE} element={<ConfOfficePage />} />
          <Route path={ROUTES.ADMIN.ADMINPAGESPECIALTIES} element={<ConfSpecialtiesPage />} />
          <Route path={ROUTES.ADMIN.ADMINPAGEHORMED} element={<InterfaceExample />} />
        </Route>
        {/*Tercera ruta padre para las paginas que comparten roles */}
        <Route path={ROUTES.DASHBOARD.BASE2} element={<Dashboard />}>
          <Route path={ROUTES.SHAREDROUTE.SHAREDCONFPAT} element={<InterfaceExample />} />
          <Route path={ROUTES.SHAREDROUTE.SHAREDBLOCKDOC} element={<InterfaceExample />} />
          <Route path={ROUTES.SHAREDROUTE.SHAREDADDTURN} element={<InterfaceExample />} />
        </Route>
        {/*Cuarta ruta padre para las paginas de doctor */}\
        <Route path={ROUTES.DASHBOARD.BASE2} element={<Dashboard />}>
          <Route path={ROUTES.DOCTOR.DOCTORTURNS} element={<InterfaceExample />} />
          <Route path={ROUTES.DOCTOR.DOCTORSCHEDULE} element={<InterfaceExample />} />
        </Route>
        {/*En caso de que no se encuentre una ruta, esta sera la pagina que se mostrara */}
        <Route path={ROUTES.NOTFOUND.LASTBASE} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

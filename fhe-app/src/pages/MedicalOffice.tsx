import { Paper } from "@mui/material";
// Estilos
import "../CSS/medicaloffice.css";
import DoctorApointmentTable from "../components/MEDICALOFFICE/DoctorAppointMentTable";
import HeaderMedicalOffice from "../components/MEDICALOFFICE/HeaderMedicalOffice";

export default function MedicalOffice() {
  return (
    <>
      <Paper className={"medicalOffice-container"}>
        <HeaderMedicalOffice />
        <div className="mo-main">
          <div className="mo-container-table">
            <DoctorApointmentTable />
          </div>
        </div>
      </Paper>
    </>
  );
}

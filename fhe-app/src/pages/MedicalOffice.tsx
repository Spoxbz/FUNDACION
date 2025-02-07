// Estilos
import "../CSS/medicaloffice.css";
import { useEffect, useState } from "react";
import { Paper } from "@mui/material";
import DoctorApointmentTable from "../components/MEDICALOFFICE/DoctorAppointMentTable";
import HeaderMedicalOffice from "../components/MEDICALOFFICE/HeaderMedicalOffice";
import { useAuthStore } from "../backendTwo/zustand/authStore";
import CalendarMedicalOffice from "../components/MEDICALOFFICE/CalendarMedicalOffice";
import dayjs, { Dayjs } from "dayjs";

export default function MedicalOffice() {
  const { user } = useAuthStore(); // Obtiene el usuario logueado
  const [selectedDoctorId, setSelectedDoctorId] = useState<number | null>(null);
  // Estados para pasar la fecha a CalendarMedicalOffice
  const [slectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());

  useEffect(() => {
    if (user?.rol_id === 4) {
      setSelectedDoctorId(user.employee_id); // Asigna el ID del médico logueado automáticamente
    }
  }, [user]);

  return (
    <>
      <Paper className={"medicalOffice-container"}>
        <div className="mo-cont-header">
          <div style={{ width: "25%" }}>
            <CalendarMedicalOffice onDateChange={setSelectedDate} />
          </div>
          <HeaderMedicalOffice setSelectedDoctorId={setSelectedDoctorId} />
        </div>
        <div className="mo-main">
          <div className="mo-container-table">
            <DoctorApointmentTable selectedDoctorId={selectedDoctorId} selectedDate={slectedDate} />
          </div>
        </div>
      </Paper>
    </>
  );
}

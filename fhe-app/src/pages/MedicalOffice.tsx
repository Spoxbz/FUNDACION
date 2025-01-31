// Estilos
import "../CSS/medicaloffice.css";
import { useEffect, useState } from "react";
import { Paper } from "@mui/material";
import DoctorApointmentTable from "../components/MEDICALOFFICE/DoctorAppointMentTable";
import HeaderMedicalOffice from "../components/MEDICALOFFICE/HeaderMedicalOffice";
import { useAuthStore } from "../backendTwo/zustand/authStore";

export default function MedicalOffice() {
  const { user } = useAuthStore(); // Obtiene el usuario logueado
  const [selectedDoctorId, setSelectedDoctorId] = useState<number | null>(null);

  useEffect(() => {
    if (user?.rol_id === 4) {
      setSelectedDoctorId(user.employee_id); // Asigna el ID del médico logueado automáticamente
    }
  }, [user]);

  return (
    <>
      <Paper className={"medicalOffice-container"}>
        <HeaderMedicalOffice setSelectedDoctorId={setSelectedDoctorId} />
        <div className="mo-main">
          <div className="mo-container-table">
            <DoctorApointmentTable selectedDoctorId={selectedDoctorId} />
          </div>
        </div>
      </Paper>
    </>
  );
}

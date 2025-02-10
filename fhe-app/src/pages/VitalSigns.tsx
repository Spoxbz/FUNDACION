import { Stack, Typography } from "@mui/material";
//componentes
import HeaderDate from "../components/VITALSIGNS/HeaderDate";
import ListTablePacients from "../components/VITALSIGNS/listablepacient/ListTablePacients";
import ChairCard from "../components/VITALSIGNS/chairs/ChairCard";

// Estilos
import "../CSS/vitalsigns.css";
import "../CSS/chaircard.css";
import { useEffect, useState } from "react";
// Datos para las cards de modulos
import { chairData } from "../backendMuckData/datas/datamodulesvitalsigns/datos";
import { Appointment } from "../backendTwo/model/model.appointment";
import { getAppointments } from "../backendTwo/service/appointmentsService";

export default function VitalSigns() {
  // Estado para los pacientes
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const data = await getAppointments();
      setAppointments(data);
    };

    fetchAppointments();
  }, []);

  return (
    <div className="container-vitalsigns">
      <div className="vts-header">
        <Stack sx={{ width: "15%" }}></Stack>
        <div className="vts-title">
          <Typography variant="h4">Signos Vitales</Typography>
        </div>
        <div className="vts-header-date">
          <HeaderDate />
        </div>
      </div>
      <div className="vts-main">
        <div className="vts-main-left">
          {/* Se renderizan multiples cards*/}
          {chairData.map((chair, index) => (
            <ChairCard key={index} id={`chair-${index}`} title={chair.title} />
          ))}
        </div>
        <div className="vts-main-right">
          {/*pacientes reales de supabase */}
          <ListTablePacients
            pacientes={appointments.map((appointment) => ({
              turno: `Turno ${appointment.appointment_id}`,
              hora: appointment.appointment_time,
              consultorio: `Consultorio ${appointment.office_id}`,
              especialidad: `Especialidad ${appointment.doctor_schedule_id}`,
              medico: `Médico ${appointment.employee_id}`,
              paciente: `Paciente ${appointment.patient_id}`,
            }))}
          />
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { Modal, Box, Button, Typography, Paper, TextField } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { fetchAppointments } from "../../../backendTwo/service/appointmentsService";

interface Appointment {
  id: number;
  turno: string;
  hora: string;
  consultorio: string;
  paciente: string;
  atendido: string;
}

export default function ModalDoctorAppointments() {
  const [open, setOpen] = useState(false);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (!open) return; // Solo carga los datos si el modal está abierto

    const fetchData = async () => {
      try {
        const data = await fetchAppointments();
        const formattedData = data.map((appointment) => ({
          id: appointment.appointment_id,
          turno: `Turno ${appointment.appointment_id}`,
          hora: appointment.appointment_time,
          consultorio: `Consultorio ${appointment.office_id}`,
          paciente: `Paciente ${appointment.patient_id}`,
          atendido: appointment.is_doctor_attended ? "Atendido" : "Pendiente",
        }));

        setAppointments(formattedData);
      } catch (error) {
        console.error("Error obteniendo citas:", error);
      }
    };

    fetchData();
  }, [open]);

  // Filtrar los turnos según el término de búsqueda
  const filteredAppointments = appointments.filter(
    (appointment) =>
      appointment.turno.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.hora.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.consultorio.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.paciente.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.atendido.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns: GridColDef[] = [
    { field: "turno", headerName: "Turno", width: 100 },
    { field: "hora", headerName: "Hora", width: 130 },
    { field: "consultorio", headerName: "Consultorio", width: 150 },
    { field: "paciente", headerName: "Paciente", width: 180 },
    { field: "atendido", headerName: "Estado", width: 130 },
  ];

  return (
    <>
      <Button className="mo-header-button" onClick={() => setOpen(true)} sx={{ mb: 2 }}>
        Buscar
      </Button>

      <Modal open={open} onClose={() => setOpen(false)} aria-labelledby="modal-title">
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 800,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
            Todos los Turnos
          </Typography>

          {/* Barra de búsqueda */}
          <TextField
            fullWidth
            label="Buscar"
            placeholder="Buscar Turno, Hora, Consultorio o Paciente"
            size="small"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ mb: 2 }}
          />

          {/* Tabla con filtrado */}
          <Paper sx={{ height: 400, width: "100%" }}>
            <DataGrid rows={filteredAppointments} columns={columns} pageSizeOptions={[5, 10, 20]} />
          </Paper>

          {/* Botón de cierre */}
          <Button onClick={() => setOpen(false)} variant="contained" color="error" sx={{ mt: 2 }}>
            Cerrar
          </Button>
        </Box>
      </Modal>
    </>
  );
}

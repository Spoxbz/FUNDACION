import React, { useState } from "react";
import { Box, Modal, Typography, Button } from "@mui/material";
// import interfaz de doctores no asisten
import { DoctorAbsence } from "../../../backend/types/Emisor/DoctorAbsence";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxWidth: 700,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const dummyData: DoctorAbsence[] = [
  {
    specialty: "CONTACTOLOGÍA",
    doctor: "LUIS FERNANDEZ",
    start: "Miércoles, 18/09/2024",
    end: "Martes, 31/12/2024",
    observations: "BLOQUEO DE AGENDA INFORMA ADMINISTRACIÓN",
    user: "MARIA JOSE SACOTO",
  },
  {
    specialty: "PEDIATRÍA",
    doctor: "POMPILLO ABRIL",
    start: "Viernes, 27/09/2024",
    end: "Sábado, 26/10/2024",
    observations: "ra. estará de vacaciones",
    user: "DIANA BARROS",
  },
];

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const DoctorsAbsenceModal: React.FC<ModalProps> = ({ open, onClose }) => {
  const [data] = useState<DoctorAbsence[]>(dummyData);

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-doctors-absence"
      disableEscapeKeyDown // Desactiva el cierre con la tecla Escape
      BackdropProps={{
        onClick: (e) => e.stopPropagation(), // Desactiva el cierre al hacer clic fuera del modal
      }}
    >
      <Box sx={style}>
        <Typography variant="h6" id="modal-doctors-absence" gutterBottom>
          Médicos que No Asistirán
        </Typography>
        <Box
          sx={{
            maxHeight: "400px",
            overflowY: "auto",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ backgroundColor: "#f0f0f0" }}>
                <th style={{ padding: "8px", border: "1px solid #ccc" }}>
                  Especialidad
                </th>
                <th style={{ padding: "8px", border: "1px solid #ccc" }}>
                  Médico
                </th>
                <th style={{ padding: "8px", border: "1px solid #ccc" }}>
                  Inicio
                </th>
                <th style={{ padding: "8px", border: "1px solid #ccc" }}>
                  Fin
                </th>
                <th style={{ padding: "8px", border: "1px solid #ccc" }}>
                  Observaciones
                </th>
                <th style={{ padding: "8px", border: "1px solid #ccc" }}>
                  Usuario
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} style={{ textAlign: "center" }}>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {item.specialty}
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {item.doctor}
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {item.start}
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {item.end}
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {item.observations}
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                    {item.user}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
        <Button
          onClick={onClose}
          variant="contained"
          sx={{ mt: 2, display: "block", marginLeft: "auto" }}
        >
          Cerrar
        </Button>
      </Box>
    </Modal>
  );
};

export default DoctorsAbsenceModal;

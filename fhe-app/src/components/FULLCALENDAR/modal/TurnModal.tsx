import React, { useState, useEffect } from "react";
// Estilos
import "../../../CSS/turnmodal.css";
import { Modal, Box, TextField, Button, Grid, Typography, Radio, RadioGroup, FormControlLabel } from "@mui/material";
// Ruta de los eventos mock data
import { getFixedEvents } from "../events";
// Importar componente modal hijo
import ChildConfirmModal from "./ChildConfirmModal";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "10px",
  p: 4,
};

interface TurnModalProps {
  open: boolean;
  onClose: () => void;
  eventData: any;
  isNewEvent: boolean;
}

const TurnModal: React.FC<TurnModalProps> = ({ open, onClose, eventData, isNewEvent }) => {
  const [turnoInfo, setTurnoInfo] = useState({
    doctor: "",
    patient: "",
    cedula: "",
    phone: "",
    turno: "",
    consultorio: "",
    remarks: "",
  });

  const [initialCedula, setInitialCedula] = useState(" ");
  const [initialRemarks, setInitialRemarks] = useState(" ");
  const [selectedOption, setSelectedOption] = useState("emitir");
  // Variables chiild form
  const [confirmOpen, setConfirmOpen] = useState(false);

  useEffect(() => {
    if (eventData) {
      setTurnoInfo(eventData);
      setInitialCedula(eventData.cedula || "");
      setInitialRemarks(eventData.remarks || "");
    }
  }, [eventData]);

  const handleCedulaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nuevaCedula = event.target.value;
    setTurnoInfo({ ...turnoInfo, cedula: nuevaCedula });
  };

  const handleCedulaKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const eventos = getFixedEvents();
      const turno = eventos.find((evento) => evento.extendedProps.cedula === turnoInfo.cedula);
      setTurnoInfo(
        turno
          ? {
              doctor: turno.extendedProps.doctor,
              patient: turno.extendedProps.patient,
              cedula: turno.extendedProps.cedula,
              phone: turno.extendedProps.phone,
              turno: turno.extendedProps.turno,
              consultorio: turno.extendedProps.consultorio,
              remarks: turno.extendedProps.remarks,
            }
          : {
              doctor: "",
              patient: "",
              cedula: turnoInfo.cedula,
              phone: "",
              turno: "",
              consultorio: "",
              remarks: "",
            }
      );
    }
  };

  const handleObservationsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTurnoInfo({ ...turnoInfo, remarks: event.target.value });
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleEmitirTurno = () => {
    console.log("Turno emitido:", turnoInfo);
    onClose();
  };
  // Funciones de cierre modal hijo
  const handleConfirmClose = () => {
    setConfirmOpen(false);
  };
  const handleConfirmYes = () => {
    setConfirmOpen(false);
    onClose();
  };

  // Funcion cerrar modal padre
  const handleModalClose = (event: {}, reason: string) => {
    if (reason !== "backdropClick") {
      if (turnoInfo.cedula !== initialCedula || turnoInfo.remarks !== initialRemarks) {
        setConfirmOpen(true);
      } else {
        onClose();
      }
    }
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleModalClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        disableEscapeKeyDown={true}
      >
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" gutterBottom>
            {isNewEvent ? "Crear Turno" : "Editar Turno"}
          </Typography>
          <RadioGroup row value={selectedOption} onChange={handleOptionChange}>
            <FormControlLabel value="emitir" control={<Radio />} label="Emitir" />
            <FormControlLabel value="reservar" control={<Radio />} label="Reservar" />
          </RadioGroup>
          <Grid className="tm-form">
            <div className="tm-items">
              <Grid className="tm-item" item xs={12}>
                <TextField
                  label="Cédula"
                  variant="filled"
                  size="small"
                  value={turnoInfo.cedula}
                  onChange={handleCedulaChange}
                  onKeyDown={handleCedulaKeyPress}
                  fullWidth
                  disabled={selectedOption === "reservar"}
                />
              </Grid>
              <Grid className="tm-item" item xs={12}>
                <TextField label="Doctor" variant="filled" size="small" value={turnoInfo.doctor} fullWidth disabled />
              </Grid>
              <Grid className="tm-item" item xs={12}>
                <TextField value={turnoInfo.turno} variant="filled" size="small" fullWidth disabled />
              </Grid>
              <Grid className="tm-item" item xs={12}>
                <TextField
                  label="Observaciones"
                  variant="filled"
                  value={turnoInfo.remarks}
                  onChange={handleObservationsChange}
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid className="tm-item" item xs={12}>
                <TextField
                  label="Paciente"
                  variant="filled"
                  size="small"
                  value={turnoInfo.patient}
                  fullWidth
                  disabled
                />
              </Grid>
              <Grid className="tm-item" item xs={12}>
                <TextField label="Teléfono" variant="filled" size="small" value={turnoInfo.phone} fullWidth disabled />
              </Grid>
            </div>
            <div className="tm-buttons">
              <Grid item xs={12}>
                <Button variant="contained" color="secondary" onClick={handleEmitirTurno}>
                  {isNewEvent ? "Emitir" : "Guardar"}
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button variant="outlined" color="primary" onClick={handleModalClose}>
                  Cerrar
                </Button>
              </Grid>
            </div>
          </Grid>
        </Box>
      </Modal>
      <ChildConfirmModal open={confirmOpen} onClose={handleConfirmClose} onConfirm={handleConfirmYes} />
    </>
  );
};

export default TurnModal;

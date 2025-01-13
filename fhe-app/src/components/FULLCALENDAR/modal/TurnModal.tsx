import React, { useState, useEffect } from "react";
// Esitlos
import "../../../CSS/turnmodal.css";
import { Modal, Box, TextField, Button, Grid, Typography, Radio, RadioGroup, FormControlLabel } from "@mui/material";
// Ruta de los eventos mock data
import { getFixedEvents } from "../events";

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
  const [cedula, setCedula] = useState("");
  const [turnoInfo, setTurnoInfo] = useState({
    doctor: "",
    patient: "",
    cedula: "",
    phone: "",
    turno: "",
    consultorio: "",
    remarks: "",
  });
  const [selectedOption, setSelectedOption] = useState("emitir");

  useEffect(() => {
    if (eventData) {
      setTurnoInfo(eventData);
      if (!isNewEvent) {
        setCedula(eventData.cedula || "");
      }
    }
  }, [eventData, isNewEvent]);

  const handleCedulaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCedula(event.target.value);
  };

  const handleObservationsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTurnoInfo({ ...turnoInfo, remarks: event.target.value });
  };

  const handleBuscarTurno = () => {
    const eventos = getFixedEvents();
    const turno = eventos.find((evento) => evento.extendedProps.cedula === cedula);
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
            cedula: "",
            phone: "",
            turno: "",
            consultorio: "",
            remarks: "",
          }
    );
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleEmitirTurno = () => {
    console.log("Turno emitido:", turnoInfo);
    onClose();
  };

  const handleModalClose = (event: {}, reason: string) => {
    if (reason !== "backdropClick") {
      onClose();
    }
  };

  return (
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
        <Grid className="tm-form" spacing={2}>
          <div className="tm-top">
            {isNewEvent && selectedOption === "emitir" && (
              <>
                <Grid item xs={12}>
                  <TextField
                    sx={{ marginBottom: "20px" }}
                    label="Cédula"
                    value={cedula}
                    onChange={handleCedulaChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="primary" onClick={handleBuscarTurno} fullWidth>
                    Buscar
                  </Button>
                </Grid>
              </>
            )}
          </div>
          <div className="tm-items">
            <Grid className="tm-item" item xs={12}>
              <TextField label="Doctor" variant="filled" value={turnoInfo.doctor} fullWidth disabled />
            </Grid>
            <Grid className="tm-item" item xs={12}>
              <TextField value={turnoInfo.turno} variant="filled" fullWidth disabled />
            </Grid>
            <Grid className="tm-item" item xs={12}>
              <TextField
                label="Obsersaciones"
                variant="filled"
                value={turnoInfo.remarks}
                onChange={handleObservationsChange}
                fullWidth
                // disabled={selectedOption === "reservar"}
              />
            </Grid>
            <Grid className="tm-item" item xs={12}>
              <TextField label="Paciente" variant="filled" value={turnoInfo.patient} fullWidth disabled />
            </Grid>
            <Grid className="tm-item" item xs={12}>
              <TextField label="Cédula" value={turnoInfo.cedula} fullWidth disabled />
            </Grid>
            <Grid className="tm-item" item xs={12}>
              <TextField label="Teléfono" variant="filled" value={turnoInfo.phone} fullWidth disabled />
            </Grid>
          </div>
          <div className="tm-buttons">
            <Grid item xs={12}>
              <Button variant="contained" color="secondary" onClick={handleEmitirTurno}>
                {isNewEvent ? "Emitir" : "Guardar"}
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button variant="outlined" color="primary" onClick={onClose}>
                Cerrar
              </Button>
            </Grid>
          </div>
        </Grid>
      </Box>
    </Modal>
  );
};

export default TurnModal;

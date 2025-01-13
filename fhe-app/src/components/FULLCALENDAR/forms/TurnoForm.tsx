import React, { useState } from "react";
import { TextField, Button, Grid, Paper, Typography } from "@mui/material";
import { turnostype, turnosdatacalendar } from "../events"; // Ajusta la ruta a tu archivo de datos

export default function TurnoForm() {
  const [cedula, setCedula] = useState("");
  const [turnoInfo, setTurnoInfo] = useState<turnostype | null>(null);

  const handleCedulaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCedula(event.target.value);
  };

  const handleBuscarTurno = () => {
    const turno = turnosdatacalendar.find((turno) => turno.cedula === cedula);
    setTurnoInfo(turno || null);
  };

  return (
    <Paper elevation={3} style={{ padding: 16 }}>
      <Typography variant="h6" gutterBottom>
        Buscar Turno
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField label="Cédula" value={cedula} onChange={handleCedulaChange} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleBuscarTurno} fullWidth>
            Buscar
          </Button>
        </Grid>
        {turnoInfo && (
          <Grid item xs={12}>
            <Typography variant="h6">Información del Turno</Typography>
            <Typography>Turno: {turnoInfo.turno}</Typography>
            <Typography>Consultorio: {turnoInfo.consultorio}</Typography>
            <Typography>Hora: {turnoInfo.hora}</Typography>
            <Typography>Doctor: {turnoInfo.doctor}</Typography>
            <Typography>Paciente: {turnoInfo.paciente}</Typography>
            <Typography>Contacto: {turnoInfo.num_contacto}</Typography>
            {turnoInfo.observaciones && <Typography>Observaciones: {turnoInfo.observaciones}</Typography>}
          </Grid>
        )}
      </Grid>
    </Paper>
  );
}

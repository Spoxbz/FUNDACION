import { Box } from "@mui/material";
// Estilos
import "../../../../CSS/vitalsigns.css";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";
import dayjs, { Dayjs } from "dayjs";

export default function PacientInfo() {
  const [dateValue, setDateValue] = React.useState<Dayjs | null>(
    dayjs("2022-04-17")
  );
  return (
    <Box className="fields-patient-info">
      <div className="field">
        <label htmlFor="ci">C.I:</label>
        <input
          id="ci"
          type="text"
          className="custom-input"
          value={"1234567890"}
        />
      </div>

      <div className="field">
        <label htmlFor="hc">H.C:</label>
        <input id="hc" type="text" className="custom-input" value={"HC12345"} />
      </div>
      <div className="field">
        <label htmlFor="nombre">Nombre:</label>
        <input
          id="nombre"
          type="text"
          className="custom-input"
          value={"Bravo Zhunio Bruno Esteban"}
        />
      </div>
      <div className="field">
        <label htmlFor="genero">Género:</label>
        <select id="genero" className="custom-input">
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
          <option value="otro">Otro</option>
        </select>
      </div>

      <div className="field date-field">
        <label htmlFor="fecha">F.N:</label>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            value={dateValue}
            onChange={(newValue) => setDateValue(newValue)}
            className="custom-date-picker"
          />
        </LocalizationProvider>
      </div>

      <div className="field">
        <label htmlFor="edad">Edad:</label>
        <input
          id="edad"
          type="text"
          className="custom-input"
          value={"23 años, 5 meses, 14 días"}
          readOnly
        />
      </div>
    </Box>
  );
}

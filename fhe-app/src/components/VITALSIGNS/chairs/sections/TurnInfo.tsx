import { Box } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import React from "react";
// Estilos
import "../../../../CSS/vitalsigns.css";

export default function TurnInfo() {
  const [dateValue, setDateValue] = React.useState<Dayjs | null>(
    dayjs("2022-04-17")
  );
  const [timeValue, setTimeValue] = React.useState<Dayjs | null>(
    dayjs("2022-04-17T15:30")
  );

  return (
    <Box className="fields-turn-info">
      <div className="field">
        <label htmlFor="turno">Turno:</label>
        <input id="turno" type="text" className="custom-input" value={"HR1"} />
      </div>

      <div className="field">
        <label htmlFor="consultorio">Consultorio:</label>
        <input
          id="consultorio"
          type="text"
          className="custom-input"
          value={"207"}
        />
      </div>

      <div className="field">
        <label htmlFor="medico">Médico:</label>
        <input
          id="medico"
          type="text"
          className="custom-input"
          value={"Sacaquirin Quizhpilema Eduardo Santiago"}
        />
      </div>

      <div className="field date-field">
        <label htmlFor="fecha">Fecha:</label>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            value={dateValue}
            onChange={(newValue) => setDateValue(newValue)}
            className="custom-date-picker"
          />
        </LocalizationProvider>
      </div>

      <div className="field time-field">
        <label htmlFor="hora">Hora:</label>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
            value={timeValue}
            onChange={(newValue) => setTimeValue(newValue)}
            className="custom-time-picker"
          />
        </LocalizationProvider>
      </div>
    </Box>
  );
}

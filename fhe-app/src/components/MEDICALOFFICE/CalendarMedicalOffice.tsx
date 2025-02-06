/**
 * Este componente es el calendario de fechas para cuando el medico requiere listar turnos en DoctorAppointMentTable.tsx
 * Este calendario es usado en HeaderMedicalOffice.tsx
 */
// Estilos
import "../../CSS/medicaloffice.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React from "react";

export default function CalendarMedicalOffice({ onDateChange }: { onDateChange: (date: Dayjs | null) => void }) {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs());

  React.useEffect(() => {
    onDateChange(value); // Al cargar, se envia la fecha actual al padre
  });

  const handelDateChange = (newValue: Dayjs | null) => {
    setValue(newValue);
    onDateChange(newValue); // Esto envia la fecha seleccionada al componente padre
  };

  return (
    <>
      <div className="mo-header-calendaer">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker", "DatePicker"]}>
            <div style={{ height: 40, width: "300px" }}>
              <DatePicker value={value} onChange={handelDateChange} />
            </div>
          </DemoContainer>
        </LocalizationProvider>
      </div>
    </>
  );
}

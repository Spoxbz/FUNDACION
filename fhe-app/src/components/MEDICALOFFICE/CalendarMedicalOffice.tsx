// Estilos
import "../../CSS/medicaloffice.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React from "react";

export default function CalendarMedicalOffice() {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs("2025-01-31"));
  return (
    <>
      <div className="mo-header-bot-calendaer">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker", "DatePicker"]}>
            <div style={{ height: "50px" }}>
              <DatePicker value={value} onChange={(newValue) => setValue(newValue)} />
            </div>
          </DemoContainer>
        </LocalizationProvider>
      </div>
    </>
  );
}

import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// Estilos
import "../CSS/stickycards.css";

export default function StickyCalendar() {
  return (
    <div className="calen-small">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="calendar-container">
          <DateCalendar />
        </div>
      </LocalizationProvider>
    </div>
  );
}

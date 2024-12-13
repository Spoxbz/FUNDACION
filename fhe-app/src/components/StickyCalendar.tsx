import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// Estilos
import "../CSS/calendar.css";

export default function StickyCalendar() {
  return (
    <div className="small-calendar">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="calendar-container">
          <DateCalendar displayWeekNumber />
        </div>
      </LocalizationProvider>
    </div>
  );
}

import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// Estilos
import "../../CSS/calendar.css";

export default function StickyCalendar() {
  return (
    <div className="small-calendar">
      <div className="calendar-container">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar displayWeekNumber sx={{ margin: "0 !important" }} />
        </LocalizationProvider>
      </div>
    </div>
  );
}

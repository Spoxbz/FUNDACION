import SpecialtyCard from "../components/StickyCards/SpecialtyCard";
import ProfessionalCard from "../components/StickyCards/ProfessionalCard";
import StickyCalendar from "../components/StickyCalendar";
import FullCalendarEmisor from "../components/FULLCALENDAR/FullCalendarEmisor";
import { Box } from "@mui/material";
// Estilos
import "../CSS/calendar.css";

const Calendar: React.FC = () => {
  return (
    <div className="container-schedule">
      {/* <header className="encabezado-schedule"><h1>Agenda</h1></header> */}
      <main className="main-content-calendar">
        <aside className="aside-calendar">
          <SpecialtyCard />
          <ProfessionalCard />
          <StickyCalendar />
        </aside>
        <Box className="display-calendar">
          <FullCalendarEmisor />
        </Box>
      </main>
    </div>
  );
};

export default Calendar;

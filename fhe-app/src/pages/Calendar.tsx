import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from "@fullcalendar/core/locales/es";

import SpecialtyCard from "../components/StickyCards/SpecialtyCard";
import ProfessionalCard from "../components/StickyCards/ProfessionalCard";

import "../CSS/calendar.css";
import "../CSS/fullcalendar.css";
import StickyCalendar from "../components/StickyCalendar";
import { Box } from "@mui/material";

const Calendar: React.FC = () => {
  const [events, setEvents] = useState([
    { title: "Evento 1", date: "2024-12-09" },
    { title: "Evento 2", date: "2024-12-10" },
  ]);

  return (
    <div className="container-schedule">
      <header className="encabezado-schedule">
        <h1>Agenda</h1>
      </header>
      <main className="main-content-calendar">
        <aside className="aside-calendar">
          <SpecialtyCard />
          <br />
          <ProfessionalCard />
          <br />
          <StickyCalendar />
        </aside>
        <Box className="display-calendar">
          <FullCalendar
            locale={esLocale} // Establece el idioma a español
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="timeGridDay"
            headerToolbar={{
              start: "prev,next today",
              center: "title",
              end: "timeGridDay,timeGridWeek,dayGridMonth",
            }}
            dayHeaderFormat={{ weekday: "long" }}
            editable={true}
            selectable={true}
            weekends={false}
            aspectRatio={1}
            height={"auto"}
            events={events}
            views={{
              timeGridWeek: {
                slotLabelFormat: { hour: "2-digit", minute: "2-digit" },
                slotDuration: "00:15:00",
              },
              timeGridDay: {
                slotDuration: "00:15:00",
                slotLabelFormat: { hour: "2-digit", minute: "2-digit" },
              },
            }}
            slotLabelFormat={{ hour12: true }}
            scrollTime="08:00:00" // Hora inicial visible al cargar
            slotMinTime="08:00:00" // Hora mínima visible
            slotMaxTime="18:00:00" // Hora máxima visible
          />
        </Box>
      </main>
    </div>
  );
};

export default Calendar;

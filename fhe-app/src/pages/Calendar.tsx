import React from "react";
import FullCalendar from "@fullcalendar/react"; // Importa FullCalendar
import dayGridPlugin from "@fullcalendar/daygrid"; // Vista de cuadrícula diaria
import timeGridPlugin from "@fullcalendar/timegrid"; // Vista de cuadrícula horaria
import interactionPlugin from "@fullcalendar/interaction"; // Soporte para interacción

import SpecialtyCard from "../components/StickyCards/SpecialtyCard";

import "../CSS/calendar.css";
import "../CSS/fullcalendar.css";
import ProfessionalCard from "../components/StickyCards/ProfessionalCard";

const Calendar: React.FC = () => {
  return (
    <div className="container-schedule">
      <header className="header-schedule">
        <h1>Agenda</h1>
      </header>
      <main className="main-content-calendar">
        <aside className="aside-calendar">
          <SpecialtyCard />
          <ProfessionalCard />
        </aside>
        <div className="display-calendar">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]} // Registra los módulos
            initialView="dayGridMonth" // Vista inicial (mes en cuadrícula)
            editable={true} // Permite arrastrar y soltar eventos
            selectable={true} // Permite seleccionar fechas y horarios
            aspectRatio={1.5} // Proporción de la altura y anchura del calendario
            height={"auto"}
            events={[
              { title: "Evento 1", date: "2024-12-10" },
              { title: "Evento 2", date: "2024-12-12" },
            ]}
            windowResize={(arg) => {
              console.log("Calendario ajustado:", arg);
            }}
          />
        </div>
      </main>
    </div>
  );
};

export default Calendar;

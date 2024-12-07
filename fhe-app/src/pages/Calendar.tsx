import React from "react";
import FullCalendar from "@fullcalendar/react"; // Importa FullCalendar
import dayGridPlugin from "@fullcalendar/daygrid"; // Vista de cuadrícula diaria
import timeGridPlugin from "@fullcalendar/timegrid"; // Vista de cuadrícula horaria
import interactionPlugin from "@fullcalendar/interaction"; // Soporte para interacción

const Calendar: React.FC = () => {
  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]} // Registra los módulos
        initialView="dayGridMonth" // Vista inicial (mes en cuadrícula)
        editable={true} // Permite arrastrar y soltar eventos
        selectable={true} // Permite seleccionar fechas y horarios
        events={[
          { title: "Evento 1", date: "2024-12-10" },
          { title: "Evento 2", date: "2024-12-12" },
        ]}
      />
    </div>
  );
};

export default Calendar;

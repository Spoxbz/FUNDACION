import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from "@fullcalendar/core/locales/es";

import "../../CSS/fullcalendar.css";

const FullCalendarEmisor: React.FC = () => {
  // Eventos manuales
  const [fixedEvents] = useState([
    { title: "Evento Fijo 1", date: "2024-12-09" },
    { title: "Evento Fijo 2", date: "2024-12-10" },
  ]);

  // Eventos dinámicos alrededor del día actual
  const [dynamicEvents, setDynamicEvents] = useState<
    { title: string; date: string }[]
  >([]);

  useEffect(() => {
    // Generar eventos dinámicos
    const generateDynamicEvents = () => {
      const today = new Date();
      const yesterday = new Date(today);
      const tomorrow = new Date(today);

      yesterday.setDate(today.getDate() - 1);
      tomorrow.setDate(today.getDate() + 1);

      const newDynamicEvents = [
        {
          title: "Evento de Ayer",
          date: yesterday.toISOString().split("T")[0],
        },
        { title: "Evento de Hoy", date: today.toISOString().split("T")[0] },
        {
          title: "Evento de Mañana",
          date: tomorrow.toISOString().split("T")[0],
        },
      ];

      setDynamicEvents(newDynamicEvents);
    };

    generateDynamicEvents();
  }, []);

  return (
    <FullCalendar
      locale={esLocale}
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="timeGridDay"
      initialDate={new Date()} // Centrar en el día actual
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
      height="auto"
      events={[...fixedEvents, ...dynamicEvents]} // Combinar eventos fijos y dinámicos para renderizar
      views={{
        timeGridWeek: {
          slotLabelFormat: { hour: "2-digit", minute: "2-digit" },
          slotDuration: "00:15:00",
        },
        timeGridDay: {
          slotDuration: "00:15:00",
          slotLabelFormat: { hour: "2-digit", minute: "2-digit" },
        },
        dayGridMonth: {},
      }}
      slotLabelFormat={{ hour12: true }}
      scrollTime="08:00:00"
      slotMinTime="07:00:00"
      slotMaxTime="17:00:00"
    />
  );
};

export default FullCalendarEmisor;

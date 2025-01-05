import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from "@fullcalendar/core/locales/es";
import { getFixedEvents, getDynamicEvents } from "./events"; // Lógica separada
//Estilos
import "../../CSS/fullcalendar.css";
import { CustomButtons } from "./custombuttons/CustomButtonTypes";

interface Props {
  customButtons: CustomButtons; // Personaliza el tipo si lo prefieres
}

const FullCalendarEmisor: React.FC<Props> = ({ customButtons }) => {
  const [fixedEvents] = useState(getFixedEvents());
  const [dynamicEvents, setDynamicEvents] = useState<
    { title: string; date: string }[]
  >([]);

  useEffect(() => {
    setDynamicEvents(getDynamicEvents());
  }, []);

  const timeGridDayView = {
    slotDuration: "00:15:00",
    slotLabelFormat: { hour: "2-digit", minute: "2-digit" } as const, // Agregado "as const" para garantizar el tipo correcto
  };

  const timeGridWeekView = {
    slotDuration: "00:15:00",
    slotLabelFormat: { hour: "2-digit", minute: "2-digit" } as const, // Igual que arriba
  };

  const dayGridMonthView = {};

  return (
    <FullCalendar
      locale={esLocale}
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="timeGridDay"
      headerToolbar={{
        start: "title,prev,next,today",
        center: "timeGridDay,timeGridWeek,dayGridMonth",
        end: "deleteEventButton,emitEventButton,rescheduleEventButton,reserveEventButton,openModalButton,agregarTurno",
      }}
      customButtons={customButtons}
      views={{
        timeGridDay: timeGridDayView,
        timeGridWeek: timeGridWeekView,
        dayGridMonth: dayGridMonthView,
      }}
      editable={true}
      selectable={true}
      weekends={false}
      aspectRatio={1}
      height="auto"
      events={[...fixedEvents, ...dynamicEvents]}
      scrollTime="08:00:00"
      slotMinTime="07:00:00"
      slotMaxTime="17:00:00"
    />
  );
};

export default FullCalendarEmisor;

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
  const [dynamicEvents, setDynamicEvents] = useState<{ title: string; date: string }[]>([]);

  useEffect(() => {
    setDynamicEvents(getDynamicEvents());
  }, []);

  const renderEventContent = (eventInfo: any) => {
    const { duration, doctor, patient, turno, consultorio } = eventInfo.event.extendedProps;

    if (eventInfo.view.type === "timeGridDay" || eventInfo.view.type === "timeGridWeek") {
      return (
        <div>
          {" "}
          <b>{eventInfo.timeText}</b>
          <br />
          {duration && <div>{`Duración: ${duration}`}</div>}
          {doctor && <div>{`Doctor: ${doctor}`}</div>}
          {patient && <div>{`Paciente: ${patient}`}</div>}
          {turno && <div>{`Turno: ${turno}`}</div>}
          {consultorio && <div>{`Consultorio: ${consultorio}`}</div>}
        </div>
      );
    } else if (eventInfo.view.type === "dayGridMonth") {
      return (
        <div>
          {" "}
          <b>{eventInfo.timeText}</b>
          <br />
          {doctor && <div>{`Doctor: ${doctor}`}</div>}
          {patient && <div>{`Paciente: ${patient}`}</div>}
        </div>
      );
    }
    return (
      <div>
        {" "}
        <b>{eventInfo.timeText}</b> <br /> {eventInfo.event.title}{" "}
      </div>
    );
  };
  const handleEventClick = (eventClickInfo: any) => {
    const event = eventClickInfo.event;
    const turnoId = event.extendedProps.turno;
    alert(`Turno seleccionado: ${turnoId}`);
    event.setProp("title", "Turno Modificado");
    event.setExtendedProp("doctor", "Dr. Modificado");
  };

  const timeGridDayView = {
    slotDuration: "00:05:00",
    slotLabelFormat: { hour: "2-digit", minute: "2-digit" } as const,
  };

  const timeGridWeekView = {
    slotDuration: "00:05:00",
    slotLabelFormat: { hour: "2-digit", minute: "2-digit" } as const,
  };
  const dayGridMonthView = { allDaySlot: false, dayMaxEventRows: false };

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
      slotMaxTime="17:30:00"
      allDaySlot={false}
      eventContent={renderEventContent}
      eventClick={handleEventClick}
    />
  );
};
export default FullCalendarEmisor;

// const FullCalendarEmisor: React.FC<Props> = ({ customButtons }) => {
//   const [fixedEvents] = useState(getFixedEvents());
//   const [dynamicEvents, setDynamicEvents] = useState<
//     { title: string; date: string }[]
//   >([]);

//   useEffect(() => {
//     setDynamicEvents(getDynamicEvents());
//   }, []);

//   const renderEventContent = (eventInfo: any) => {
//     const { duration, doctor, patient, turno, consultorio } =
//       eventInfo.event.extendedProps;
//     const isTallEnough =
//       eventInfo.view.type === "timeGridDay" &&
//       eventInfo.event._def.ui.height > 50;

//     return (
//       <div>
//         <b>{eventInfo.timeText}</b> <br />
//         {isTallEnough && (
//           <>
//             <div>{`Duración: ${duration}`}</div>
//             <div>{`Doctor: ${doctor}`}</div>
//             <div>{`Paciente: ${patient}`}</div>
//             <div>{`Turno: ${turno}`}</div>
//             <div>{`Consultorio: ${consultorio}`}</div>
//           </>
//         )}
//       </div>
//     );
//   };

//   const handleEventClick = (eventClickInfo: any) => {
//     const event = eventClickInfo.event;
//     const turnoId = event.extendedProps.turno;

//     alert(`Turno seleccionado: ${turnoId}`);
//     event.setProp("title", "Turno Modificado");
//     event.setExtendedProp("doctor", "Dr. Modificado");
//   };

//   const timeGridDayView = {
//     slotDuration: "00:05:00",
//     slotLabelFormat: { hour: "2-digit", minute: "2-digit" } as const, // Agregado "as const" para garantizar el tipo correcto
//   };

//   const timeGridWeekView = {
//     slotDuration: "00:05:00",
//     slotLabelFormat: { hour: "2-digit", minute: "2-digit" } as const, // Igual que arriba
//   };

//   const dayGridMonthView = {};

//   return (
//     <FullCalendar
//       locale={esLocale}
//       plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//       initialView="timeGridDay"
//       headerToolbar={{
//         start: "title,prev,next,today",
//         center: "timeGridDay,timeGridWeek,dayGridMonth",
//         end: "deleteEventButton,emitEventButton,rescheduleEventButton,reserveEventButton,openModalButton,agregarTurno",
//       }}
//       customButtons={customButtons}
//       views={{
//         timeGridDay: timeGridDayView,
//         timeGridWeek: timeGridWeekView,
//         dayGridMonth: dayGridMonthView,
//       }}
//       editable={true}
//       selectable={true}
//       weekends={false}
//       aspectRatio={1}
//       height="auto"
//       events={[...fixedEvents, ...dynamicEvents]}
//       scrollTime="08:00:00"
//       slotMinTime="06:30:00"
//       slotMaxTime="17:30:00"
//       eventContent={renderEventContent}
//       eventClick={handleEventClick}
//     />
//   );
// };

// export default FullCalendarEmisor;

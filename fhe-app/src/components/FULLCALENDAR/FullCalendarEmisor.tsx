import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from "@fullcalendar/core/locales/es";
import { getFixedEvents } from "./events";
import { CustomButtons } from "./custombuttons/CustomButtonTypes";

//Estilos
import "../../CSS/fullcalendar.css";

interface Props {
  customButtons: CustomButtons;
}

const FullCalendarEmisor: React.FC<Props> = ({ customButtons }) => {
  const [fixedEvents] = useState(getFixedEvents());

  const renderEventContent = (eventInfo: any) => {
    const { patient, cedula, phone, turno, consultorio } = eventInfo.event.extendedProps;
    //const { duration, doctor, patient, cedula, phone, turno, consultorio } = eventInfo.event.extendedProps;

    if (eventInfo.view.type === "timeGridDay") {
      return (
        <>
          <div className="event-view-day">
            {/* <b>{eventInfo.timeText}</b> */}
            {/* {duration && <div>{`Duración: ${duration}`}</div>} */}
            {turno && <div>{`${turno}`}</div>}
            {consultorio && <div>{`${consultorio}`}</div>}
            {cedula && (
              <div>
                <input type="text" placeholder={`${cedula}`} />
              </div>
            )}
            {patient && (
              <div>
                {`${patient}`} {`${phone}`}
              </div>
            )}
          </div>
        </>
      );
    } else if (eventInfo.view.type === "timeGridWeek") {
      return (
        <div className="event-view-week">
          {turno && <div>{`${turno}`}</div>}
          {cedula && <div>{`${cedula}`}</div>}
          {patient && (
            <div style={{ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>{`${patient}`}</div>
          )}
          <div style={{ display: "flex", gap: 10 }}>{phone && <div>{`${phone}`}</div>}</div>
        </div>
      );
    } else if (eventInfo.view.type === "dayGridMonth") {
      return (
        <div className="event-view-month">
          <b>{eventInfo.timeText}</b>
          {turno && <div>{`Turno: ${turno}`}</div>}
        </div>
      );
    }
    return (
      <div>
        <b>{eventInfo.timeText}</b> <br /> {eventInfo.event.title}{" "}
      </div>
    );
  };

  const handleEventDrop = (eventDropInfo: any) => {
    const event = eventDropInfo.event;
    const newStart = event.start;
    const newEnd = event.end;
    alert(`Evento movido a nueva fecha: ${newStart} hasta: ${newEnd}`);
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
    <>
      <FullCalendar
        locale={esLocale}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridDay"
        headerToolbar={{
          start: "title,prev,next,today",
          center: "timeGridDay,timeGridWeek,dayGridMonth",
          end: "openModalButton",
          // end: "deleteEventButton,emitEventButton,rescheduleEventButton,reserveEventButton,openModalButton,agregarTurno",
        }}
        customButtons={customButtons}
        views={{
          timeGridDay: timeGridDayView,
          timeGridWeek: timeGridWeekView,
          dayGridMonth: dayGridMonthView,
        }}
        editable={true}
        eventDurationEditable={false}
        selectable={true}
        weekends={true}
        hiddenDays={[0]}
        aspectRatio={1}
        height="auto"
        events={[...fixedEvents]}
        scrollTime="08:00:00"
        slotMinTime="07:00:00"
        slotMaxTime="17:30:00"
        allDaySlot={true}
        duration={4}
        eventDrop={handleEventDrop}
        eventContent={renderEventContent}
        dayMaxEvents={2}
        moreLinkClick={"popover"}
      />
    </>
  );
};
export default FullCalendarEmisor;

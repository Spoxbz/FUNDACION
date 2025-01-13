import React, { useState } from "react";
//Estilos
import "../../CSS/fullcalendar.css";
// Componentes
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from "@fullcalendar/core/locales/es";
import { getFixedEvents } from "./events";
import { CustomButtons } from "./custombuttons/CustomButtonTypes";
import { EventClickArg, DateSelectArg } from "@fullcalendar/core";
// Vistas del clanedario
import { timeGridDayView } from "./customviews/CustomViews";
import { timeGridWeekView } from "./customviews/CustomViews";
import { dayGridMonthView } from "./customviews/CustomViews";
// Modal
import TurnModal from "./modal/TurnModal";

interface Props {
  customButtons: CustomButtons;
}

const FullCalendarEmisor: React.FC<Props> = ({ customButtons }) => {
  const [fixedEvents] = useState(getFixedEvents());
  // variables para el modal
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [isNewEvent, setIsNewEvent] = useState(false);

  // Función para renderizar un evento dependiendo la vista
  const renderEventContent = (eventInfo: any) => {
    const { patient, cedula, phone, turno, consultorio, remarks } = eventInfo.event.extendedProps;
    //const { duration, doctor, patient, cedula, phone, turno, consultorio } = eventInfo.event.extendedProps;
    const { allDay } = eventInfo.event;

    if (allDay && eventInfo.view.type === "timeGridDay") {
      return (
        <div className="event-view-allday">
          <b>Evento Todo el Día</b>
          <div>{eventInfo.event.title}</div>
        </div>
      );
    }
    // Rest of the code for other views...

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
            {remarks && <div>{`${remarks}`}</div>}
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

  // Mostrar eventos creados en el modal
  const handleDateClick = (info: DateSelectArg) => {
    setSelectedEvent({
      turno: `Turno ${info.startStr}`,
      consultorio: "",
      cedula: "",
      patient: "",
      phone: "",
      doctor: "",
      start: info.startStr,
      end: info.endStr,
    });
    setIsNewEvent(true);
    setModalOpen(true);
  };

  // Crear Eventos con el modal
  const handleEventClick = (info: EventClickArg) => {
    const { title, extendedProps, start, end } = info.event;
    setSelectedEvent({
      title,
      ...extendedProps,
      start,
      end,
    });
    setIsNewEvent(false);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <>
      <FullCalendar
        locale={esLocale}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridDay"
        // propiedad para navegar a un dia desde el calendario
        navLinks={true}
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
        slotMinTime="06:45:00"
        slotMaxTime="17:30:00"
        allDaySlot={false}
        duration={4}
        eventDrop={handleEventDrop}
        eventContent={renderEventContent}
        dayMaxEvents={2}
        moreLinkClick={"popover"}
        // Llmar a la funcion que muestra el evento en el modal
        select={handleDateClick}
        // Llamar a la función que crea el evento
        eventClick={handleEventClick}
      />
      <TurnModal open={modalOpen} onClose={closeModal} eventData={selectedEvent} isNewEvent={isNewEvent} />
    </>
  );
};
export default FullCalendarEmisor;

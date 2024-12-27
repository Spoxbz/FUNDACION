// components/FULLCALENDAR/custombuttons/CustomButtons.tsx
import { CustomButtons } from "./CustomButtonTypes"; // Importar la interfaz si está en un archivo separado

export const customButtons = (
  openModalFunction: () => void
): CustomButtons => ({
  deleteEventButton: {
    text: "Eliminar",
    click: () => alert("Eliminar turno seleccionado"),
  },
  emitEventButton: {
    text: "Emitir",
    click: () => alert("Emitir turno"),
  },
  rescheduleEventButton: {
    text: "Reagendar",
    click: () => alert("Abrir modal para reagendar"),
  },
  reserveEventButton: {
    text: "Reservar",
    click: () => alert("Reservar turno médico"),
  },
  openModalButton: {
    text: "Doctores No Asisten",
    click: () => openModalFunction(),
  },
});

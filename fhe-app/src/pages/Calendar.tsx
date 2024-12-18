import React, { useEffect, useState } from "react";
import SpecialtyCard from "../components/StickyCards/SpecialtyCard";
import ProfessionalCard from "../components/StickyCards/ProfessionalCard";
import StickyCalendar from "../components/StickyCalendar";
import FullCalendarEmisor from "../components/FULLCALENDAR/FullCalendarEmisor";
import DoctorsAbsenceModal from "../components/FULLCALENDAR/modal/DoctorsAbsenceModal";
import { customButtons } from "../components/FULLCALENDAR/custombuttons/CustomButtons";
import { Box } from "@mui/material";

// Estilos
import "../CSS/calendar.css";

const Calendar: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    // Muestra el modal cuando el componente se monta
    setOpenModal(true);
  }, []);

  const handleOpenModal = () => setOpenModal(true); // Función para abrir el modal
  const handleCloseModal = () => setOpenModal(false);

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
          {/* Aquí se pasa la función al FullCalendar */}
          <FullCalendarEmisor customButtons={customButtons(handleOpenModal)} />
        </Box>
      </main>
      {/* Modal */}
      <DoctorsAbsenceModal open={openModal} onClose={handleCloseModal} />
    </div>
  );
};

export default Calendar;

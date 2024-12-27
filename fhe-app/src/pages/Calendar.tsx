import React, { useEffect, useState } from "react";
import SpecialtyCard from "../components/StickyCards/SpecialtyCard";
import ProfessionalCard from "../components/StickyCards/ProfessionalCard";
import StickyCalendar from "../components/StickyCalendar";
import FullCalendarEmisor from "../components/FULLCALENDAR/FullCalendarEmisor";
import DoctorsAbsenceModal from "../components/FULLCALENDAR/modal/DoctorsAbsenceModal";
import { customButtons } from "../components/FULLCALENDAR/custombuttons/CustomButtons";
import { Box } from "@mui/material";
import {
  professionallist,
  Specialty,
  Profesional,
} from "../data/datacalendar/listcontent";

// Estilos
import "../CSS/calendar.css";

const Calendar: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | null>(
    null
  );
  const [filteredProfessionals, setFilteredProfessionals] = useState<
    Profesional[]
  >([]);

  useEffect(() => {
    // Muestra el modal cuando el componente se monta
    setOpenModal(true);
  }, []);

  const handleOpenModal = () => setOpenModal(true); // Función para abrir el modal
  const handleCloseModal = () => setOpenModal(false);

  useEffect(() => {
    // Filtrar los profesionales según la especialidad seleccionada
    if (selectedSpecialty) {
      setFilteredProfessionals(
        professionallist.filter(
          (pro) => pro.specialtyId === selectedSpecialty.id
        )
      );
    } else {
      setFilteredProfessionals([]);
    }
  }, [selectedSpecialty]);

  return (
    <div className="container-schedule">
      <main className="main-content-calendar">
        <aside className="aside-calendar">
          <SpecialtyCard onSelectSpecialty={setSelectedSpecialty} />
          <ProfessionalCard professionals={filteredProfessionals} />
          <StickyCalendar />
        </aside>
        <Box className="display-calendar">
          <FullCalendarEmisor customButtons={customButtons(handleOpenModal)} />
        </Box>
      </main>
      <DoctorsAbsenceModal open={openModal} onClose={handleCloseModal} />
    </div>
  );
};

export default Calendar;

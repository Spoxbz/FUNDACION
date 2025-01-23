import React, { useEffect, useState } from "react";
import SpecialtyCard from "../components/FULLCALENDAR/StickyCards/SpecialtyCard";
import ProfessionalCard from "../components/FULLCALENDAR/StickyCards/ProfessionalCard";
import StickyCalendar from "../components/FULLCALENDAR/StickyCalendar";
import FullCalendarEmisor from "../components/FULLCALENDAR/FullCalendarEmisor";
import DoctorsAbsenceModal from "../components/FULLCALENDAR/modal/DoctorsAbsenceModal";
import { customButtons } from "../components/FULLCALENDAR/custombuttons/CustomButtons";
import { Box } from "@mui/material";
import { Specialty } from "../backendTwo/model/model.specialty";
import { fetchProfessionalsBySpecialty } from "../backendTwo/service/specialtyService";

import "../CSS/calendar.css";
import { Employee } from "../backendTwo/model/model.employee";

const Calendar: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | null>(null);
  const [filteredProfessionals, setFilteredProfessionals] = useState<Employee[]>([]); // Cambié `Profesional` por `any` hasta definir el tipo de datos

  useEffect(() => {
    // Muestra el modal cuando el componente se monta
    setOpenModal(true);
  }, []);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  useEffect(() => {
    // Filtrar los profesionales según la especialidad seleccionada
    if (selectedSpecialty) {
      const loadProfessionals = async () => {
        try {
          const professionals = await fetchProfessionalsBySpecialty(selectedSpecialty.specialty_id);
          setFilteredProfessionals(professionals);
        } catch (error) {
          console.error("Error fetching professionals:", error);
        }
      };
      loadProfessionals();
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

// import React, { useEffect, useState } from "react";
// import SpecialtyCard from "../components/FULLCALENDAR/StickyCards/SpecialtyCard";
// import ProfessionalCard from "../components/FULLCALENDAR/StickyCards/ProfessionalCard";
// import StickyCalendar from "../components/FULLCALENDAR/StickyCalendar";
// import FullCalendarEmisor from "../components/FULLCALENDAR/FullCalendarEmisor";
// import DoctorsAbsenceModal from "../components/FULLCALENDAR/modal/DoctorsAbsenceModal";
// import { customButtons } from "../components/FULLCALENDAR/custombuttons/CustomButtons";
// import { Box } from "@mui/material";
// import { professionallist, Specialty, Profesional } from "../backendMuckData/datas/Emisor/datacalendar/listcontent";

// // Estilos
// import "../CSS/calendar.css";

// const Calendar: React.FC = () => {
//   const [openModal, setOpenModal] = useState<boolean>(false);
//   const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | null>(null);
//   const [filteredProfessionals, setFilteredProfessionals] = useState<Profesional[]>([]);

//   useEffect(() => {
//     // Muestra el modal cuando el componente se monta
//     setOpenModal(true);
//   }, []);

//   const handleOpenModal = () => setOpenModal(true); // Función para abrir el modal
//   const handleCloseModal = () => setOpenModal(false);

//   useEffect(() => {
//     // Filtrar los profesionales según la especialidad seleccionada
//     if (selectedSpecialty) {
//       setFilteredProfessionals(professionallist.filter((pro) => pro.specialtyId === selectedSpecialty.id));
//     } else {
//       setFilteredProfessionals([]);
//     }
//   }, [selectedSpecialty]);

//   return (
//     <div className="container-schedule">
//       <main className="main-content-calendar">
//         <aside className="aside-calendar">
//           <SpecialtyCard onSelectSpecialty={setSelectedSpecialty} />
//           <ProfessionalCard professionals={filteredProfessionals} />
//           <StickyCalendar />
//         </aside>
//         <Box className="display-calendar">
//           <FullCalendarEmisor customButtons={customButtons(handleOpenModal)} />
//         </Box>
//       </main>
//       <DoctorsAbsenceModal open={openModal} onClose={handleCloseModal} />
//     </div>
//   );
// };

// export default Calendar;

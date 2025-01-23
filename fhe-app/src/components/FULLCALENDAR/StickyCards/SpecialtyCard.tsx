// src/components/StickyCards/SpecialtyCard.tsx

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, Divider } from "@mui/material";
import "../../../CSS/calendar.css";
import StickyListCard from "./StickyListCard";
import { fetchAllSpecialties } from "../../../backendTwo/service/specialtyService";
import { Specialty } from "../../../backendTwo/model/model.specialty";

interface SpecialtyCardProps {
  onSelectSpecialty: (specialty: Specialty) => void;
}

export default function SpecialtyCard({ onSelectSpecialty }: SpecialtyCardProps) {
  const [specialties, setSpecialties] = useState<Specialty[]>([]);

  useEffect(() => {
    const loadSpecialties = async () => {
      try {
        const data = await fetchAllSpecialties();
        setSpecialties(data);
      } catch (error) {
        console.error("Error fetching specialties:", error);
      }
    };
    loadSpecialties();
  }, []);

  return (
    <Card className="tarjetas" sx={{ marginRight: "20px" }}>
      <CardContent>
        <CardHeader className="encabezado-tarjetas" title="Especialidad" />
        <Divider />
        <StickyListCard
          data={specialties.map((s) => ({
            nombre: s.specialty_name, // Mapeo para que coincida con StickyListCard
            ...s,
          }))}
          onItemSelect={onSelectSpecialty}
        />
      </CardContent>
    </Card>
  );
}

// import { Card, CardContent, CardHeader, Divider } from "@mui/material";
// import "../../../CSS/calendar.css";
// import StickyListCard from "./StickyListCard";
// import { listespecialities, Specialty } from "../../../backendMuckData/datas/Emisor/datacalendar/listcontent";

// interface SpecialtyCardProps {
//   onSelectSpecialty: (specialty: Specialty) => void;
// }

// export default function SpecialtyCard({ onSelectSpecialty }: SpecialtyCardProps) {
//   return (
//     <>
//       <Card className="tarjetas" sx={{ marginRight: "20px" }}>
//         <CardContent>
//           <CardHeader className="encabezado-tarjetas" title="Especialidad" />
//           <Divider />
//           <StickyListCard data={listespecialities} onItemSelect={onSelectSpecialty} />
//         </CardContent>
//       </Card>
//     </>
//   );
// }

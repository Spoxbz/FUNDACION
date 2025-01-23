// src/components/StickyCards/ProfessionalCard.tsx

import { Card, CardContent, CardHeader, Divider } from "@mui/material";
import "../../../CSS/calendar.css";
import StickyListCard from "./StickyListCard";
import { Employee } from "../../../backendTwo/model/model.employee"; // Asegúrate de tener la interfaz `Employee` importada

interface ProfessionalCardProps {
  professionals: Employee[];
}

export default function ProfessionalCard({ professionals }: ProfessionalCardProps) {
  return (
    <Card className="tarjetas" sx={{ marginRight: "20px" }}>
      <CardContent>
        <CardHeader className="encabezado-tarjetas" title="Profesionales" />
        <Divider />
        <StickyListCard
          data={professionals.map((prof) => ({ nombre: `${prof.employee_name} ${prof.employee_lastname}`, ...prof }))}
        />
      </CardContent>
    </Card>
  );
}

// import { Card, CardContent, CardHeader, Divider } from "@mui/material";
// import "../../../CSS/calendar.css";
// import StickyListCard from "./StickyListCard";
// import { Profesional } from "../../../backendMuckData/datas/Emisor/datacalendar/listcontent";

// interface ProfessionalCardProps {
//   professionals: Profesional[];
// }

// export default function ProfessionalCard({ professionals }: ProfessionalCardProps) {
//   return (
//     <>
//       <Card className="tarjetas" sx={{ marginRight: "20px" }}>
//         <CardContent>
//           <CardHeader className="encabezado-tarjetas" title="Profesionales" />
//           <Divider />
//           <StickyListCard data={professionals} />
//         </CardContent>
//       </Card>
//     </>
//   );
// }

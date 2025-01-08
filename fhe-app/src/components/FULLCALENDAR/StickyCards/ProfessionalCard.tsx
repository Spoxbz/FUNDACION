// src/components/StickyCards/ProfessionalCard.tsx

import { Card, CardContent, CardHeader, Divider } from "@mui/material";
import "../../../CSS/calendar.css";
import StickyListCard from "./StickyListCard";
import { Profesional } from "../../../backend/datas/Emisor/datacalendar/listcontent";

interface ProfessionalCardProps {
  professionals: Profesional[];
}

export default function ProfessionalCard({
  professionals,
}: ProfessionalCardProps) {
  return (
    <>
      <Card className="tarjetas" sx={{ marginRight: "20px" }}>
        <CardContent>
          <CardHeader className="encabezado-tarjetas" title="Profesionales" />
          <Divider />
          <StickyListCard data={professionals} />
        </CardContent>
      </Card>
    </>
  );
}

// src/components/StickyCards/SpecialtyCard.tsx

import { Card, CardContent, CardHeader, Divider } from "@mui/material";
import "../../CSS/calendar.css";
import StickyListCard from "./StickyListCard";
import {
  listespecialities,
  Specialty,
} from "../../backend/datas/Emisor/datacalendar/listcontent";

interface SpecialtyCardProps {
  onSelectSpecialty: (specialty: Specialty) => void;
}

export default function SpecialtyCard({
  onSelectSpecialty,
}: SpecialtyCardProps) {
  return (
    <>
      <Card className="tarjetas" sx={{ marginRight: "20px" }}>
        <CardContent>
          <CardHeader className="encabezado-tarjetas" title="Especialidad" />
          <Divider />
          <StickyListCard
            data={listespecialities}
            onItemSelect={onSelectSpecialty}
          />
        </CardContent>
      </Card>
    </>
  );
}

import { CardHeader, Divider } from "@mui/material";
import StickyListCard from "./StickyListCard";
//Estilos
import "../../CSS/calendar.css";
// Datos para listar los profesionales
import { professionallist } from "../../data/datacalendar/listcontent";
type ProfessionalBodyCardProps = {
  title: string;
};

export default function ProfessionBodyCard(props: ProfessionalBodyCardProps) {
  const { title } = props;

  return (
    <>
      <CardHeader className="encabezado-tarjetas" title={title} />
      <Divider />
      <div>
        <StickyListCard data={professionallist} />
      </div>
    </>
  );
}

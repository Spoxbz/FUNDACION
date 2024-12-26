import { CardHeader, Divider } from "@mui/material";
import StickyListCard from "./StickyListCard";
import "../../CSS/calendar.css";
// Datos para listar las especialidades
import { listespecialities } from "../../data/datacalendar/listcontent";

type SpecialtyCardBodyProps = {
  title: string;
};

export default function SpecialtyBodyCard(props: SpecialtyCardBodyProps) {
  const { title } = props;

  return (
    <>
      <CardHeader className="encabezado-tarjetas" title={title} />
      <Divider />
      <StickyListCard data={listespecialities} />
    </>
  );
}

import { CardHeader, Divider } from "@mui/material";
import StickyListCard from "./StickyListCard";
//Estilos
import "../../CSS/calendar.css";

type ProfessionalBodyCardProps = {
  title: string;
};

export default function ProfessionBodyCard(props: ProfessionalBodyCardProps) {
  const { title } = props;

  const professionallist: string[] = [
    "Don Alfonso",
    "Pablo Escobar",
    "Xavier Neruda",
    "Zoyla Vaca",
    "Profesional 5",
    "Profesional 6",
    "Profesional 7",
    "Profesional 8",
  ];
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

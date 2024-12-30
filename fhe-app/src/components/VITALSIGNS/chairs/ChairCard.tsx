import { Card, CardContent } from "@mui/material";
import "../../../CSS/chaircard.css";
import "../../../CSS/vitalsigns.css";
import ChairBodyCard from "./ChairBodyCard";

// Tipo de dato que se espera en la función ChairCard
interface ChairCardProps {
  id: string;
  title: string;
}

export default function ChairCard(props: ChairCardProps) {
  const { id, title } = props;
  return (
    <Card id={id} className="chair-card">
      <h1 className="encabezado">{title}</h1>
      <CardContent>
        <ChairBodyCard />
      </CardContent>
    </Card>
  );
}

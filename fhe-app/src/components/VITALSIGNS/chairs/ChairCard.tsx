import { Card, CardContent } from "@mui/material";
import "../../../CSS/chaircard.css";
import "../../../CSS/vitalsigns.css";
import ChairBodyCard from "./ChairBodyCard";

// Tipo de dato que se espera en la función ChairCard
interface ChairCardProps {
  title: string;
}

export default function ChairCard(props: ChairCardProps) {
  const title = props.title;
  return (
    <Card className="chair-card">
      <h1>{title}</h1>
      <CardContent>
        <ChairBodyCard />
      </CardContent>
    </Card>
  );
}

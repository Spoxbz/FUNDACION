import { Card, CardContent } from "@mui/material";
import ProfessionalBodyCard from "./ProfessionalBodyCard";
import "../../CSS/stickycards.css";

export default function ProfessionalCard() {
  return (
    <>
      <Card className="tarjetas">
        <CardContent>
          <ProfessionalBodyCard title="Profesionales" />
        </CardContent>
      </Card>
    </>
  );
}

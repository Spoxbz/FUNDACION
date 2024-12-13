import { Card, CardContent } from "@mui/material";
import ProfessionalBodyCard from "./ProfessionalBodyCard";
import "../../CSS/calendar.css";

export default function ProfessionalCard() {
  return (
    <>
      <Card className="tarjetas" sx={{ marginRight: "20px" }}>
        <CardContent>
          <ProfessionalBodyCard title="Profesionales" />
        </CardContent>
      </Card>
    </>
  );
}

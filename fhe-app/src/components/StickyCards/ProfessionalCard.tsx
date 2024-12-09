import { Card, CardContent } from "@mui/material";
import ProfessionalBodyCard from "./ProfessionalBodyCard";

export default function ProfessionalCard() {
  return (
    <>
      <Card>
        <CardContent>
          <ProfessionalBodyCard title="Profesionales" />
        </CardContent>
      </Card>
    </>
  );
}

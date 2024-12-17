import { Card, CardContent } from "@mui/material";
import SpecialtyBodyCard from "./SpecialtyBodyCard";
import "../../CSS/calendar.css";

export default function SpecialtyCard() {
  return (
    <>
      <Card className="tarjetas" sx={{ marginRight: "20px" }}>
        <CardContent>
          <SpecialtyBodyCard title={"Especialidad"} />
        </CardContent>
      </Card>
    </>
  );
}

import { Card, CardContent } from "@mui/material";
import SpecialtyBodyCard from "./SpecialtyBodyCard";

export default function SpecialtyCard() {
  return (
    <>
      <Card>
        <CardContent>
          <SpecialtyBodyCard title={"Especialidad"} />
        </CardContent>
      </Card>
    </>
  );
}

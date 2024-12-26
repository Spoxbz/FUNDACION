import { Stack, Typography } from "@mui/material";
//componentes
import HeaderDate from "../components/VITALSIGNS/HeaderDate";
import ListTablePacients from "../components/VITALSIGNS/listablepacient/ListTablePacients";
// Estilos
import "../CSS/vitalsigns.css";
import "../CSS/chaircard.css";
// Datos de prueba
import { pacientesData } from "../components/VITALSIGNS/pacientesData";
import ChairCard from "../components/VITALSIGNS/chairs/ChairCard";

// Datos para las cards de modulos

export default function VitalSigns() {
  return (
    <div className="container-vitalsigns">
      <div className="vts-header">
        <Stack sx={{ width: "15%" }}></Stack>
        <div className="vts-title">
          <Typography variant="h4">Signos Vitales</Typography>
        </div>
        <div className="vts-header-date">
          <HeaderDate />
        </div>
      </div>
      <div className="vts-main">
        <div className="vts-main-left">
          {/* Renderizamos múltiples tarjetas */}
          <ChairCard title="Modulo" />
        </div>
        <div className="vts-main-right">
          <ListTablePacients pacientes={pacientesData} />
        </div>
      </div>
    </div>
  );
}

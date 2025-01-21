import { Stack, Typography } from "@mui/material";
//componentes
import HeaderDate from "../components/VITALSIGNS/HeaderDate";
import ListTablePacients from "../components/VITALSIGNS/listablepacient/ListTablePacients";
import ChairCard from "../components/VITALSIGNS/chairs/ChairCard";

// Estilos
import "../CSS/vitalsigns.css";
import "../CSS/chaircard.css";
// Datos de prueba para listar en la tabla
import { pacientesData } from "../backendMuckData/datas/pacientesData";
// Datos para las cards de modulos
import { chairData } from "../backendMuckData/datas/datamodulesvitalsigns/datos";

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
          {/* Se renderizan multiples cards*/}
          {chairData.map((chair, index) => (
            <ChairCard key={index} id={`chair-${index}`} title={chair.title} />
          ))}
        </div>
        <div className="vts-main-right">
          <ListTablePacients pacientes={pacientesData} />
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Paper,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Tabs,
  Tab,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MedicalForm = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <div>
      {/* Header */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Ficha Médica</Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" style={{ marginTop: "20px" }}>
        {/* Información principal del paciente */}
        <Paper elevation={3} style={{ padding: "20px", marginBottom: "20px" }}>
          <Typography variant="h6">Información del Paciente</Typography>
          <Grid container spacing={2} style={{ marginTop: "10px" }}>
            <Grid item xs={12} sm={6}>
              <TextField label="Nombre del Paciente" fullWidth />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Edad" fullWidth />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Fecha de Consulta" type="date" fullWidth />
            </Grid>
          </Grid>
        </Paper>

        {/* Secciones colapsables */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Motivo de la Consulta</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              label="Descripción"
              multiline
              rows={4}
              fullWidth
              variant="outlined"
            />
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Revisión de Órganos y Examen Físico</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              label="Hallazgos"
              multiline
              rows={4}
              fullWidth
              variant="outlined"
            />
          </AccordionDetails>
        </Accordion>

        {/* Tabs para secciones adicionales */}
        <Paper elevation={3} style={{ marginTop: "20px" }}>
          <Tabs value={tabIndex} onChange={handleTabChange}>
            <Tab label="Diagnóstico" />
            <Tab label="Procedimientos" />
            <Tab label="Receta Médica" />
          </Tabs>
          <div style={{ padding: "20px" }}>
            {tabIndex === 0 && (
              <Typography>Formulario para Diagnóstico</Typography>
            )}
            {tabIndex === 1 && (
              <Typography>Formulario para Procedimientos</Typography>
            )}
            {tabIndex === 2 && (
              <Typography>Formulario para Receta Médica</Typography>
            )}
          </div>
        </Paper>

        {/* Botones de acción */}
        <Grid
          container
          justifyContent="flex-end"
          spacing={2}
          style={{ marginTop: "20px" }}
        >
          <Grid item>
            <Button variant="contained" color="primary">
              Guardar
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="secondary">
              Cancelar
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MedicalForm;

// import { Box } from "@mui/material";
// import PatientInfo from "../components/VITALSIGNS/chairs/sections/PacientInfo";

// // Estilos
// import "../CSS/medicaloffice.css";

// export default function MedicalOffice() {
//   return (
//     <Box className="medicaloffice">
//       <h1 className="mof-title">Ficha Médica</h1>
//       <div>
//         Info del paciente
//         <PatientInfo />
//       </div>
//       <div></div>
//     </Box>
//   );
// }

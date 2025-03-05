import { GridExpandMoreIcon } from "@mui/x-data-grid";
import "../../../CSS/medical_record/medicalrecordpage.css";
import { Accordion, AccordionDetails, AccordionSummary, TextField, Typography } from "@mui/material";
import React from "react";

export default function Top() {
  const [expandee, setExpandee] = React.useState<string | false>("panel1");

  // Control del manejo de la expansion de cada panel del acordeon
  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpandee(isExpanded ? panel : false);
  };
  const accordionSummaryStyle = {
    "&.Mui-expanded": {
      backgroundColor: "rgba(198, 205, 230, 0.5)",
    },
  };
  return (
    <>
      <div className="mr-top-container">
        <Accordion expanded={expandee === "panel1"} onChange={handleChange("panel1")}>
          <AccordionSummary
            expandIcon={<GridExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1-header"
            sx={accordionSummaryStyle}
          >
            <Typography component="span">Información del Turno</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="mr-top-info-turn">
              <TextField id="filled-basic" label="Turno" variant="filled" />
              <TextField id="filled-basic" label="Especialidad" variant="filled" />
              <TextField id="filled-basic" label="Médico" variant="filled" />
              <TextField
                id="filled-basic"
                label="Fecha"
                variant="filled"
                type="date"
                slotProps={{ inputLabel: { shrink: true } }}
              />
              <TextField
                id="filled-basic"
                label="F. Previa"
                variant="filled"
                type="date"
                slotProps={{ inputLabel: { shrink: true } }}
              />
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expandee === "panel2"} onChange={handleChange("panel2")}>
          <AccordionSummary
            expandIcon={<GridExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel1-header"
            sx={accordionSummaryStyle}
          >
            <Typography component="span">Información del Paciente</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="mr-top-info-patient">
              <TextField id="filled-basic" label="Paciente" variant="filled" />
              <TextField id="filled-basic" label="C.I" variant="filled" />
              <TextField id="filled-basic" label="H.C" variant="filled" />
              <TextField id="filled-basic" label="Edad" variant="filled" />
              <TextField id="filled-basic" label="Genero" variant="filled" />
            </div>
          </AccordionDetails>
        </Accordion>{" "}
        <Accordion expanded={expandee === "panel3"} onChange={handleChange("panel3")}>
          <AccordionSummary
            expandIcon={<GridExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel1-header"
            sx={accordionSummaryStyle}
          >
            <Typography component="span">Signos Vitales</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="mr-top-info-signs-patient">
              <TextField id="filled-basic" label="Temperatura" variant="filled" />
              <TextField id="filled-basic" label="Peso (Kg)" variant="filled" />
              <TextField id="filled-basic" label="Talla (cm)" variant="filled" />
              <TextField id="filled-basic" label="Saturación" variant="filled" />
              <TextField id="filled-basic" label="Tensión Art." variant="filled" />
              <TextField id="filled-basic" label="Pulso" variant="filled" />
              <TextField id="filled-basic" label="Frecuencia Res." variant="filled" />
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}

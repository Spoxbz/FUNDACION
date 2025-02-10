import { GridExpandMoreIcon } from "@mui/x-data-grid";
import "../../../CSS/medical_record/medicalrecordpage.css";
import { Accordion, AccordionDetails, AccordionSummary, TextField, Typography } from "@mui/material";

export default function Top() {
  const accordionSummaryStyle = {
    "&.Mui-expanded": {
      backgroundColor: "rgba(198, 205, 230, 0.5)",
    },
  };
  return (
    <>
      <div className="mr-top-container">
        <Accordion>
          <AccordionSummary
            expandIcon={<GridExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={accordionSummaryStyle}
          >
            <Typography component="span">Información del Turno</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="mr-top-info-turn">
              <TextField id="outlined-basic" label="Turno" variant="outlined" />
              <TextField id="outlined-basic" label="Especialidad" variant="outlined" />
              <TextField id="outlined-basic" label="Médico" variant="outlined" />
              <TextField
                id="outlined-basic"
                label="Fecha"
                variant="outlined"
                type="date"
                slotProps={{ inputLabel: { shrink: true } }}
              />
              <TextField
                id="outlined-basic"
                label="F. Previa"
                variant="outlined"
                type="date"
                slotProps={{ inputLabel: { shrink: true } }}
              />
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<GridExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={accordionSummaryStyle}
          >
            <Typography component="span">Información del Paciente</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="mr-top-info-patient">
              <TextField id="outlined-basic" label="Paciente" variant="outlined" />
              <TextField id="outlined-basic" label="C.I" variant="outlined" />
              <TextField id="outlined-basic" label="H.C" variant="outlined" />
              <TextField id="outlined-basic" label="Edad" variant="outlined" />
              <TextField id="outlined-basic" label="Genero" variant="outlined" />
            </div>
          </AccordionDetails>
        </Accordion>{" "}
        <Accordion>
          <AccordionSummary
            expandIcon={<GridExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={accordionSummaryStyle}
          >
            <Typography component="span">Signos Vitales</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="mr-top-info-patient">
              <TextField id="outlined-basic" label="Temperatura" variant="outlined" />
              <TextField id="outlined-basic" label="Peso (Kg)" variant="outlined" />
              <TextField id="outlined-basic" label="Talla (cm)" variant="outlined" />
              <TextField id="outlined-basic" label="Saturación" variant="outlined" />
              <TextField id="outlined-basic" label="Tensión Art." variant="outlined" />
              <TextField id="outlined-basic" label="Pulso" variant="outlined" />
              <TextField id="outlined-basic" label="Frecuencia Res." variant="outlined" />
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}

import { GridExpandMoreIcon } from "@mui/x-data-grid";
import "../../../CSS/medical_record/medicalrecordpage.css";
import { Accordion, AccordionDetails, AccordionSummary, TextField, Typography } from "@mui/material";

export default function Top() {
  return (
    <>
      <div className="mr-top-container">
        <Accordion>
          <AccordionSummary expandIcon={<GridExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
            <Typography component="span">Información del Turno</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="mr-top-info-turn">
              <TextField id="outlined-basic" label="Paciente" variant="outlined" />
              <TextField id="outlined-basic" label="Paciente" variant="outlined" />
              <TextField id="outlined-basic" label="Paciente" variant="outlined" />
              <TextField id="outlined-basic" label="Paciente" variant="outlined" />
              <TextField id="outlined-basic" label="Paciente" variant="outlined" />
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<GridExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
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
          <AccordionSummary expandIcon={<GridExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
            <Typography component="span">Accordion 1</Typography>
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
        </Accordion>
      </div>
    </>
  );
}

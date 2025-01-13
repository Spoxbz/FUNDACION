import React, { useState, useEffect } from "react";
import {
  Modal,
  Box,
  TextField,
  Button,
  Grid,
  Paper,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { getFixedEvents } from "../events"; // Ajusta la ruta según tu archivo de datos

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface TurnModalProps {
  open: boolean;
  onClose: () => void;
  eventData: any;
  isNewEvent: boolean;
}

const TurnModal: React.FC<TurnModalProps> = ({ open, onClose, eventData, isNewEvent }) => {
  const [cedula, setCedula] = useState("");
  const [turnoInfo, setTurnoInfo] = useState({
    doctor: "",
    patient: "",
    cedula: "",
    phone: "",
    turno: "",
    consultorio: "",
    remarks: "",
  });
  const [selectedOption, setSelectedOption] = useState("emitir");

  useEffect(() => {
    if (eventData) {
      setTurnoInfo(eventData);
      if (!isNewEvent) {
        setCedula(eventData.cedula || "");
      }
    }
  }, [eventData, isNewEvent]);

  const handleCedulaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCedula(event.target.value);
  };

  const handleObservationsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTurnoInfo({ ...turnoInfo, remarks: event.target.value });
  };

  const handleBuscarTurno = () => {
    const eventos = getFixedEvents(); // Simula los datos con tu mock
    const turno = eventos.find((evento) => evento.extendedProps.cedula === cedula);
    setTurnoInfo(
      turno
        ? {
            doctor: turno.extendedProps.doctor,
            patient: turno.extendedProps.patient,
            cedula: turno.extendedProps.cedula,
            phone: turno.extendedProps.phone,
            turno: turno.extendedProps.turno,
            consultorio: turno.extendedProps.consultorio,
            remarks: turno.extendedProps.remarks,
          }
        : {
            doctor: "",
            patient: "",
            cedula: "",
            phone: "",
            turno: "",
            consultorio: "",
            remarks: "",
          }
    );
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleEmitirTurno = () => {
    console.log("Turno emitido:", turnoInfo);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="modal-title" aria-describedby="modal-description">
      <Box sx={style}>
        <Paper elevation={3} style={{ padding: 16 }}>
          <Typography id="modal-title" variant="h6" gutterBottom>
            {isNewEvent ? "Crear Turno" : "Editar Turno"}
          </Typography>
          <RadioGroup row value={selectedOption} onChange={handleOptionChange}>
            <FormControlLabel value="emitir" control={<Radio />} label="Emitir" />
            <FormControlLabel value="reservar" control={<Radio />} label="Reservar" />
          </RadioGroup>
          <Grid container spacing={2}>
            {isNewEvent && selectedOption === "emitir" && (
              <>
                <Grid item xs={12}>
                  <TextField label="Cédula" value={cedula} onChange={handleCedulaChange} fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="primary" onClick={handleBuscarTurno} fullWidth>
                    Buscar
                  </Button>
                </Grid>
              </>
            )}
            <Grid item xs={12}>
              <TextField label="Doctor" value={turnoInfo.doctor} fullWidth disabled />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Paciente" value={turnoInfo.patient} fullWidth disabled />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Cédula" value={turnoInfo.cedula} fullWidth disabled />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Teléfono" value={turnoInfo.phone} fullWidth disabled />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Turno" value={turnoInfo.turno} fullWidth disabled />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Observaciones"
                value={turnoInfo.remarks}
                onChange={handleObservationsChange}
                fullWidth
                disabled={selectedOption === "reservar"}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="secondary" onClick={handleEmitirTurno} fullWidth>
                {isNewEvent ? "Emitir" : "Guardar"}
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button variant="outlined" color="primary" onClick={onClose} fullWidth>
                Cerrar
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Modal>
  );
};

export default TurnModal;

// import React, { useState, useEffect } from "react";
// import { Modal, Box, TextField, Button, Grid, Paper, Typography } from "@mui/material";
// import { getFixedEvents } from "../events"; // Ajusta la ruta según tu archivo de datos

// const style = {
//   position: "absolute" as const,
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

// interface TurnModalProps {
//   open: boolean;
//   onClose: () => void;
//   eventData: any;
//   isNewEvent: boolean;
// }

// const TurnModal: React.FC<TurnModalProps> = ({ open, onClose, eventData, isNewEvent }) => {
//   const [cedula, setCedula] = useState("");
//   const [turnoInfo, setTurnoInfo] = useState({
//     doctor: "",
//     patient: "",
//     cedula: "",
//     phone: "",
//     turno: "",
//     consultorio: "",
//   });

//   useEffect(() => {
//     if (eventData) {
//       setTurnoInfo(eventData);
//       if (!isNewEvent) {
//         setCedula(eventData.cedula || "");
//       }
//     }
//   }, [eventData, isNewEvent]);

//   const handleCedulaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setCedula(event.target.value);
//   };

//   const handleBuscarTurno = () => {
//     const eventos = getFixedEvents(); // Simula los datos con tu mock
//     const turno = eventos.find((evento) => evento.extendedProps.cedula === cedula);
//     setTurnoInfo(
//       turno
//         ? {
//             doctor: turno.extendedProps.doctor,
//             patient: turno.extendedProps.patient,
//             cedula: turno.extendedProps.cedula,
//             phone: turno.extendedProps.phone,
//             turno: turno.extendedProps.turno,
//             consultorio: turno.extendedProps.consultorio,
//           }
//         : {
//             doctor: "",
//             patient: "",
//             cedula: "",
//             phone: "",
//             turno: "",
//             consultorio: "",
//           }
//     );
//   };

//   const handleEmitirTurno = () => {
//     console.log("Turno emitido:", turnoInfo);
//     onClose();
//   };

//   return (
//     <Modal open={open} onClose={onClose} aria-labelledby="modal-title" aria-describedby="modal-description">
//       <Box sx={style}>
//         <Paper elevation={3} style={{ padding: 16 }}>
//           <Typography id="modal-title" variant="h6" gutterBottom>
//             {isNewEvent ? "Crear Turno" : "Editar Turno"}
//           </Typography>
//           <Grid container spacing={2}>
//             {isNewEvent && (
//               <>
//                 <Grid item xs={12}>
//                   <TextField label="Cédula" value={cedula} onChange={handleCedulaChange} fullWidth />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <Button variant="contained" color="primary" onClick={handleBuscarTurno} fullWidth>
//                     Buscar
//                   </Button>
//                 </Grid>
//               </>
//             )}
//             <Grid item xs={12}>
//               <TextField label="Doctor" value={turnoInfo.doctor} fullWidth disabled />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField label="Paciente" value={turnoInfo.patient} fullWidth disabled />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField label="Cédula" value={turnoInfo.cedula} fullWidth disabled />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField label="Teléfono" value={turnoInfo.phone} fullWidth disabled />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField label="Turno" value={turnoInfo.turno} fullWidth disabled />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField label="Consultorio" value={turnoInfo.consultorio} fullWidth disabled />
//             </Grid>
//             <Grid item xs={12}>
//               <Button variant="contained" color="secondary" onClick={handleEmitirTurno} fullWidth>
//                 {isNewEvent ? "Emitir" : "Guardar"}
//               </Button>
//             </Grid>
//             <Grid item xs={12}>
//               <Button variant="outlined" color="primary" onClick={onClose} fullWidth>
//                 Cerrar
//               </Button>
//             </Grid>
//           </Grid>
//         </Paper>
//       </Box>
//     </Modal>
//   );
// };

// export default TurnModal;

// import React, { useState } from "react";
// import { Modal, Box, TextField, Button, Grid, Paper, Typography } from "@mui/material";
// import { getFixedEvents } from "../events"; // Ajusta la ruta a tu archivo de datos

// const style = {
//   position: "absolute" as const,
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

// const TurnModal: React.FC = () => {
//   const [open, setOpen] = useState(false);
//   const [cedula, setCedula] = useState("");
//   const [turnoInfo, setTurnoInfo] = useState({
//     doctor: "",
//     patient: "",
//     cedula: "",
//     phone: "",
//     turno: "",
//     consultorio: "",
//   });

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const handleCedulaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setCedula(event.target.value);
//   };

//   const handleBuscarTurno = () => {
//     const eventos = getFixedEvents();
//     const turno = eventos.find((evento) => evento.extendedProps.cedula === cedula);
//     setTurnoInfo(
//       turno
//         ? {
//             doctor: turno.extendedProps.doctor,
//             patient: turno.extendedProps.patient,
//             cedula: turno.extendedProps.cedula,
//             phone: turno.extendedProps.phone,
//             turno: turno.extendedProps.turno,
//             consultorio: turno.extendedProps.consultorio,
//           }
//         : {
//             doctor: "",
//             patient: "",
//             cedula: "",
//             phone: "",
//             turno: "",
//             consultorio: "",
//           }
//     );
//   };

//   const handleEmitirTurno = () => {
//     // Aquí iría la lógica para emitir el turno en la fecha seleccionada
//     console.log("Turno emitido:", turnoInfo);
//     handleClose();
//   };

//   return (
//     <div>
//       <Button variant="contained" color="primary" onClick={handleOpen}>
//         Abrir Modal
//       </Button>
//       <Modal open={open} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description">
//         <Box sx={style}>
//           <Paper elevation={3} style={{ padding: 16 }}>
//             <Typography id="modal-title" variant="h6" gutterBottom>
//               Buscar Turno
//             </Typography>
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <TextField label="Cédula" value={cedula} onChange={handleCedulaChange} fullWidth />
//               </Grid>
//               <Grid item xs={12}>
//                 <Button variant="contained" color="primary" onClick={handleBuscarTurno} fullWidth>
//                   Buscar
//                 </Button>
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField label="Doctor" value={turnoInfo.doctor} fullWidth disabled />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField label="Paciente" value={turnoInfo.patient} fullWidth disabled />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField label="Cédula" value={turnoInfo.cedula} fullWidth disabled />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField label="Teléfono" value={turnoInfo.phone} fullWidth disabled />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField label="Turno" value={turnoInfo.turno} fullWidth disabled />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField label="Consultorio" value={turnoInfo.consultorio} fullWidth disabled />
//               </Grid>
//               <Grid item xs={12}>
//                 <Button variant="contained" color="secondary" onClick={handleEmitirTurno} fullWidth>
//                   Emitir
//                 </Button>
//               </Grid>
//               <Grid item xs={12}>
//                 <Button variant="outlined" color="primary" onClick={handleClose} fullWidth>
//                   Cerrar
//                 </Button>
//               </Grid>
//             </Grid>
//           </Paper>
//         </Box>
//       </Modal>
//     </div>
//   );
// };

// export default TurnModal;

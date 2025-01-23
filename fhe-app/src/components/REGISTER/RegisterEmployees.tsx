import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
// Estilos
import "../../CSS/adminsidebaroptions/registeremployees.css";
import { FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, Typography } from "@mui/material";
import { Mail, Person } from "@mui/icons-material";
// Import para usar selects desplegables
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { client } from "../../backendTwo/api/client";

export default function RegisterEmployees() {
  // constantes para abrir/cerrar el modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Seleccion de especialidades listadas
  const [specialty, setSpecialty] = useState("");

  //Funcion para listar las especialides
  const handleChange = (event: SelectChangeEvent) => {
    setSpecialty(event.target.value as string);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Registrar emleados</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableEscapeKeyDown
      >
        <Box className="cont-form">
          <div>
            <Typography className="title-cont-camps-employee" variant="h6">
              Registrar Usuario
            </Typography>
            <div className="cont-camps-employee">
              {/* Campo para los nombres*/}
              <FormControl variant="outlined">
                <InputLabel htmlFor="camp-employee-name">Nombres</InputLabel>
                <OutlinedInput
                  label="C.I"
                  id="camp-employee-name"
                  className="camps"
                  endAdornment={
                    <InputAdornment position="end">
                      <Person />
                    </InputAdornment>
                  }
                  aria-describedby="outlined-employee-helper-text"
                  inputProps={{
                    "aria-label": "nombres empleado",
                  }}
                />
              </FormControl>
              {/* Campo para los apellidos*/}
              <FormControl variant="outlined">
                <InputLabel htmlFor="camp-employee-lastname">Apellidos</InputLabel>
                <OutlinedInput
                  id="camp-employee-lastname"
                  className="camps"
                  endAdornment={
                    <InputAdornment position="end">
                      <Person />
                    </InputAdornment>
                  }
                  aria-describedby="outlined-employee-helper-text"
                  inputProps={{
                    "aria-label": "apellidos empleados",
                  }}
                />
              </FormControl>
              {/* Campo para los cedula*/}
              <FormControl variant="outlined">
                <InputLabel htmlFor="camp-employee-ci">C.I</InputLabel>
                <OutlinedInput
                  id="camp-employee-ci"
                  className="camps"
                  endAdornment={
                    <InputAdornment position="end">
                      <Person />
                    </InputAdornment>
                  }
                  aria-describedby="outlined-employee-helper-text"
                  inputProps={{
                    "aria-label": "cedula empleado",
                  }}
                />
              </FormControl>
              {/* Campo para los genero*/}
              <FormControl variant="outlined">
                <InputLabel htmlFor="camp-employee-gender">Género</InputLabel>
                <OutlinedInput
                  id="camp-employee-gender"
                  className="camps"
                  endAdornment={
                    <InputAdornment position="end">
                      <Person />
                    </InputAdornment>
                  }
                  aria-describedby="outlined-employee-helper-text"
                  inputProps={{
                    "aria-label": "genero empleado",
                  }}
                />
              </FormControl>
              {/* Campo para los fehca nacimiento*/}
              <FormControl variant="outlined">
                <InputLabel htmlFor="camp-employee-borndate">Fecha de nacimiento</InputLabel>
                <OutlinedInput
                  id="camp-employee-borndate"
                  className="camps"
                  endAdornment={
                    <InputAdornment position="end">
                      <Person />
                    </InputAdornment>
                  }
                  aria-describedby="outlined-employee-helper-text"
                  inputProps={{
                    "aria-label": "fecha nacimiento empleado",
                  }}
                />
              </FormControl>
              {/* Campo para los fehca edad*/}
              <FormControl variant="outlined">
                <InputLabel htmlFor="camp-employee-edad">Edad</InputLabel>
                <OutlinedInput
                  id="camp-employee-edad"
                  className="camps"
                  endAdornment={
                    <InputAdornment position="end">
                      <Person />
                    </InputAdornment>
                  }
                  aria-describedby="outlined-employee-helper-text"
                  inputProps={{
                    "aria-label": "edad empleado",
                  }}
                />
              </FormControl>
              {/* Campo para el num celular*/}
              <FormControl variant="outlined">
                <InputLabel htmlFor="camp-employee-cellphone">Número celular</InputLabel>
                <OutlinedInput
                  id="camp-employee-cellphone"
                  className="camps"
                  endAdornment={
                    <InputAdornment position="end">
                      <Person />
                    </InputAdornment>
                  }
                  aria-describedby="outlined-employee-helper-text"
                  inputProps={{
                    "aria-label": "numero celular empleado",
                  }}
                />
              </FormControl>
              {/* Campo para telefono*/}
              <FormControl variant="outlined">
                <InputLabel htmlFor="camp-employee-phone">Teléfono</InputLabel>
                <OutlinedInput
                  id="camp-employee-phone"
                  className="camps"
                  endAdornment={
                    <InputAdornment position="end">
                      <Person />
                    </InputAdornment>
                  }
                  aria-describedby="outlined-employee-helper-text"
                  inputProps={{
                    "aria-label": "numero teléfono empleado",
                  }}
                />
              </FormControl>
              {/* Campo para correo*/}
              <FormControl variant="outlined">
                <InputLabel htmlFor="camp-employee-email">Correo electrónico</InputLabel>
                <OutlinedInput
                  id="camp-employee-email"
                  className="camps"
                  endAdornment={
                    <InputAdornment position="end">
                      <Mail />
                    </InputAdornment>
                  }
                  aria-describedby="outlined-employee-helper-text"
                  inputProps={{
                    "aria-label": "email empleado",
                  }}
                />
              </FormControl>
              {/* Campo para username*/}
              <FormControl variant="outlined">
                <InputLabel htmlFor="camp-employee-username">Nombre de usuario</InputLabel>
                <OutlinedInput
                  id="camp-employee-username"
                  className="camps"
                  endAdornment={
                    <InputAdornment position="end">
                      <Mail />
                    </InputAdornment>
                  }
                  aria-describedby="outlined-employee-helper-text"
                  inputProps={{
                    "aria-label": "nombe de usuario empleado",
                  }}
                />
              </FormControl>
              {/* Campo para password*/}
              <FormControl variant="outlined">
                <InputLabel htmlFor="camp-employee-password">Contraseña</InputLabel>
                <OutlinedInput
                  id="camp-employee-password"
                  className="camps"
                  endAdornment={
                    <InputAdornment position="end">
                      <Mail />
                    </InputAdornment>
                  }
                  aria-describedby="outlined-employee-helper-text"
                  inputProps={{
                    "aria-label": "contraseña del empleado",
                  }}
                />
              </FormControl>
              {/* Campo para dirección de domicilio*/}
              <FormControl variant="outlined">
                <InputLabel htmlFor="camp-employee-address">Dirección</InputLabel>
                <OutlinedInput
                  id="camp-employee-address"
                  className="camps"
                  endAdornment={
                    <InputAdornment position="end">
                      <Mail />
                    </InputAdornment>
                  }
                  aria-describedby="outlined-employee-helper-text"
                  inputProps={{
                    "aria-label": "dirección del empleado",
                  }}
                />
              </FormControl>
              {/*Campo para asignar un rol de empleado*/}
              <FormControl variant="outlined">
                <InputLabel htmlFor="camp-employee-role">Rol</InputLabel>
                <OutlinedInput
                  id="camp-employee-role"
                  className="camps"
                  endAdornment={
                    <InputAdornment position="end">
                      <Mail />
                    </InputAdornment>
                  }
                  aria-describedby="outlined-employee-helper-text"
                  inputProps={{
                    "aria-label": "rol del empleado",
                  }}
                />
              </FormControl>
            </div>
          </div>
          <div>
            <Typography variant="h6">Asignar especialidad al medico</Typography>
            <div className="cont-select-specialty">
              <FormControl>
                <InputLabel htmlFor="id_camp_employee_created">Value</InputLabel>
                <OutlinedInput
                  id="id_camp_employee_created"
                  className="camps"
                  endAdornment={
                    <InputAdornment position="end">
                      <Mail />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Box sx={{ minWidth: 120 }}>
                <FormControl>
                  <InputLabel id="demo-simple-select-label">Especialidad</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={specialty}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

// export default function RegisterEmployees() {
//     const [open, setOpen] = useState(false);
//     const [specialty, setSpecialty] = useState("");
//     const [employeeData, setEmployeeData] = useState({
//       name: "",
//       lastname: "",
//       ci: "",
//       gender: "",
//       borndate: "",
//       edad: "",
//       cellphone: "",
//       username: "",
//       password: "",
//       role: ""
//     });

//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);

//     const handleChange = (event) => {
//       setSpecialty(event.target.value);
//     };

//     const handleInputChange = (e) => {
//       setEmployeeData({ ...employeeData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async () => {
//       const { error } = await client
//         .from('employee')
//         .insert([employeeData]);

//       if (error) {
//         console.error("Error al crear el usuario:", error.message);
//       } else {
//         console.log("Usuario creado exitosamente");
//         handleClose(); // Cerrar el modal después de una inserción exitosa
//       }
//     };

//     return (
//       <div>
//         <Button onClick={handleOpen}>Registrar empleados</Button>
//         <Modal
//           open={open}
//           onClose={handleClose}
//           aria-labelledby="modal-modal-title"
//           aria-describedby="modal-modal-description"
//           disableEscapeKeyDown
//         >
//           <Box className="cont-form">
//             <div>
//               <Typography className="title-cont-camps-employee" variant="h6">
//                 Registrar Usuario
//               </Typography>
//               <div className="cont-camps-employee">
//                 {/* Campo para los nombres*/}
//                 <FormControl variant="outlined">
//                   <InputLabel htmlFor="camp-employee-name">Nombres</InputLabel>
//                   <OutlinedInput
//                     label="Nombres"
//                     id="camp-employee-name"
//                     name="name"
//                     className="camps"
//                     endAdornment={<InputAdornment position="end"><Person /></InputAdornment>}
//                     aria-describedby="outlined-employee-helper-text"
//                     inputProps={{ "aria-label": "nombres empleado" }}
//                     onChange={handleInputChange}
//                   />
//                 </FormControl>

//                 {/* Resto de los campos... */}

//                 {/* Campo para username*/}
//                 <FormControl variant="outlined">
//                   <InputLabel htmlFor="camp-employee-username">Nombre de usuario</InputLabel>
//                   <OutlinedInput
//                     id="camp-employee-username"
//                     name="username"
//                     className="camps"
//                     endAdornment={<InputAdornment position="end"><Mail /></InputAdornment>}
//                     aria-describedby="outlined-employee-helper-text"
//                     inputProps={{ "aria-label": "nombre de usuario empleado" }}
//                     onChange={handleInputChange}
//                   />
//                 </FormControl>

//                 <Button onClick={handleSubmit}>Crear Usuario</Button>
//               </div>
//             </div>
//           </Box>
//         </Modal>
//       </div>
//     );
//   }

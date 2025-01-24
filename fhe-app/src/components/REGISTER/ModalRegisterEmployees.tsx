/**
 * * Este modal sera para cuando el usuario adminitrador requiera crear/registrar un nuevo empleado en el sistema
 * * Este modal form es usado por ConfEmployeePage.tsx --> C:\Users\Usuario\Desktop\TESIS\DEVELOPMENT\FUNDACION\fhe-app\src\pages\admin\ConfEmployeePage.tsx
 * * Este modal form usa la funcion createEmployee declarada en employeeService.tsx
 */

import { useState } from "react";
// Estilos
import "../../CSS/adminsidebaroptions/registeremployees.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { FormControl, InputAdornment, InputLabel, OutlinedInput, Typography } from "@mui/material";
import { Mail, Person } from "@mui/icons-material";
// Import para traer la funcion que registra empleados
import { createEmployee } from "../../backendTwo/service/employeeService"; // Asegúrate de que la ruta sea correcta

export default function ModalRegisterEmployees() {
  const [open, setOpen] = useState(false);

  // Estado para los datos del formulario
  const [formData, setFormData] = useState({
    employee_name: "",
    employee_lastname: "",
    employee_ci: "",
    employee_gender: "",
    employee_born_date: "",
    employee_age: "",
    employee_phone_number: "",
    employee_cellphone_number: "",
    employee_email: "",
    username: "",
    password: "",
    employee_address: "",
    rol_id: "",
  });

  // Estado para manejar mensaje de exito o error
  const [message, setMessage] = useState<string | null>(null);

  // Manejar cambios en los campos del formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Evitar recargar la página
    try {
      // Llamar al servicio con los datos del formulario
      const newEmployee = await createEmployee(formData);
      setMessage(`Empleado creado con éxito: ${newEmployee.employee_name}`);
      setFormData({
        employee_name: "",
        employee_lastname: "",
        employee_ci: "",
        employee_gender: "",
        employee_born_date: "",
        employee_age: "",
        employee_phone_number: "",
        employee_cellphone_number: "",
        employee_email: "",
        username: "",
        password: "",
        employee_address: "",
        rol_id: "",
      }); // Resetear el formulario
    } catch (error) {
      setMessage(`Error al crear el empleado: ${(error as Error).message}`);
    }
  };

  // constantes para abrir/cerrar el modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            {message && <p>{message}</p>}
            <div onSubmit={handleSubmit} className="cont-camps-employee">
              {/* Campo para los nombres*/}
              <FormControl variant="outlined">
                <InputLabel htmlFor="camp-employee-name">Nombres</InputLabel>
                <OutlinedInput
                  className="camps"
                  label="Nombres"
                  type="text"
                  id="camp-employee-name"
                  name="employee_name"
                  value={formData.employee_name}
                  onChange={handleChange}
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
                  label="Apellidos"
                  id="camp-employee-lastname"
                  name="employee_lastname"
                  className="camps"
                  value={formData.employee_lastname}
                  onChange={handleChange}
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
                  label="C.I"
                  id="camp-employee-ci"
                  name="employee_ci"
                  className="camps"
                  value={formData.employee_ci}
                  onChange={handleChange}
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
                  label="Género"
                  id="camp-employee-gender"
                  name="employee_gender"
                  className="camps"
                  value={formData.employee_gender}
                  onChange={handleChange}
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
                  label="Fecha de nacimiento"
                  id="camp-employee-borndate"
                  name="employee_born_date"
                  className="camps"
                  value={formData.employee_born_date}
                  onChange={handleChange}
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
                  label="Edad"
                  id="camp-employee-edad"
                  name="employee_age"
                  className="camps"
                  value={formData.employee_age}
                  onChange={handleChange}
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
                  label="Número celular"
                  id="camp-employee-cellphone"
                  name="employee_cellphone_number"
                  className="camps"
                  value={formData.employee_cellphone_number}
                  onChange={handleChange}
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
                  label="Teléfono"
                  id="camp-employee-phone"
                  name="employee_phone_number"
                  className="camps"
                  value={formData.employee_phone_number}
                  onChange={handleChange}
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
                  className="camps"
                  label="Correo electrónico"
                  id="camp-employee-email"
                  name="employee_email"
                  value={formData.employee_email}
                  onChange={handleChange}
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
                  label="Nombre de usuario"
                  id="camp-employee-username"
                  name="username"
                  className="camps"
                  value={formData.username}
                  onChange={handleChange}
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
                  label="Contraseña"
                  id="camp-employee-password"
                  name="password"
                  className="camps"
                  value={formData.password}
                  onChange={handleChange}
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
                  label="Dirección"
                  id="camp-employee-address"
                  name="employee_address"
                  className="camps"
                  value={formData.employee_address}
                  onChange={handleChange}
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
                  label="Rol"
                  id="camp-employee-role"
                  name="rol_id"
                  className="camps"
                  value={formData.rol_id}
                  onChange={handleChange}
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
            <Button onClick={handleSubmit} sx={{ background: "#0F6FB9", color: "white" }}>
              Registrar Empleado
            </Button>
          </div>
          <br />
          <hr />
          <br />
          <div>
            <Typography variant="h6">Asignar especialidad al medico</Typography>
            <div className="cont-camps-select-specialty">
              <FormControl>
                <InputLabel htmlFor="id_camp_employee_created">Empleado</InputLabel>
                <OutlinedInput
                  label="Empleado"
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
                  <InputLabel htmlFor="demo-simple-select-label">Especialidad</InputLabel>
                  <OutlinedInput
                    id="demo-simple-select-label"
                    label="Especialidad"
                    onChange={handleChange}
                    className="select-specialty"
                  />
                </FormControl>
              </Box>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

/**
 <div>
      <h2>Registrar Nuevo Empleado</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nombre:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Correo Electrónico:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Rol:
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit">Registrar Empleado</button>
      </form>
    </div>
 */

/**
 * * Este modal sera para cuando el usuario adminitrador requiera crear/registrar un nuevo empleado en el sistema
 * * Este modal form es usado por ConfEmployeePage.tsx --> C:\Users\Usuario\Desktop\TESIS\DEVELOPMENT\FUNDACION\fhe-app\src\pages\admin\ConfEmployeePage.tsx
 * * Este modal form usa la funcion createEmployee declarada en employeeService.tsx
 */

import { useEffect, useState } from "react";
// Estilos
import "../../../CSS/admin/registeremployees.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import {
  Autocomplete,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import {
  AccountCircle,
  AddCircleOutline,
  AssignmentInd,
  Cake,
  Home,
  LocalPhone,
  Mail,
  Password,
  Person,
  PhoneAndroid,
} from "@mui/icons-material";
// Import para traer la funcion que registra empleados
import { createEmployee, fetchEmployees } from "../../../backendTwo/service/employeeService";
// Import del rolservice
import { fetchRoles } from "../../../backendTwo/service/roleService";
import { Employee } from "../../../backendTwo/model/model.employee";

export default function ModalRegisterEmployees() {
  const [open, setOpen] = useState(false);
  // Constantes de roles
  const [roles, setRoles] = useState<{ rol_id: number; rol_name: string }[]>([]);
  // Constantes para manejar empleados medicos para signarlse especialidades
  const [employees, setEmployees] = useState<Employee[]>([]); // Lista de empleados con rol médico
  const [searchQuery] = useState(""); // Para manejar la búsqueda

  // Cargar los roles al iniciar el componente
  useEffect(() => {
    const loadRoles = async () => {
      try {
        const rolesData = await fetchRoles();
        setRoles(rolesData);
      } catch (error) {
        console.error("Error cargando roles:", error);
      }
    };

    // Cargar empleados
    const loadEmployees = async () => {
      try {
        const employeesData = await fetchEmployees();
        // Filtramos solo los empleados con rol médico (rol_id = 4)
        const filteredEmployees = employeesData.filter((emp) => emp.rol_id === 4);
        setEmployees(filteredEmployees);
      } catch (error) {
        console.error("Error cargando empleados:", error);
      }
    };

    loadRoles();
    loadEmployees();
  }, []);

  // Estado para los datos del formulario
  const [formData, setFormData] = useState({
    employee_name: "",
    employee_lastname: "",
    employee_ci: 0,
    employee_gender: "",
    employee_born_date: "",
    employee_age: 0,
    employee_phone_number: 0,
    employee_cellphone_number: 0,
    employee_email: "",
    username: "",
    password: "",
    employee_address: "",
    rol_id: 0,
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
        employee_ci: 0,
        employee_gender: "",
        employee_born_date: "",
        employee_age: 0,
        employee_phone_number: 0,
        employee_cellphone_number: 0,
        employee_email: "",
        username: "",
        password: "",
        employee_address: "",
        rol_id: 0,
      }); // Resetear el formulario
    } catch (error) {
      setMessage(`Error al crear el empleado: ${(error as Error).message}`);
    }
  };

  const resetForm = () => {
    setFormData({
      employee_name: "",
      employee_lastname: "",
      employee_ci: 0,
      employee_gender: "",
      employee_born_date: "",
      employee_age: 0,
      employee_phone_number: 0,
      employee_cellphone_number: 0,
      employee_email: "",
      username: "",
      password: "",
      employee_address: "",
      rol_id: 0, // También reiniciamos el rol
    });
    setMessage(null); // Limpiamos cualquier mensaje de éxito/error
  };

  // Filtrar empleados según la búsqueda
  const filteredEmployees = employees.filter((employee) =>
    employee.employee_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // constantes para abrir/cerrar el modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button className="btn-modal-regEmployee" onClick={handleOpen}>
        <AddCircleOutline />
        Nuevo
      </Button>
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
                      <AssignmentInd />
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
                      <Cake />
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
                  endAdornment={<InputAdornment position="end"></InputAdornment>}
                  aria-describedby="outlined-employee-helper-text"
                  inputProps={{
                    "aria-label": "edad empleado",
                  }}
                />
              </FormControl>
              {/* Campo para el num celular*/}
              <FormControl variant="outlined">
                <InputLabel htmlFor="camp-employee-cellphone">Celular</InputLabel>
                <OutlinedInput
                  label="Celular"
                  id="camp-employee-cellphone"
                  name="employee_cellphone_number"
                  className="camps"
                  value={formData.employee_cellphone_number}
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <PhoneAndroid />
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
                      <LocalPhone />
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
                      <AccountCircle />
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
                      <Password />
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
                      <Home />
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
                <Autocomplete
                  className="camps"
                  sx={{ width: 230, height: "50px" }}
                  id="camp-employee-role"
                  options={roles} // Aquí usas los roles
                  getOptionLabel={(role) => role.rol_name} // Muestra el nombre del rol
                  value={roles.find((role) => role.rol_id === formData.rol_id) || null} // Asegúrate de mostrar el rol seleccionado
                  onChange={(event, newValue) => {
                    setFormData({ ...formData, rol_id: newValue ? newValue.rol_id : 0 }); // Actualiza el rol en el formData
                  }}
                  renderInput={(params) => <TextField {...params} label="Rol" />}
                />
              </FormControl>
            </div>
            <div className="footer-form">
              <Button onClick={handleSubmit} sx={{ background: "#0F6FB9", color: "white" }}>
                Registrar Empleado
              </Button>
              <Button onClick={resetForm} sx={{ background: "#B90F0F", color: "white" }}>
                Cancelar
              </Button>
            </div>
          </div>
          <br />
          <hr />
          <br />
          <div>
            <Typography variant="h6">Asignar especialidad al medico</Typography>
            <div className="cont-camps-select-specialty">
              <FormControl>
                <Autocomplete
                  id="id_camp_employee_created"
                  className="select-medic-employee"
                  options={filteredEmployees}
                  getOptionLabel={(employee) => `${employee.employee_name} ${employee.employee_lastname}`}
                  renderInput={(params) => <TextField {...params} label="Empleado" />}
                  onChange={(value) => console.log("Empleado seleccionado:", value)}
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
          <Button color="warning" onClick={handleClose}>
            Cerrar
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

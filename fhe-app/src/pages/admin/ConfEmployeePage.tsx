/**
 * * Esta pagina sirve para poder listar todos los empleados registrados y poder crearlos, editarlos y eliminarlos
 * * Cuando se quiera crear un empleado, el boton que corresponda a esa accion, abrira un modal --> ModalRegisterEmployees.tsx (C:\Users\Usuario\Desktop\TESIS\DEVELOPMENT\FUNDACION\fhe-app\src\components\REGISTER\ModalRegisterEmployees.tsx)
 * * Este componente usa una tabla para listar los empleados,
 * * la tabla es la misma que la de jose
 */
// Import de los estilos
import "../../CSS/admin/confemployeepage.css";
import ModalRegisterEmployees from "../../components/REGISTER/ModalRegisterEmployees";
import DeleteDialog from "../../components/REGISTER/DeleteDialog";
// Import de componentes de la tabla
import EmployeeTable from "../../components/ADMIN/EmployeeTable";
import { TextField } from "@mui/material";
import { Paper } from "@mui/material";
import { Snackbar, Alert } from "@mui/material";
import { useState } from "react";
import { Employee } from "../../backendTwo/model/model.employee";
// Servicio para borrado de empleados
import { deleteEmployee } from "../../backendTwo/service/employeeService";

export default function ConfEmployeePage() {
  // Constantes para filtrar los empleados
  const [searchTerm, setSearchTerm] = useState<string>("");
  // Constantes para guardar el estado de un empleado seleccionado
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  // Constante para mostrar mensajes de alerta y Añadir el estado para manejar el Snackbar
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">("success");

  // Función que se pasa al ModalDeleteEmployees para manejar la eliminación
  const handleDelete = async (employeeId: number) => {
    setLoading(true);
    try {
      await deleteEmployee(employeeId); // Llamada al servicio para eliminar el empleado
      setSelectedEmployee(null); // Limpiar la selección de empleado
      setSnackbarMessage("Empleado eliminado correctamente");
      setSnackbarSeverity("success"); // Éxito
    } catch (error) {
      setSnackbarMessage("Error al eliminar el empleado");
      setSnackbarSeverity("error"); // Error
      console.error("Error al eliminar empleado:", error);
    } finally {
      setLoading(false); // Detener carga
      setOpenSnackbar(true); // Mostrar Snackbar
    }
  };

  // Fn para cerrar el Snackbar
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
  return (
    <>
      <Paper className="container-emp-page">
        <header className="header-emp-page">
          <h1>Mantenimiento Empleados</h1>
          <div className="cont-searchbar-emp-page">
            <TextField
              className="searchbar-emp-page"
              id="searchbar-emp-page"
              label="Buscar"
              placeholder="Buscar Empleado"
              size="small"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="container-button">
            <DeleteDialog
              employee={selectedEmployee} // Pasa el empleado seleccionado al modal
              onDelete={handleDelete} // Pasa la función de eliminación al modal
              loading={loading} // Pasa el estado de carga al modal
            />
            <ModalRegisterEmployees />
          </div>
        </header>
        <div className="container-table">
          <div className="sub-container-table">
            <EmployeeTable searchTerm={searchTerm} onSelectEmployee={setSelectedEmployee} />
          </div>
        </div>
      </Paper>
      {/* Snackbar de notificación */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000} // Se cierra después de 3 segundos
        onClose={handleCloseSnackbar}
        anchorOrigin={{
          vertical: "bottom", // Aparece en la parte inferior
          horizontal: "right", // Aparece a la derecha
        }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} variant="filled">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
}

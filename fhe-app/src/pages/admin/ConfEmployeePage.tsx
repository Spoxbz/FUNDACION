/**
 * * Esta pagina sirve para poder listar todos los empleados registrados y poder crearlos, editarlos y eliminarlos
 * * Cuando se quiera crear un empleado, el boton que corresponda a esa accion, abrira un modal --> ModalRegisterEmployees.tsx (C:\Users\Usuario\Desktop\TESIS\DEVELOPMENT\FUNDACION\fhe-app\src\components\REGISTER\ModalRegisterEmployees.tsx)
 * * Este componente usa una tabla para listar los empleados,
 * * la tabla es la misma que la de jose
 */
// Import de los estilos
import "../../CSS/admin/confemployeepage.css";
import ModalRegisterEmployees from "../../components/REGISTER/ModalRegisterEmployees";
import ModalDeleteEmployees from "../../components/REGISTER/ModalDeleteEmployee";
// Import de componentes de la tabla
import EmployeeTable from "../../components/ADMIN/EmployeeTable";
import { TextField } from "@mui/material";
import { Paper } from "@mui/material";

export default function ConfEmployeePage() {
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
            />
          </div>
          <div className="container-button">
            <ModalDeleteEmployees />
            <ModalRegisterEmployees />
          </div>
        </header>
        <div className="container-table">
          <div className="sub-container-table">
            <EmployeeTable />
          </div>
        </div>
      </Paper>
    </>
  );
}

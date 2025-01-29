/**
 * * Esta pagina sirve para poder listar todos consultorios registrados y poder crearlos, editarlos y eliminarlos
 * * Cuando se quiera crear un consultorio, el boton que corresponda a esa accion, abrira un modal -->
 * * Cuando se quiera eliminar un consultorio, el boton que corresponda a esa accion, abrira un modal -->
 * * Este componente usa una tabla para listar, ...
 * * La tabla es la misma que la de jose
 */
// Import de los estilos
import "../../CSS/admin/confofficepage.css";
import ModalRegisterEmployees from "../../components/REGISTER/ModalRegisterEmployees";
import ModalDeleteEmployees from "../../components/REGISTER/DeleteDialog";
// Import de componentes de la tabla
import OfficeTable from "../../components/ADMIN/OfficeTable";
import { TextField } from "@mui/material";
import { Paper } from "@mui/material";
import { useState } from "react";

export default function ConfOfficePage() {
  // Constantes para filtrar consultorios
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <>
      <Paper className="container-off-page">
        <header className="header-off-page">
          <h1>Manteniemiento Consultorios</h1>
          <div className="cont-searchbar-off-page">
            <TextField
              className="searchbar-off-page"
              id="searchbar-off-page"
              label="Buscar"
              placeholder="Buscar Consultorio"
              size="small"
              // agregados para poder buscar en la tabla
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="container-button">
            <ModalDeleteEmployees />
            <ModalRegisterEmployees />
          </div>
        </header>
        <div className="container-table">
          <div className="sub-container-table">
            <OfficeTable searchTerm={searchTerm} />
          </div>
        </div>
      </Paper>
    </>
  );
}

/**
 * * Esta pagina sirve para poder listar todos consultorios registrados y poder crearlos, editarlos y eliminarlos
 * * Cuando se quiera crear un consultorio, el boton que corresponda a esa accion, abrira un modal -->
 * * Cuando se quiera eliminar un consultorio, el boton que corresponda a esa accion, abrira un modal -->
 * * Este componente usa una tabla para listar, ...
 * * La tabla es la misma que la de jose
 */
// Import de los estilos
import "../../CSS/admin/confofficepage.css";
import { useState } from "react";
import ModalRegisterEmployees from "../../components/ADMIN/REGISTER/ModalRegisterEmployees";
import DeleteDialogOffice from "../../components/ADMIN/REGISTER/DeleteDialogOffice";
// Import de componentes de la tabla
import OfficeTable from "../../components/ADMIN/OfficeTable";
import { Alert, TextField } from "@mui/material";
import { Paper } from "@mui/material";
import { Snackbar } from "@mui/material";
import { Offices } from "../../backendTwo/model/model.office";
// Servicio para el borrado
import { deleteOffice } from "../../backendTwo/service/service.office";

export default function ConfOfficePage() {
  // Constantes para filtrar consultorios
  const [searchTerm, setSearchTerm] = useState<string>("");
  // Constante para guardar el estado de un consultorio seleccionado
  const [selectedOffice, setSelectedOffice] = useState<Offices | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  // Constante para mostrar mensajes de alerta y estado del snackbar
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">("success");

  // Funcion que se pasa al DeleteDialogOffice
  const handleDeleteOffice = async (officeId: number) => {
    setLoading(true);
    try {
      await deleteOffice(officeId);
      setSelectedOffice(null);
      setSnackbarSeverity("success");
      setSnackbarMessage("El consultorio ha sido eliminado correctamente");
    } catch (error) {
      setSnackbarMessage("Error al eliminar el consultorio");
      setSnackbarSeverity("error"); // Error
      console.error("Error al eliminar consultorio:", error);
    } finally {
      setLoading(false);
      setOpenSnackbar(true);
    }
  };
  // Funcion para cerrar el Snackbar
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

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
            <DeleteDialogOffice office={selectedOffice} onDelete={handleDeleteOffice} loading={loading} />
            <ModalRegisterEmployees />
          </div>
        </header>
        <div className="container-table">
          <div className="sub-container-table">
            <OfficeTable searchTerm={searchTerm} onSelectOffice={setSelectedOffice} />
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

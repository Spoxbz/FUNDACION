// Estilos
import "../../CSS/admin/confspecialtiepage.css";
import { Alert, Snackbar, TextField } from "@mui/material";
import { useState } from "react";
import DeleteDialogSpecialties from "../../components/ADMIN/REGISTER/DeleteDialogSpecialties";
import ModalRegisterEmployees from "../../components/ADMIN/REGISTER/ModalRegisterEmployees";
// Import de model
import { Specialty } from "../../backendTwo/model/model.specialty";
// Import de la tabla que lista las especialidades
import SpecialtyTable from "../../components/ADMIN/SpecialtyTable";
// Import de servicio de especialidad
import { deleteSpecialty } from "../../backendTwo/service/specialtyService";

export default function ConfSpecialtiesPage() {
  // Constantes para filtrar los empleados
  const [searchTerm, setSearchTerm] = useState<string>("");
  // Constantes para guardar el estado de un empleado seleccionado
  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  // Constante para mostrar mensajes de alerta y Añadir el estado para manejar el Snackbar
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">("success");

  // Función que se pasa al DialoDeleteSpecialties para manejar la eliminación
  const handleDeleteSpecialty = async (specialtyId: number) => {
    setLoading(true);
    try {
      await deleteSpecialty(specialtyId); // Llamada al servicio para eliminar una especialidad
      setSelectedSpecialty(null); // Limpiar la selección de una especialidad
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
      <div className="container-spe-page">
        <header className="header-spe-page">
          <h1>Manteniemiento Especialidades</h1>
          <div className="cont-searchbar-spe-page">
            <TextField
              className="searchbar-spe-page"
              id="searchbar-spe-page"
              label="Buscar"
              placeholder="Buscar Consultorio"
              size="small"
              // Props para el filtrado
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="container-button">
            <DeleteDialogSpecialties onDelete={handleDeleteSpecialty} specialty={selectedSpecialty} loading={loading} />
            <ModalRegisterEmployees />
          </div>
        </header>
        <div className="container-table">
          <div className="sub-container-table">
            <SpecialtyTable searchTerm={searchTerm} onSelectSpecialty={setSelectedSpecialty} />
          </div>
        </div>
      </div>
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

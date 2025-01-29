// Estilos
import "../../CSS/admin/confspecialtiepage.css";
import { TextField } from "@mui/material";
import ModalDeleteEmployees from "../../components/ADMIN/REGISTER/DeleteDialog";
import ModalRegisterEmployees from "../../components/ADMIN/REGISTER/ModalRegisterEmployees";
// Import de la tabla que lista las especialidades
import SpecialtyTable from "../../components/ADMIN/SpecialtyTable";

export default function ConfSpecialtiesPage() {
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
            />
          </div>
          <div className="container-button">
            <ModalDeleteEmployees />
            <ModalRegisterEmployees />
          </div>
        </header>
        <div className="container-table">
          <div className="sub-container-table">
            <SpecialtyTable />
          </div>
        </div>
      </div>
    </>
  );
}

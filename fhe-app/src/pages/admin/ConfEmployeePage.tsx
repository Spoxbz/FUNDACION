/**
 * * Esta pagina sirve para poder listar todos los empleados registrados y poder crearlos, editarlos y eliminarlos
 * * Cuando se quiera crear un empleado, el boton que corresponda a esa accion, abrira un modal --> ModalRegisterEmployees.tsx (C:\Users\Usuario\Desktop\TESIS\DEVELOPMENT\FUNDACION\fhe-app\src\components\REGISTER\ModalRegisterEmployees.tsx)
 */

import { Box, Typography } from "@mui/material";
import ModalRegisterEmployees from "../../components/REGISTER/ModalRegisterEmployees";

export default function ConfEmployeePage() {
  return (
    <>
      <Box sx={{ marginTop: "3rem", marginLeft: "4.2rem", width: "100%", textAlign: "center" }}>
        <Typography>Aqui se listan los empleados en una tabla como la de jose</Typography>
        <Box>
          <ModalRegisterEmployees />
        </Box>
      </Box>
    </>
  );
}

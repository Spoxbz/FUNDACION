/**
 * * Este modal sera para cuando el usuario adminitrador requiera eliminar un empleado en el sistema
 * * Este modal form es usado por ConfEmployeePage.tsx --> C:\Users\Usuario\Desktop\TESIS\DEVELOPMENT\FUNDACION\fhe-app\src\pages\admin\ConfEmployeePage.tsx
 * * Este modal form usa la funcion deleteEmployee declarada en employeeService.tsx
 */

import React, { useState } from "react";
// Estilos
import "../../../CSS/admin/confemployeepage.css";
import Button from "@mui/material/Button";
import { Delete } from "@mui/icons-material";
import {
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import { Employee } from "../../../backendTwo/model/model.employee";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// Props del modal
interface DeleteModalProps {
  employee: Employee | null; // Empleado a eliminar
  onDelete: (employeeId: number) => void; // Función para eliminar
  loading?: boolean; // Estado de carga
}

export default function DeleteDialog({ employee, onDelete, loading }: DeleteModalProps) {
  const [openDelDialog, setOpenDelDialog] = useState(false);

  // constantes para abrir/cerrar el modal
  const handleOpenDelDialog = () => setOpenDelDialog(true);
  const handleCloseDelDialog = () => setOpenDelDialog(false);
  // constate para eliminar el empleado
  const handleConfirmDelete = () => {
    if (employee) {
      onDelete(employee.employee_id); // Llamar a la función de eliminación con el ID del empleado
    }
    handleCloseDelDialog();
  };

  return (
    <div>
      <Button className="btn-modal-delEmployee" onClick={handleOpenDelDialog}>
        <Delete />
        Eliminar
      </Button>
      <Dialog
        open={openDelDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseDelDialog}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">{"Confirmación de eliminación"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            {employee && `¿Estás seguro de que deseas eliminar "${employee.employee_name}"?`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDelDialog} variant="outlined">
            Cancelar
          </Button>
          <Button onClick={handleConfirmDelete} variant="contained" color="error" disabled={loading}>
            {loading ? <CircularProgress size={24} /> : "Confirmar"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

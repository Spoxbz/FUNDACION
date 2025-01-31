/**
 * * Este modal sera para cuando el usuario adminitrador requiera eliminar una especialidad en el sistema
 * * Este modal form es usado por ConfSpecialtiesPage.tsx --> C:\Users\Usuario\Desktop\TESIS\DEVELOPMENT\FUNDACION\fhe-app\src\pages\admin\ConfSpecialtiesPage.tsx
 * * Este modal form usa la funcion deleteSpecialty declarada en specialtyService.ts
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
import { TransitionProps } from "@mui/material/transitions";
import { Specialty } from "../../../backendTwo/model/model.specialty";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// Props del modal
interface DeleteDialogProps {
  specialty: Specialty | null; // Empleado a eliminar
  onDelete: (specialtyId: number) => void; // Función para eliminar
  loading?: boolean; // Estado de carga
}

export default function DeleteDialogSpecialties({ specialty, onDelete, loading }: DeleteDialogProps) {
  const [openDelDialog, setOpenDelDialog] = useState(false);

  // constantes para abrir/cerrar el modal
  const handleOpenDelDialog = () => setOpenDelDialog(true);
  const handleCloseDelDialog = () => setOpenDelDialog(false);
  // constate para eliminar una especialidad
  const handleConfirmDelete = () => {
    if (specialty) {
      onDelete(specialty.specialty_id); // Llamar a la función de eliminación con el ID de la especialidad
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
            {specialty && `¿Estás seguro de que deseas eliminar "${specialty.specialty_name}"?`}
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

import React from "react";
import { Modal, Box, Button, Typography } from "@mui/material";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "10px",
  p: 4,
};

interface ChildConfirmModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ChildConfirmModal: React.FC<ChildConfirmModalProps> = ({ open, onClose, onConfirm }) => {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="confirm-title" aria-describedby="confirm-description">
      <Box sx={style}>
        <Typography id="confirm-title" variant="h6" gutterBottom>
          Confirmar acción
        </Typography>
        <Typography id="confirm-description" gutterBottom>
          ¿Desea <b>guardar</b> los cambios?
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}>
          <Button variant="outlined" color="primary" onClick={onClose}>
            No
          </Button>
          <Button variant="contained" color="secondary" onClick={onConfirm}>
            Sí
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ChildConfirmModal;

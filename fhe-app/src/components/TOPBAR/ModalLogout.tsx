import React, { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "../../CSS/topbar/modalLogout.css";

interface ModalLogoutProps {
  onClose: () => void;
}

const ModalLogout: React.FC<ModalLogoutProps> = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000); // 2000ms equivale a 2 segundos

    // Limpia el timer cuando el componente se desmonta
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="modal-backdrop">
      <Box className="modal-content" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <CircularProgress size={50} />
        <Typography variant="caption" component="div" color="textSecondary" sx={{ marginTop: "10px" }}>
          Cerrando sesión...
        </Typography>
      </Box>
    </div>
  );
};

export default ModalLogout;

import React from "react";
import "../../CSS/topbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";

interface TopbarProps {
  onMenuClick: () => void;
  onMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
  username: string;
  menuAnchorEl: null | HTMLElement;
  onLogout: () => void;
  toggleButtonRef: React.RefObject<HTMLButtonElement>;
}

const Topbar: React.FC<TopbarProps> = ({
  onMenuClick,
  onMenuOpen,
  username,
  menuAnchorEl,
  onLogout,
  toggleButtonRef,
}) => {
  return (
    <header className="appbar-container">
      <div className="toolbar-content">
        {/* Sección izquierda: Botón para desplegar el Sidebar */}
        <div className="left-section">
          <button
            ref={toggleButtonRef}
            onClick={onMenuClick}
            aria-label="toggle drawer"
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "1.5rem",
            }}
          >
            <MenuIcon />
          </button>
        </div>

        {/* Sección central */}
        <div className="midle-section">
          <img className="img-logo" src="logo.avif" alt="Logo" />
          <h1>Fundación Hogar del Ecuador</h1>
        </div>

        {/* Sección derecha */}
        <div className="rigth-section">
          {/* Avatar */}
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            onClick={onMenuOpen}
            style={{ cursor: "pointer" }}
          />

          {/* Menú desplegable */}
          {menuAnchorEl && (
            <div
              id="user-menu"
              style={{
                position: "absolute",
                top: "50px",
                right: "10px",
                background: "white",
                border: "1px solid #ddd",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                padding: "10px",
                zIndex: 1001,
              }}
            >
              <p>{username}</p>
              <button
                onClick={onLogout}
                style={{ display: "block", marginBottom: "10px" }}
              >
                Cerrar Sesión
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Topbar;

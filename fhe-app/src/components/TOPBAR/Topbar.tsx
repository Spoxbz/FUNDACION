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
  menuRef: React.RefObject<HTMLDivElement>;
}

const Topbar: React.FC<TopbarProps> = ({
  onMenuClick,
  onMenuOpen,
  username,
  menuAnchorEl,
  onLogout,
  toggleButtonRef,
  menuRef,
}) => {
  return (
    <header className="appbar-container">
      <div className="toolbar-content">
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
            <MenuIcon sx={{ color: "white" }} />
          </button>
        </div>

        <div className="midle-section">
          <img className="img-logo" src="Logo.avif" alt="Logo" />
          <h1>Fundación Hogar del Ecuador</h1>
        </div>

        <div className="rigth-section">
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            onClick={onMenuOpen}
            style={{ cursor: "pointer" }}
          />

          {menuAnchorEl && (
            <div
              id="user-menu"
              ref={menuRef}
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
      <div className="divisor"></div>
    </header>
  );
};

export default Topbar;

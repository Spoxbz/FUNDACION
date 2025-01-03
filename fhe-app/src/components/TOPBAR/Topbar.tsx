import React from "react";
import "../../CSS/topbar.css";
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
  onMenuOpen,
  username,
  menuAnchorEl,
  onLogout,
  menuRef,
}) => {
  return (
    <header className="appbar-container">
      <div className="toolbar-content">
        <div className="left-section"></div>
        <div className="midle-section">
          <img className="img-logo" src="Logo.avif" alt="Logo" />
          <h1>Fundación Hogar del Ecuador</h1>
        </div>

        <div className="rigth-section">
          <Avatar
            sx={{ width: "30px", height: "30px", marginRight: "10px" }}
            onClick={onMenuOpen}
            style={{ cursor: "pointer" }}
          />
          <p
            style={{
              width: "100%",
              textAlign: "center",
            }}
          >
            {username}
          </p>

          {menuAnchorEl && (
            <div
              id="user-menu"
              ref={menuRef}
              style={{
                position: "absolute",
                top: "35px",
                borderRadius: "4px",
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

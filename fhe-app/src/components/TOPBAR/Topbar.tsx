import React from "react";
import "../../CSS/topbar.css";
import { Avatar } from "@mui/material";
import Logo from "../../assets/Logo.avif";

interface TopbarProps {
  onMenuClick: () => void;
  onMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
  username: string;
  menuAnchorEl: null | HTMLElement;
  onLogout: () => void;
  toggleButtonRef: React.RefObject<HTMLButtonElement>;
  menuRef: React.RefObject<HTMLDivElement>;
}

const Topbar: React.FC<TopbarProps> = ({ onMenuOpen, username, menuAnchorEl, onLogout, menuRef }) => {
  return (
    <header className="appbar-container">
      <div className="toolbar-content">
        <div className="left-section"></div>
        <div className="midle-section">
          <img className="img-logo" src={Logo} alt="Logo" />
          <h2>Fundación Hogar del Ecuador</h2>
        </div>

        <div className="rigth-section" onClick={onMenuOpen} style={{ cursor: "pointer" }}>
          <Avatar sx={{ width: "30px", height: "30px", marginRight: "10px" }} />
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
                width: "132px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <p>{username}</p>
              <button
                onClick={onLogout}
                style={{
                  display: "block",
                  marginTop: "10px",
                }}
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

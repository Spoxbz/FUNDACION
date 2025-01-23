import React from "react";
import "../../CSS/topbar.css";
import { Avatar } from "@mui/material";
import Logo from "../../assets/Logo.avif";
// uso de zustand
import { useAuthStore } from "../../backendTwo/zustand/authStore";
import { useEffect } from "react";

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
  const { user, roleName, loadUserRole } = useAuthStore();

  /* Separa los nombres y apellidos y toma el primero de cada uno, con verificación de existencia*/
  const firstName = user?.employee_name?.split(" ")[0] || "";
  const lastName = user?.employee_lastname?.split(" ")[0] || "";
  const name = `${firstName} ${lastName}`;

  // Cargar el nombre del rol si aún no está en el estado
  useEffect(() => {
    if (!roleName && user) {
      loadUserRole();
    }
  }, [user, roleName, loadUserRole]);

  /*Funcion para mostrar el usuario en el avatar*/
  const handleShowUser = () => {
    if (!user) return username; /* Si no hay usuario, retorna el valor por defecto*/

    if (user.rol_id === 4) {
      return `Dr. ${firstName} ${lastName}`;
    }

    // Para los roles 1, 2, y 3
    if ([1, 2, 3].includes(user.rol_id)) {
      return `${firstName} ${lastName}`;
    }

    return username; /* Retorna el valor por defecto si no coincide con los roles anteriores*/
  };

  return (
    <header className="appbar-container">
      <div className="toolbar-content">
        <div className="left-section"></div>
        <div className="midle-section">
          <img className="img-logo" src={Logo} alt="Logo" />
          <h2>Fundación Hogar del Ecuador</h2>
        </div>

        <div className="rigth-section" onClick={onMenuOpen}>
          <Avatar
            sx={{
              width: "30px",
              height: "30px",
              marginRight: "10px",
              cursor: "pointer",
              fontSize: "15px",
              background: "#1A369A",
            }}
          >
            {`${name.split(" ")[0][0]}${name.split(" ")[1][0]}`}
          </Avatar>
          <p
            style={{
              width: "100%",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            {handleShowUser()}
          </p>

          {menuAnchorEl && (
            <div
              id="user-menu"
              ref={menuRef}
              style={{
                position: "absolute",
                top: "40px",
                right: "10px",
                borderRadius: "4px",
                background: "white",
                border: "1px solid #ddd",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                padding: "10px 0px 00px 0px",
                zIndex: 1001,
                width: "300px",
                height: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontSize: "15px",
              }}
            >
              <p style={{ paddingBottom: "10px", textAlign: "center", fontSize: "12px" }}>
                {`${user?.employee_email || ""}`}
              </p>
              <Avatar
                sx={{
                  width: "80px",
                  height: "80px",
                  marginRight: "10px",
                  fontSize: "30px",
                  background: "#1A369A",
                }}
              >
                {`${name.split(" ")[0][0]}${name.split(" ")[1][0]}`}
              </Avatar>
              {/*Titulo de bienvenida al usuario */}
              <p style={{ fontSize: "40px", textAlign: "center" }}>{`Hola, ${firstName}`}</p>
              <p style={{ fontSize: "15px", margin: "0px", padding: "0px", marginBottom: "20px" }}>
                {user ? `Usted es ${roleName + "/a" || "Cargando..."}` : "No autenticado"}
              </p>

              <div className="options-user-menu">
                <p className="oum">Mi perfil</p>
                <button className="logout-buttom" onClick={onLogout}>
                  Cerrar Sesión
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="divisor"></div>
    </header>
  );
};

export default Topbar;

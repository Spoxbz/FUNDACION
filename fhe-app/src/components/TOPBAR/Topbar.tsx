import React, { useState } from "react";
import "../../CSS/topbar/topbar.css";
import { Avatar, Skeleton } from "@mui/material";
import Logo from "../../assets/Logo.avif";
// uso de zustand
import { useAuthStore } from "../../backendTwo/zustand/authStore";
import { useEffect } from "react";
import ModalLogout from "./ModalLogout";

interface TopbarProps {
  onMenuClick: () => void;
  onMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
  username: string;
  menuAnchorEl: null | HTMLElement;
  onLogout: () => void;
  toggleButtonRef: React.RefObject<HTMLButtonElement>;
  menuRef: React.RefObject<HTMLDivElement>;
}

const Topbar: React.FC<TopbarProps> = ({ onMenuOpen, username, menuAnchorEl, onLogout, toggleButtonRef, menuRef }) => {
  const { user, roleName, loadUserRole } = useAuthStore();
  // contantes para skeleton
  const [loading, setLoading] = React.useState(true);

  /* Separa los nombres y apellidos y toma el primero de cada uno, con verificación de existencia*/
  const firstName = user?.employee_name?.split(" ")[0] || "";
  const lastName = user?.employee_lastname?.split(" ")[0] || "";
  const name = `${firstName} ${lastName}`;
  // MOdal al cerrar sesión
  const [showModal, setShowModal] = useState(false);

  const showGrettingMessage = () => {
    if (user?.rol_id === 1) {
      return `Modo: Administrador`;
    } else if (user?.rol_id === 2) {
      return `Modo: Asistente`;
    } else if (user?.rol_id === 3) {
      return `Modo: Emisor`;
    } else if (user?.rol_id === 4) {
      return `Modo: Médico`;
    }
    return ``;
  };

  // Cargar el nombre del rol si aún no está en el estado
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simula una carga de 2 segundos
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

  const handleLogout = () => {
    setShowModal(true);
    setTimeout(() => {
      onLogout();
      setShowModal(false);
    }, 2000); // Simula un retraso de 2 segundos
  };

  return (
    <header className="appbar-container">
      <div className="toolbar-content">
        <div className="left-section"></div>
        <div className="midle-section">
          {loading ? (
            <Skeleton
              variant="rectangular"
              width={200}
              height={40}
              sx={{ backgroundColor: "rgba(12, 5, 5, 0.17)", borderRadius: "4px" }}
            />
          ) : (
            <>
              <img className="img-logo" src={Logo} alt="Logo" />
              <h3 className="titleHeadertopbar">{showGrettingMessage()}</h3>
            </>
          )}
        </div>

        <div className="rigth-section" onClick={onMenuOpen}>
          {loading ? (
            <>
              <Skeleton
                variant="circular"
                width={30}
                height={30}
                sx={{ backgroundColor: "rgba(12, 5, 5, 0.17)", borderRadius: "50%" }}
              />
              <Skeleton
                width={100}
                height={20}
                sx={{ marginLeft: "10px", backgroundColor: "rgba(12, 5, 5, 0.17)", borderRadius: "4px" }}
              />
            </>
          ) : (
            <>
              <button ref={toggleButtonRef} style={{ border: "none" }} aria-label="toggle menu">
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
              </button>
              <p style={{ width: "100%", textAlign: "center", cursor: "pointer" }}>{handleShowUser()}</p>
            </>
          )}

          {menuAnchorEl && !loading && (
            <div
              id="user-menu"
              ref={menuRef}
              style={{
                position: "absolute",
                top: "40px",
                right: "10px",
                borderRadius: "4px",
                background: "white",
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
                <button className="logout-buttom" onClick={handleLogout}>
                  Cerrar Sesión
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {showModal && <ModalLogout onClose={() => setShowModal(false)} />}
      <div className="divisor"></div>
    </header>
  );
};

export default Topbar;

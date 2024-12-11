import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "../components/SIDEBAR/SideBar";
import Topbar from "../components/TOPBAR/Topbar";
import Modules from "../pages/Modules";
import { client } from "../api/client";
import "../css/dashboard.css";
import VitalSigns from "../pages/VitalSigns";
import Calendar from "../pages/Calendar";

export default function DashBoard() {
  const [open, setOpen] = useState(false); // Estado del sidebar
  const sidebarRef = useRef<HTMLDivElement | null>(null); // Referencia al sidebar
  const toggleButtonRef = useRef<HTMLButtonElement | null>(null); // Referencia al botón de toggle
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null); // Estado del menú desplegable
  const menuRef = useRef<HTMLDivElement | null>(null); // Referencia al menú desplegable
  const username = "Bruno Bravo"; // Nombre del usuario en sesión
  const [currentModule, setCurrentModule] = useState<React.ReactNode>(null); // Estado para el módulo actual

  // Alternar el estado del sidebar
  const toggleSidebar = () => {
    setOpen((prev) => !prev);
  };

  // Cerrar el sidebar al hacer clic fuera
  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Node;
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(target) &&
      toggleButtonRef.current &&
      !toggleButtonRef.current.contains(target)
    ) {
      setOpen(false);
    }

    if (menuAnchorEl && menuRef.current && !menuRef.current.contains(target)) {
      setMenuAnchorEl(null);
    }
  };

  // Agregar y limpiar listeners de clic
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuAnchorEl]);

  // Abrir o cerrar el menú del usuario
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    // Verificar si el menú ya está abierto y el clic es sobre el mismo elemento
    if (menuAnchorEl && menuAnchorEl === event.currentTarget) {
      setMenuAnchorEl(null); // Cierra el menú
    } else {
      setMenuAnchorEl(event.currentTarget); // Abre el menú
    }
  };

  // Cerrar sesión
  const handleLogout = () => {
    console.log("Cerrando sesión...");
    client.auth.signOut();
    // handleMenuClose();
  };

  // Cambiar el módulo que se está mostrando
  const handleModuleClick = (moduleName: string) => {
    if (moduleName === "Emisor") {
      setCurrentModule(<Calendar />);
    } else if (moduleName === "Signos") {
      setCurrentModule(<VitalSigns />);
    } else {
      setCurrentModule(<div>Componente para {moduleName}</div>); // Placeholder
    }
  };

  // Inicializar el módulo inicial después de renderizar
  useEffect(() => {
    setCurrentModule(<Modules handleModuleClick={handleModuleClick} />);
  }, []);

  return (
    <Box className={"dashboardpage-container"}>
      <Topbar
        onMenuClick={toggleSidebar}
        onMenuOpen={handleMenuOpen}
        username={username}
        menuAnchorEl={menuAnchorEl}
        onLogout={handleLogout}
        toggleButtonRef={toggleButtonRef} // Pasar la referencia del botón
        menuRef={menuRef} // Pasar la referencia del menú
      />

      <div ref={sidebarRef}>
        <Sidebar open={open} handleDrawerClose={() => setOpen(false)} />
      </div>

      <div className="dash-content">{currentModule}</div>
    </Box>
  );
}

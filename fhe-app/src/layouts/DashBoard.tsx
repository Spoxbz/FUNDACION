import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "../components/SIDEBAR/SideBar";
import Topbar from "../components/TOPBAR/Topbar";
import Modules from "../pages/Modules";
import "../css/dashboard.css";
import Calendar from "../pages/Calendar";
import VitalSigns from "../pages/VitalSigns";
import MedicalOffice from "../pages/MedicalOffice";
import { Outlet, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [open, setOpen] = useState(false); // Estado del sidebar
  const sidebarRef = useRef<HTMLDivElement | null>(null); // Referencia al sidebar
  const toggleButtonRef = useRef<HTMLButtonElement | null>(null); // Referencia al botón de toggle
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null); // Estado del menú desplegable
  const menuRef = useRef<HTMLDivElement | null>(null); // Referencia al menú desplegable
  const username = "Bruno Bravo"; // Nombre del usuario en sesión
  const [currentModule, setCurrentModule] = useState<React.ReactNode>(null); // Estado para el módulo actual
  const navigate = useNavigate();

  // Alternar estado del sidebar
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

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuAnchorEl]);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    if (menuAnchorEl && menuAnchorEl === event.currentTarget) {
      setMenuAnchorEl(null);
    } else {
      setMenuAnchorEl(event.currentTarget);
    }
  };

  const handleLogout = () => {
    console.log("Cerrando sesión...");
    navigate("/");
  };

  const handleModuleClick = (moduleName: string) => {
    // Aqui el nombre de los modulos debe coincidir con el nombre de las rutas, mayusculas y minusculas
    if (moduleName === "Emisor") {
      setCurrentModule(<Calendar />);
    } else if (moduleName === "Signos") {
      setCurrentModule(<VitalSigns />);
    } else if (moduleName === "Consultorio") {
      setCurrentModule(<MedicalOffice />);
    }
  };

  useEffect(() => {
    setCurrentModule(<Modules handleModuleClick={handleModuleClick} />);
  }, []);

  return (
    <Box className="dashboardpage-container">
      <Topbar
        onMenuClick={toggleSidebar}
        onMenuOpen={handleMenuOpen}
        username={username}
        menuAnchorEl={menuAnchorEl}
        onLogout={handleLogout}
        toggleButtonRef={toggleButtonRef}
        menuRef={menuRef}
      />
      <Outlet></Outlet>

      <div ref={sidebarRef}>
        <Sidebar open={open} handleDrawerClose={toggleSidebar} />
      </div>
      {/* <div className="dash-content">{currentModule}</div> */}
    </Box>
  );
}

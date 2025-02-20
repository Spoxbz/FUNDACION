import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "../components/SIDEBAR/SideBar";
import Topbar from "../components/TOPBAR/Topbar";
import "../css/dashboard.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../backendTwo/zustand/authStore";

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const toggleButtonRef = useRef<HTMLButtonElement | null>(null);
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();

  const toggleSidebar = () => {
    setOpen((prev) => !prev);
  };

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
    logout();
    navigate("/");
  };

  return (
    <Box className="dashboardpage-container">
      <Topbar
        onMenuClick={toggleSidebar}
        onMenuOpen={handleMenuOpen}
        username={user?.employee_name || "Usuario"}
        menuAnchorEl={menuAnchorEl}
        onLogout={handleLogout}
        toggleButtonRef={toggleButtonRef}
        menuRef={menuRef}
      />

      <div className="dashboard-layout">
        <div ref={sidebarRef} className={`sidebar ${open ? "open" : "closed"}`}>
          <Sidebar open={open} handleDrawerClose={toggleSidebar} toggleButtonRef={toggleButtonRef} />
        </div>
        <Outlet />
      </div>
    </Box>
  );
}

// import React, { useEffect, useRef, useState } from "react";
// import { Box } from "@mui/material";
// import Sidebar from "../components/SIDEBAR/SideBar";
// import Topbar from "../components/TOPBAR/Topbar";
// import "../css/dashboard.css";
// import { Outlet, useNavigate } from "react-router-dom";
// // Import del contexto global del usuario logueado con authservice y almancenado con zustand
// import { useAuthStore } from "../backendTwo/zustand/authStore";

// export default function Dashboard() {
//   const [open, setOpen] = useState(false); // Estado del sidebar
//   const sidebarRef = useRef<HTMLDivElement | null>(null); // Referencia al sidebar
//   const toggleButtonRef = useRef<HTMLButtonElement | null>(null); // Referencia al botón de toggle
//   const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null); // Estado del menú desplegable
//   const menuRef = useRef<HTMLDivElement | null>(null); // Referencia al menú desplegable
//   const navigate = useNavigate();
//   // Zustand
//   const { user, logout } = useAuthStore();

//   // Alternar estado del sidebar
//   const toggleSidebar = () => {
//     setOpen((prev) => !prev);
//   };

//   // Cerrar el sidebar al hacer clic fuera
//   const handleClickOutside = (event: MouseEvent) => {
//     const target = event.target as Node;
//     if (
//       sidebarRef.current &&
//       !sidebarRef.current.contains(target) &&
//       toggleButtonRef.current &&
//       !toggleButtonRef.current.contains(target)
//     ) {
//       setOpen(false);
//     }

//     if (menuAnchorEl && menuRef.current && !menuRef.current.contains(target)) {
//       setMenuAnchorEl(null);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [menuAnchorEl]);

//   const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
//     if (menuAnchorEl && menuAnchorEl === event.currentTarget) {
//       setMenuAnchorEl(null);
//     } else {
//       setMenuAnchorEl(event.currentTarget);
//     }
//   };

//   const handleLogout = () => {
//     logout();
//     navigate("/");
//   };

//   return (
//     <Box className="dashboardpage-container">
//       <Topbar
//         onMenuClick={toggleSidebar}
//         onMenuOpen={handleMenuOpen}
//         username={user?.employee_name || "Usuario"} // Muestra el nombre del usuario
//         menuAnchorEl={menuAnchorEl}
//         onLogout={handleLogout}
//         toggleButtonRef={toggleButtonRef}
//         menuRef={menuRef}
//       />

//       <div className="dashboard-layout">
//         <div ref={sidebarRef} className={`sidebar ${open ? "open" : "closed"}`}>
//           <Sidebar open={open} handleDrawerClose={toggleSidebar} toggleButtonRef={toggleButtonRef} />
//         </div>
//         <Outlet />
//       </div>
//     </Box>
//   );
// }

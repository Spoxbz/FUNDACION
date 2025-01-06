import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "../components/SIDEBAR/SideBar";
import Topbar from "../components/TOPBAR/Topbar";
import Modules from "../pages/Modules";
import "../css/dashboard.css";
import { useNavigate } from "react-router-dom"; // Importa el hook useNavigate
import { Employee } from "../backend/types/users/user_employee";
import Calendar from "../pages/Calendar";
import VitalSigns from "../pages/VitalSigns";
import MedicalOffice from "../pages/MedicalOffice";

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const toggleButtonRef = useRef<HTMLButtonElement | null>(null);
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [currentModule, setCurrentModule] = useState<React.ReactNode>(null);
  const [loggedInUser, setLoggedInUser] = useState<Employee | null>(null);
  const navigate = useNavigate(); // Usamos el hook useNavigate para redirigir

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setLoggedInUser(JSON.parse(storedUser));
    }
  }, []);

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
    console.log("Cerrando sesión...");
    localStorage.removeItem("loggedInUser"); // Borra el localStorage
    navigate("/"); // Redirige a la página de inicio de sesión
  };

  const handleModuleClick = (moduleName: string) => {
    if (moduleName === "Emisor") {
      setCurrentModule(<Calendar />);
    } else if (moduleName === "Signos") {
      setCurrentModule(<VitalSigns />);
    } else if (moduleName === "Consultorio") {
      setCurrentModule(<MedicalOffice />);
    }
  };

  useEffect(() => {
    setCurrentModule(
      <Modules handleModuleClick={handleModuleClick} user={loggedInUser} />
    );
  }, [loggedInUser]);

  return (
    <Box className="dashboardpage-container">
      {loggedInUser && (
        <>
          <Topbar
            onMenuClick={toggleSidebar}
            onMenuOpen={handleMenuOpen}
            username={loggedInUser.employe_name}
            menuAnchorEl={menuAnchorEl}
            onLogout={handleLogout}
            toggleButtonRef={toggleButtonRef}
            menuRef={menuRef}
          />

          <div ref={sidebarRef}>
            <Sidebar
              open={open}
              handleDrawerClose={toggleSidebar}
              user={loggedInUser}
            />{" "}
            {/* Pasamos el usuario autenticado */}
          </div>

          <div className="dash-content">{currentModule}</div>
        </>
      )}
    </Box>
  );
}

// import React, { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Box } from "@mui/material";
// import Sidebar from "../components/SIDEBAR/SideBar";
// import Topbar from "../components/TOPBAR/Topbar";
// import Modules from "../pages/Modules";
// import "../css/dashboard.css";
// import { Employee } from "../backend/types/users/user_employee";
// import Calendar from "../pages/Calendar";
// import MedicalOffice from "../pages/MedicalOffice";
// import VitalSigns from "../pages/VitalSigns";

// export default function Dashboard() {
//   const [open, setOpen] = useState(false);
//   const sidebarRef = useRef<HTMLDivElement | null>(null);
//   const toggleButtonRef = useRef<HTMLButtonElement | null>(null);
//   const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
//   const menuRef = useRef<HTMLDivElement | null>(null);
//   const [currentModule, setCurrentModule] = useState<React.ReactNode>(null);
//   const [loggedInUser, setLoggedInUser] = useState<Employee | null>(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedUser = localStorage.getItem("loggedInUser");
//     if (storedUser) {
//       setLoggedInUser(JSON.parse(storedUser));
//     }
//   }, []);
//   const toggleSidebar = () => {
//     setOpen((prev) => !prev);
//   };
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
//     console.log("Cerrando sesión...");
//     localStorage.removeItem("loggedInUser");
//     navigate("/");
//   };
//   const handleModuleClick = (moduleName: string) => {
//     if (moduleName === "Emisor") {
//       setCurrentModule(<Calendar />);
//     } else if (moduleName === "Signos") {
//       setCurrentModule(<VitalSigns />);
//     } else if (moduleName === "Consultorio") {
//       setCurrentModule(<MedicalOffice />);
//     }
//   };
//   useEffect(() => {
//     setCurrentModule(
//       <Modules handleModuleClick={handleModuleClick} user={loggedInUser} />
//     );
//   }, [loggedInUser]);
//   return (
//     <Box className="dashboardpage-container">
//       {" "}
//       {loggedInUser && (
//         <>
//           {" "}
//           <Topbar
//             onMenuClick={toggleSidebar}
//             onMenuOpen={handleMenuOpen}
//             username={loggedInUser.employe_name}
//             menuAnchorEl={menuAnchorEl}
//             onLogout={handleLogout}
//             toggleButtonRef={toggleButtonRef}
//             menuRef={menuRef}
//           />{" "}
//           <div ref={sidebarRef}>
//             {" "}
//             <Sidebar open={open} handleDrawerClose={toggleSidebar} />{" "}
//           </div>{" "}
//           <div className="dash-content">{currentModule}</div>{" "}
//         </>
//       )}{" "}
//     </Box>
//   );
// }

// Sidebar.tsx
import React, { useEffect, useState } from "react";
// Estilos
import "../../CSS/sidebar.css";
import { useTheme, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
// Uso de zustand para mostrar opciones segun el rol
import { useAuthStore } from "../../backendTwo/zustand/authStore"; // Importa el estado global de Zustand
import { getMenuOptionsByRole } from "../../backendTwo/service/rolSidebarOptionsService"; // Función para obtener opciones del sidebar segun rol
import { Skeleton } from "@mui/material";

const drawerWidth = "auto"; // Ancho del drawer por defecto en 170px

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

interface SidebarProps {
  open: boolean;
  handleDrawerClose: () => void;
  toggleButtonRef: React.RefObject<HTMLButtonElement>;
}

const Sidebar: React.FC<SidebarProps> = ({ open, handleDrawerClose, toggleButtonRef }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { user } = useAuthStore(); // Obtiene el usuario desde Zustand

  // constantes de skeleton
  const [loading, setLoading] = useState(true); // Estado para manejar el loading
  interface MenuItem {
    label: string;
    icon: React.ReactNode;
    title: string;
    route: string;
  }

  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    // Simula la carga de datos
    setTimeout(() => {
      const options = getMenuOptionsByRole(user);
      const formattedOptions = options.map((option) => ({
        ...option,
        title: option.title || "",
      }));
      setMenuItems(formattedOptions);
      setLoading(false); // Finaliza la carga
    }, 2000); // Ajusta el tiempo de simulación de carga
  }, [user]);

  return (
    <MuiDrawer
      className="barra-lateral"
      variant="permanent"
      open={open}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
        boxSizing: "border-box",
        ...(open && {
          "& .MuiDrawer-paper": openedMixin(theme),
        }),
        ...(!open && {
          "& .MuiDrawer-paper": closedMixin(theme),
        }),
      }}
    >
      <div
        style={{
          display: "flex",
          padding: "0px",
          marginTop: "10px",
          marginBottom: "0px",
          marginLeft: "15px",
          marginRight: "10px",
          position: "sticky",
          width: "50px",
          textAlign: "initial",
        }}
      >
        <button
          ref={toggleButtonRef}
          onClick={handleDrawerClose}
          aria-label="toggle drawer"
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            fontSize: "1.5rem",
            color: "white",
          }}
        >
          <MenuIcon />
        </button>
      </div>

      <List>
        {/*Usa las opciones laterales */}
        {loading
          ? // Mostrar Skeleton mientras se cargan los datos
            Array.from({ length: 5 }).map((_, index) => (
              <Skeleton
                key={index}
                variant="rectangular"
                height={48}
                sx={{
                  marginBottom: 2,
                  marginLeft: open ? "0px" : "auto",
                  marginRight: open ? "10px" : "auto",
                  width: open ? "90%" : "40px",
                  borderRadius: "4px",
                  backgroundColor: "rgba(12, 5, 5, 0.17)",
                }}
              />
            ))
          : // Mostrar contenido real cuando se complete la carga
            menuItems.map(({ label, icon, title, route }) => (
              <ListItem key={label} disablePadding>
                <ListItemButton
                  title={title}
                  onClick={() => navigate(route)}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      justifyContent: "center",
                      mr: open ? 3 : "auto",
                      color: "white",
                    }}
                  >
                    {icon}
                  </ListItemIcon>
                  <ListItemText primary={label} sx={{ opacity: open ? 1 : 0, color: "white" }} />
                </ListItemButton>
              </ListItem>
            ))}
      </List>
    </MuiDrawer>
  );
};

export default Sidebar;

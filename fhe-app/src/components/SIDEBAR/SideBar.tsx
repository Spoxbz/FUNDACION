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
import { Alert, Skeleton, Snackbar } from "@mui/material";

const drawerWidthOpen = 230; // Ancho del drawer cuando está abierto
const drawerWidthClosed = 55; // Ancho del drawer cuando está cerrado

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidthOpen,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidthClosed,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
});

interface SidebarProps {
  open: boolean;
  handleDrawerClose: () => void;
  toggleButtonRef: React.RefObject<HTMLButtonElement>;
}

const Sidebar: React.FC<SidebarProps> = ({ open, handleDrawerClose, toggleButtonRef }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { user, showTips } = useAuthStore(); // Obtiene el usuario desde Zustand
  const [openToast, setOpenToast] = useState(true);

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
    }, 1000); // Ajusta el tiempo de simulación de carga
  }, [user]);

  useEffect(() => {
    if (!showTips) {
      setOpenToast(false); // Desactiva el toast si los consejos están desactivados
    }
  }, [showTips]);

  return (
    <>
      <MuiDrawer
        className={`barra-lateral ${open ? "sidebar open" : "sidebar closed"}`}
        variant="permanent"
        open={open}
        sx={{
          width: drawerWidthOpen,
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
            marginLeft: "10px",
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

        <Snackbar
          open={openToast}
          autoHideDuration={6000}
          onClose={() => setOpenToast(false)}
          sx={{ alignSelf: "start" }}
        >
          <Alert onClose={() => setOpenToast(false)} severity="info" sx={{ width: "100%" }}>
            Menu de navegación
          </Alert>
        </Snackbar>
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
                        // minWidth: 0,
                        justifyContent: "center",
                        mr: open ? 3 : "auto",
                        color: "white",
                      }}
                    >
                      {icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={label}
                      sx={{
                        opacity: open ? 1 : 0,
                        color: "white",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
        </List>
      </MuiDrawer>
    </>
  );
};

export default Sidebar;

// Sidebar.tsx
import React from "react";
import { useTheme, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import "../../CSS/sidebar.css";
// Import de las opciones
import { listOptions } from "./sidebaroptions";
import { useNavigate } from "react-router-dom";

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
}

const Sidebar: React.FC<SidebarProps> = ({ open, handleDrawerClose }) => {
  const theme = useTheme();
  const navigate = useNavigate();

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
        {listOptions.map(({ label, icon, route }, index) => (
          <ListItem key={label} disablePadding>
            <ListItemButton
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

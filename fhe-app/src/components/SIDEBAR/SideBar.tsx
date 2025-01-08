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
import MailIcon from "@mui/icons-material/Mail";
import { Home } from "@mui/icons-material";
import "../../CSS/sidebar.css";

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

  const listOptions: string[] = [
    "Opción 1",
    "Opción 2",
    "Opción 3",
    "Opción 4",
    "Opción 5",
    "Opción 6",
  ];

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
        {listOptions.map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            sx={{
              display: "block",
              height: "40px",
              width: "100%",
            }}
          >
            <ListItemButton
              style={{ color: "white" }}
              sx={{
                minHeight: 48,
                px: 2.5,
                justifyContent: open ? "initial" : "center",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  justifyContent: "center",
                  mr: open ? 3 : "auto",
                  color: "white",
                  marginRight: "5px",
                }}
              >
                {index % 2 === 0 ? <Home /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={{
                  opacity: open ? 1 : 0,
                  display: "flex",
                  flexWrap: "wrap",
                  fontSize: "14px",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </MuiDrawer>
  );
};

export default Sidebar;

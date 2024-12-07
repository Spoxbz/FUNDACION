import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Menu,
  MenuItem,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "../../CSS/topbar.css";

interface TopbarProps {
  onMenuClick: () => void;
  onMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
  onMenuClose: () => void;
  username: string;
  menuAnchorEl: null | HTMLElement;
  onLogout: () => void;
  toggleButtonRef: React.RefObject<HTMLButtonElement>;
}

const Topbar: React.FC<TopbarProps> = ({
  onMenuClick,
  onMenuOpen,
  onMenuClose,
  username,
  menuAnchorEl,
  onLogout,
  toggleButtonRef,
}) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      className="appbar-container"
    >
      <Toolbar className="toolbar-content">
        {/* Sección izquierda */}
        <Box
          className="left-section"
          sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}
        >
          <IconButton
            ref={toggleButtonRef}
            color="inherit"
            onClick={onMenuClick}
            aria-label="toggle drawer"
            edge="start"
            sx={{ marginLeft: 0 }}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Sección central */}

        <Box className="midle-section">
          <img className="img-logo" src="logo.avif" alt="" />
          <Typography variant="h6">Fundación Hogar del Ecuador</Typography>
        </Box>

        {/* Sección derecha */}
        <Box className="rigth-section" onClick={onMenuOpen}>
          <IconButton
            color="inherit"
            aria-controls="user-menu"
            aria-haspopup="true"
            onClick={onMenuOpen}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1, // Espacio entre el Avatar y el texto
            }}
          >
            <Avatar
              sx={{
                width: 30,
                height: 30,
              }}
              src=""
            />
          </IconButton>
          <Typography
            variant="body1"
            style={{ cursor: "pointer" }}
            flexWrap={"wrap"}
          >
            {username}
          </Typography>
          <Menu
            id="user-menu"
            anchorEl={menuAnchorEl}
            open={Boolean(menuAnchorEl)}
            onClose={onMenuClose}
          >
            <MenuItem>Settings</MenuItem>
            <MenuItem onClick={onLogout}>Cerrar Sesion</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;

// sidebarConfig.ts
import React from "react";
import { Home, Mail } from "@mui/icons-material";
// Import de rutas
import ROUTES from "../../enviroment/variables_routes";

export const listOptions = [
  { label: "Inicio", icon: React.createElement(Home), route: ROUTES.DASHBOARD.FCHILD },
  { label: "Mensajes", icon: React.createElement(Mail), route: ROUTES.DASHBOARD.FCHILD },
  { label: "Opción 3", icon: React.createElement(Mail), route: ROUTES.DASHBOARD.FCHILD },
  { label: "Opción 4", icon: React.createElement(Home), route: ROUTES.DASHBOARD.FCHILD },
  { label: "Opción 5", icon: React.createElement(Mail), route: ROUTES.DASHBOARD.FCHILD },
];

// sidebarConfig.ts
import React from "react";
import { Home, Mail, MedicalServices, PersonAddAlt } from "@mui/icons-material";
// Import de rutas
import ROUTES from "../../enviroment/variables_routes";

// Admin rol_id 1
export const listOptionsAdmin = [
  { label: "Inicio", icon: React.createElement(Home), route: ROUTES.DASHBOARD.FCHILD },
  { label: "Registrar usuario", icon: React.createElement(PersonAddAlt), route: ROUTES.DASHBOARD.FCHILD },
  { label: "Crear Consultorio", icon: React.createElement(MedicalServices), route: ROUTES.DASHBOARD.FCHILD },
  { label: "Listar usuarios", icon: React.createElement(Home), route: ROUTES.DASHBOARD.FCHILD },
  { label: "Opción 5", icon: React.createElement(Mail), route: ROUTES.DASHBOARD.FCHILD },
];

// Asistente rol_id 2
export const listOptionsAsistente = [
  { label: "Inicio", icon: React.createElement(Home), route: ROUTES.DASHBOARD.FCHILD },
  { label: "Asistente 1", icon: React.createElement(Mail), route: ROUTES.DASHBOARD.FCHILD },
  { label: "Asistente 2", icon: React.createElement(Mail), route: ROUTES.DASHBOARD.FCHILD },
  { label: "Asistente 3", icon: React.createElement(Home), route: ROUTES.DASHBOARD.FCHILD },
  { label: "Asistente 4", icon: React.createElement(Mail), route: ROUTES.DASHBOARD.FCHILD },
];

// Emisor rol_id 3
export const listOptionsEmisor = [
  { label: "Inicio", icon: React.createElement(Home), route: ROUTES.DASHBOARD.FCHILD },
  { label: "Emisor 1", icon: React.createElement(Mail), route: ROUTES.DASHBOARD.FCHILD },
  { label: "Emisor 2", icon: React.createElement(Mail), route: ROUTES.DASHBOARD.FCHILD },
  { label: "Emisor 3", icon: React.createElement(Home), route: ROUTES.DASHBOARD.FCHILD },
  { label: "Emisor 4", icon: React.createElement(Mail), route: ROUTES.DASHBOARD.FCHILD },
];

// Medico rol_id 4
export const listOptionsMedico = [
  { label: "Inicio", icon: React.createElement(Home), route: ROUTES.DASHBOARD.FCHILD },
  { label: "Medico 1", icon: React.createElement(Mail), route: ROUTES.DASHBOARD.FCHILD },
  { label: "Medico 2", icon: React.createElement(Mail), route: ROUTES.DASHBOARD.FCHILD },
  { label: "Medico 3", icon: React.createElement(Home), route: ROUTES.DASHBOARD.FCHILD },
  { label: "Medico 4", icon: React.createElement(Mail), route: ROUTES.DASHBOARD.FCHILD },
];

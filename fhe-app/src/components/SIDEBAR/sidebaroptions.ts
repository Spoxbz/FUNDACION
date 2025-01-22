/**
 * * Este archivo sirve para asignar cada opcion a mostrar en el sidebar dependiendo el rol del usuario en sesion
 * * Aqui se hace uso del React create element para poder usar iconos en los arrays
 * * Aqui mismo se define el tipo para el array que liste las opciones del sidebar
 * * Estas constantes son usadas en el archivo rolSidebarOptionsService.ts
 */
import React, { ReactElement } from "react";
import {
  EditCalendar,
  HealthAndSafety,
  Home,
  Mail,
  MedicalServices,
  PersonAddAlt,
  RecentActors,
} from "@mui/icons-material";
// Import de rutas
import ROUTES from "../../enviroment/variables_routes";

interface typesSidebarOptions {
  label: string;
  icon: ReactElement;
  title?: string;
  route: string;
}

// Admin rol_id 1
export const listOptionsAdmin: typesSidebarOptions[] = [
  { label: "Inicio", icon: React.createElement(Home), title: "Ir a inicio", route: ROUTES.DASHBOARD.FCHILD },
  {
    label: "Crear usuario",
    icon: React.createElement(PersonAddAlt),
    title: "Crear Usuario",
    route: ROUTES.DASHBOARD.FCHILD,
  },
  {
    label: "Crear Consultorio",
    icon: React.createElement(MedicalServices),
    title: "Crear Consultorio",
    route: ROUTES.DASHBOARD.FCHILD,
  },
  {
    label: "Listar usuarios",
    icon: React.createElement(RecentActors),
    title: "Crear Usuario",
    route: ROUTES.DASHBOARD.FCHILD,
  },
  {
    label: "Crear H. Médico",
    icon: React.createElement(EditCalendar),
    title: "Crear Horario Médico",
    route: ROUTES.DASHBOARD.FCHILD,
  },
  { label: "Crear Especialidad", icon: React.createElement(HealthAndSafety), route: ROUTES.DASHBOARD.FCHILD },
];

// Asistente rol_id 2
export const listOptionsAsistente: typesSidebarOptions[] = [
  { label: "Inicio", icon: React.createElement(Home), route: ROUTES.DASHBOARD.FCHILD },
  { label: "Bloquear Médico", icon: React.createElement(Mail), route: ROUTES.DASHBOARD.FCHILD },
];

// Emisor rol_id 3
export const listOptionsEmisor: typesSidebarOptions[] = [
  { label: "Inicio", icon: React.createElement(Home), route: ROUTES.DASHBOARD.FCHILD },
  { label: "Bloquear Médico", icon: React.createElement(Mail), route: ROUTES.DASHBOARD.FCHILD },
];

// Medico rol_id 4
export const listOptionsMedico: typesSidebarOptions[] = [
  { label: "Inicio", icon: React.createElement(Home), route: ROUTES.DASHBOARD.FCHILD },
  { label: "Medico 1", icon: React.createElement(Mail), route: ROUTES.DASHBOARD.FCHILD },
  { label: "Medico 2", icon: React.createElement(Mail), route: ROUTES.DASHBOARD.FCHILD },
  { label: "Medico 3", icon: React.createElement(Home), route: ROUTES.DASHBOARD.FCHILD },
  { label: "Medico 4", icon: React.createElement(Mail), route: ROUTES.DASHBOARD.FCHILD },
];

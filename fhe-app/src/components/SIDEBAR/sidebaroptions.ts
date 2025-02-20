/**
 * * Este archivo sirve para asignar cada opcion a mostrar en el sidebar dependiendo el rol del usuario en sesion
 * * Aqui se hace uso del React create element para poder usar iconos en los arrays
 * * Aqui mismo se define el tipo para el array que liste las opciones del sidebar
 * * Estas constantes son usadas en el archivo rolSidebarOptionsService.ts
 */
import React, { ReactElement } from "react";
import {
  CalendarMonth,
  ConfirmationNumber,
  EditCalendar,
  HealthAndSafety,
  Home,
  MedicalServices,
  PersonAdd,
  PersonAddAlt,
  PersonOff,
  PostAdd,
} from "@mui/icons-material";

// Import de rutas
import ROUTES from "../../enviroment/variables_routes";
import Tools from "./tooltips/Tools";

interface typesSidebarOptions {
  label: string;
  icon: ReactElement;
  title?: string;
  route: string;
}

// Admin rol_id 1
export const listOptionsAdmin: typesSidebarOptions[] = [
  {
    label: "Inicio",
    icon: React.createElement(Tools, { icon: React.createElement(Home), title: "Inicio" }),
    route: ROUTES.DASHBOARD.FCHILD,
  },
  {
    label: "Conf. Empleados",
    icon: React.createElement(Tools, { icon: React.createElement(PersonAdd), title: "Configuración Empleados" }),
    route: ROUTES.ADMIN.ADMINPAGEMPLOYEE,
  },
  {
    label: "Conf. Consultorio",
    icon: React.createElement(Tools, {
      icon: React.createElement(MedicalServices),
      title: "Configuración Consultorio",
    }),
    route: ROUTES.ADMIN.ADMINPAGEOFFICE,
  },
  {
    label: "Conf. Especialidad",
    icon: React.createElement(Tools, { icon: React.createElement(HealthAndSafety), title: "Configurar Especialidad" }),
    route: ROUTES.ADMIN.ADMINPAGESPECIALTIES,
  },
  {
    label: "Conf. Paciente",
    icon: React.createElement(Tools, { icon: React.createElement(PersonAddAlt), title: "Configurar Paciente" }),
    route: ROUTES.DASHBOARD.FCHILD,
  },
  {
    label: "Crear Hor. Médico",
    icon: React.createElement(Tools, { icon: React.createElement(EditCalendar), title: "Crear Horario Médico" }),
    route: ROUTES.DASHBOARD.FCHILD,
  },

  {
    label: "Bloquear Médico",
    icon: React.createElement(Tools, { icon: React.createElement(PersonOff), title: "Bloquear Médico" }),
    route: ROUTES.DASHBOARD.FCHILD,
  },
  {
    label: "Agregar Turno",
    icon: React.createElement(Tools, { icon: React.createElement(PostAdd), title: "Agregar Turno" }),
    route: ROUTES.DASHBOARD.FCHILD,
  },
];

// Asistente rol_id 2
export const listOptionsAsistente: typesSidebarOptions[] = [
  {
    label: "Inicio",
    icon: React.createElement(Tools, { icon: React.createElement(Home), title: "Inicio" }),
    route: ROUTES.DASHBOARD.FCHILD,
  },
  {
    label: "Bloquear Médico",
    icon: React.createElement(Tools, { icon: React.createElement(PersonOff), title: "Bloquear Médico" }),
    route: ROUTES.DASHBOARD.FCHILD,
  },
  {
    label: "Conf. Paciente",
    icon: React.createElement(Tools, { icon: React.createElement(PersonAddAlt), title: "Configurar Paciente" }),
    route: ROUTES.DASHBOARD.FCHILD,
  },
  {
    label: "Agregar Turno",
    icon: React.createElement(Tools, { icon: React.createElement(PostAdd), title: "Agregar Turno" }),
    route: ROUTES.DASHBOARD.FCHILD,
  },
];

// Emisor rol_id 3
export const listOptionsEmisor: typesSidebarOptions[] = [
  {
    label: "Inicio",
    icon: React.createElement(Tools, { icon: React.createElement(Home), title: "Inicio" }),
    route: ROUTES.DASHBOARD.FCHILD,
  },
  {
    label: "Bloquear Médico",
    icon: React.createElement(Tools, { icon: React.createElement(PersonOff), title: "Bloquear Médico" }),
    route: ROUTES.DASHBOARD.FCHILD,
  },
  {
    label: "Conf. Paciente",
    icon: React.createElement(Tools, { icon: React.createElement(PersonAddAlt), title: "Configurar Paciente" }),
    route: ROUTES.DASHBOARD.FCHILD,
  },
  {
    label: "Agregar Turno",
    icon: React.createElement(Tools, { icon: React.createElement(PostAdd), title: "Agregar Turno" }),
    route: ROUTES.DASHBOARD.FCHILD,
  },
];

// Medico rol_id 4
export const listOptionsMedico: typesSidebarOptions[] = [
  {
    label: "Inicio",
    icon: React.createElement(Tools, { icon: React.createElement(Home), title: "Inicio" }),
    route: ROUTES.DASHBOARD.FCHILD,
  },
  {
    label: "Turnos",
    icon: React.createElement(Tools, { icon: React.createElement(ConfirmationNumber), title: "Ver turnos" }),
    route: ROUTES.DASHBOARD.FCHILD,
  },
  {
    label: "Agenda",
    icon: React.createElement(Tools, { icon: React.createElement(CalendarMonth), title: "Revisar Agenda" }),
    route: ROUTES.DASHBOARD.FCHILD,
  },
];

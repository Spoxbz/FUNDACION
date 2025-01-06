// data_sidebar_options.ts
import React from "react";
import { SidebarOption } from "../../types/UserOptions/user_sidebar_options";
import {
  Home,
  AccountCircle,
  Schedule,
  ListAlt,
  Block,
  Add,
  AccessTime,
} from "@mui/icons-material";

// Acción ficticia para cada opción (puedes cambiar estas funciones por las que necesites)
const homeAction = () => {
  console.log("Volver al home");
};
const registerUserAction = () => {
  console.log("Registrar usuarios");
};
const registerSpecialtyAction = () => {
  console.log("Registrar especialidades");
};
const setScheduleAction = () => {
  console.log("Establecer horario");
};
const listUsersAction = () => {
  console.log("Listar usuarios");
};
const blockDoctorAction = () => {
  console.log("Bloquear médicos");
};
const addShiftAction = () => {
  console.log("Añadir turno");
};
const setTimeAction = () => {
  console.log("Establecer tiempo de atención");
};

export const sidebarOptions: SidebarOption[] = [
  // Opción común para todos los usuarios
  {
    title: "Home",
    icon: React.createElement(Home),
    action: homeAction,
    roles: [1, 2, 3, 4],
  },

  // Opciones específicas para admin
  {
    title: "Registrar Usuarios",
    icon: React.createElement(AccountCircle),
    action: registerUserAction,
    roles: [1],
  },
  {
    title: "Registrar Especialidades",
    icon: React.createElement(AccountCircle),
    action: registerSpecialtyAction,
    roles: [1],
  },
  {
    title: "Establecer Horario",
    icon: React.createElement(Schedule),
    action: setScheduleAction,
    roles: [1],
  },
  {
    title: "Listar Usuarios",
    icon: React.createElement(ListAlt),
    action: listUsersAction,
    roles: [1, 4],
  },

  // Opciones específicas para emisor
  {
    title: "Bloquear Médicos",
    icon: React.createElement(Block),
    action: blockDoctorAction,
    roles: [2, 3],
  },
  {
    title: "Añadir Turno",
    icon: React.createElement(Add),
    action: addShiftAction,
    roles: [2, 3],
  },
  {
    title: "Establecer Tiempo de Atención",
    icon: React.createElement(AccessTime),
    action: setTimeAction,
    roles: [2, 3],
  },

  // Opciones específicas para asistente
  // Nota: El asistente tiene todas las opciones de emisor y médico
  // Agrega otras opciones específicas si es necesario
];

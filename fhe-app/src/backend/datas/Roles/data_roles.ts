import { Role } from "../../types/tables";

export const roles: Role[] = [
  {
    id_role: 1,
    role_name: "admin",
    role_details: {
      id_role_details: 1,
      employee_id: 1,
      role_id: 1,
      details: null,
    },
  },
  {
    id_role: 2,
    role_name: "emisor",
    role_details: {
      id_role_details: 3,
      employee_id: 3,
      role_id: 1,
      details: null,
    },
  },
  {
    id_role: 3,
    role_name: "asistente",
    role_details: {
      id_role_details: 2,
      employee_id: 3,
      role_id: 1,
      details: null,
    },
  },
  {
    id_role: 4,
    role_name: "medico",
    role_details: {
      id_role_details: 2,
      employee_id: 3,
      role_id: 1,
      details: null,
    },
  },
];

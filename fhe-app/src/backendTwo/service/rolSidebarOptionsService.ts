import { Employee } from "../model/model.employee";
// Importa todas las listas de opciones
import {
  listOptionsAdmin,
  listOptionsAsistente,
  listOptionsEmisor,
  listOptionsMedico,
} from "../../components/SIDEBAR/sidebaroptions";

export const getMenuOptionsByRole = (user: Employee | null) => {
  if (!user) return [];

  switch (user.rol_id) {
    case 1:
      return listOptionsAdmin; // Admin
    case 2:
      return listOptionsAsistente; // Asistente
    case 3:
      return listOptionsEmisor;
    case 4:
      return listOptionsMedico;
    default:
      return [];
  }
};

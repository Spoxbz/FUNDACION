/**
 * * Este archivo usa las opciones de sidebar segun el rol especificadas en "sidebaroptions.ts"
 * * Este archivo usa el modelo de employee para especificar el type de user
 * * Este arcivho es usado en el componente SideBar.tsx el cual con .map itera los arrays segun el rol
 */

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

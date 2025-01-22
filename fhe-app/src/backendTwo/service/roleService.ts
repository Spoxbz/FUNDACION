import { client } from "../api/client";
import { rol } from "../model/mode.rol";

// Obtener todos los roles (si los necesitas en algún momento)
export const fetchRoles = async (): Promise<rol[]> => {
  const { data, error } = await client.from("rol").select("*");
  if (error) throw new Error("Error obteniendo roles: " + error.message);
  return data as rol[];
};

// Obtener el nombre de un rol según su rol_id
export const fetchRoleNameById = async (rol_id: number): Promise<string | null> => {
  const { data, error } = await client.from("rol").select("rol_name").eq("rol_id", rol_id).single();
  if (error) {
    console.error("Error obteniendo el rol:", error);
    return null;
  }
  return data?.rol_name || null;
};

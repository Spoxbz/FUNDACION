import { client } from "../api/client";
import { Offices } from "../model/model.office";

/**
 * Función para obtener todos los consultorios
 * @returns Promise<Office[]>
 */
export const fetchOffices = async (): Promise<Offices[]> => {
  const { data, error } = await client.from("offices").select("*");

  if (error) {
    console.error("Error obteniendo los consultorios:", error.message);
    throw new Error("No se pudo cargar la lista de consultorios");
  }

  return data as Offices[];
};

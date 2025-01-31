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

export const deleteOffice = async (officeId: number): Promise<void> => {
  const { error } = await client.from("offices").delete().eq("office_id", officeId);

  if (error) {
    console.error("Error eliminando el consultorio:", error.message);
    throw new Error("No se pudo eliminar el consultorio");
  }
};

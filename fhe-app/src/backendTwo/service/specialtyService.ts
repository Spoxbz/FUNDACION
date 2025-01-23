import { client } from "../api/client";
import { Specialty } from "../model/model.specialty";
import { MedicalSpecialty } from "../model/model.medicalspecialty";
import { Employee } from "../model/model.employee";

const TABLE_NAME = "specialty";

// Obtener los empleados por specialty_id
export const fetchProfessionalsBySpecialty = async (specialtyId: number): Promise<Employee[]> => {
  // Obtener los employee_id asociados a specialty_id
  const { data: medicalSpecialties, error } = await client
    .from<MedicalSpecialty>("medical_specialty") /*No hay problema, sin funciona con normalidad */
    .select("employee_id")
    .eq("specialty_id", specialtyId);

  if (error) throw new Error(`Error al obtener los profesionales: ${error.message}`);

  // Obtener los empleados con los employee_id obtenidos
  const employeeIds = medicalSpecialties.map((item) => item.employee_id);
  const { data: employees, error: employeeError } = await client
    .from<Employee>("employee") /*No hay problema, sin funciona con normalidad */
    .select("*")
    .in("employee_id", employeeIds);

  if (employeeError) throw new Error(`Error al obtener los empleados: ${employeeError.message}`);

  return employees || [];
};

// Obtener todas las especialidades
export const fetchAllSpecialties = async (): Promise<Specialty[]> => {
  const { data, error } = await client.from(TABLE_NAME).select("*");
  if (error) throw new Error(`Error al obtener especialidades: ${error.message}`);
  return data || [];
};

// Obtener una especialidad por ID
export const fetchSpecialtyById = async (id: number): Promise<Specialty | null> => {
  const { data, error } = await client.from(TABLE_NAME).select("*").eq("specialty_id", id).single();
  if (error) throw new Error(`Error al obtener la especialidad: ${error.message}`);
  return data;
};

// Crear una nueva especialidad
export const createSpecialty = async (specialty: Omit<Specialty, "specialty_id">): Promise<void> => {
  const { error } = await client.from(TABLE_NAME).insert(specialty);
  if (error) throw new Error(`Error al crear la especialidad: ${error.message}`);
};

// Actualizar una especialidad existente
export const updateSpecialty = async (id: number, specialty: Partial<Specialty>): Promise<void> => {
  const { error } = await client.from(TABLE_NAME).update(specialty).eq("specialty_id", id);
  if (error) throw new Error(`Error al actualizar la especialidad: ${error.message}`);
};

// Eliminar una especialidad por ID
export const deleteSpecialty = async (id: number): Promise<void> => {
  const { error } = await client.from(TABLE_NAME).delete().eq("specialty_id", id);
  if (error) throw new Error(`Error al eliminar la especialidad: ${error.message}`);
};

import { client } from "../api/client";
import { Employee } from "../model/model.employee";

const TABLE_NAME = "employee";

// Obtener todos los empleados
export const fetchEmployees = async (): Promise<Employee[]> => {
  const { data, error } = await client.from(TABLE_NAME).select("*");
  if (error) throw new Error(`Error obteniendo empleados: ${error.message}`);
  return data as Employee[];
};

// Obtener un empleado por ID
export const fetchEmployeeById = async (employee_id: number): Promise<Employee | null> => {
  const { data, error } = await client.from(TABLE_NAME).select("*").eq("employee_id", employee_id).single();
  if (error) throw new Error(`Error obteniendo empleado: ${error.message}`);
  return data as Employee;
};

// Crear un nuevo empleado
export const createEmployee = async (employee: Omit<Employee, "employee_id">): Promise<Employee> => {
  const { data, error } = await client.from(TABLE_NAME).insert(employee).select().single();
  if (error) throw new Error(`Error creando empleado: ${error.message}`);
  return data as Employee;
};

// Actualizar un empleado por ID
export const updateEmployee = async (employee_id: number, updatedEmployee: Partial<Employee>): Promise<Employee> => {
  const { data, error } = await client
    .from(TABLE_NAME)
    .update(updatedEmployee)
    .eq("employee_id", employee_id)
    .select()
    .single();
  if (error) throw new Error(`Error actualizando empleado: ${error.message}`);
  return data as Employee;
};

// Eliminar un empleado por ID
export const deleteEmployee = async (employee_id: number): Promise<void> => {
  const { error } = await client.from(TABLE_NAME).delete().eq("employee_id", employee_id);
  if (error) throw new Error(`Error eliminando empleado: ${error.message}`);
};

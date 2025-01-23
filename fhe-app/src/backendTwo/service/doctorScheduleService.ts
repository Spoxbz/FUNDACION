import { client } from "../api/client";
import { DoctorSchedule } from "../model/model.doctor_schedule";

const TABLE_NAME = "doctor_schedule";

// Obtener el horario de trabajo de un médico por employee_id
export const fetchScheduleByEmployeeId = async (employeeId: number): Promise<DoctorSchedule[]> => {
  const { data, error } = await client.from<DoctorSchedule>(TABLE_NAME).select("*").eq("employee_id", employeeId);

  if (error) throw new Error(`Error al obtener el horario del médico: ${error.message}`);
  return data || [];
};

// Crear o actualizar el horario de un médico
export const upsertSchedule = async (schedule: DoctorSchedule): Promise<void> => {
  const { data, error } = await client
    .from<DoctorSchedule>(TABLE_NAME)
    .upsert(schedule, { onConflict: ["employee_id", "day"] }); // Conflicto por día y médico

  if (error) throw new Error(`Error al guardar el horario del médico: ${error.message}`);
};

// Eliminar el horario de un médico
export const deleteSchedule = async (scheduleId: number): Promise<void> => {
  const { error } = await client.from<DoctorSchedule>(TABLE_NAME).delete().eq("id", scheduleId);

  if (error) throw new Error(`Error al eliminar el horario del médico: ${error.message}`);
};

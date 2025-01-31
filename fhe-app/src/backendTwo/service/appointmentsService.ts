import { client } from "../api/client";
import { Appointment } from "../model/model.appointment";

// Función para obtener todas las citas (appointments)
export const fetchAppointments = async (): Promise<Appointment[]> => {
  const { data, error } = await client.from("appointment").select("*");

  if (error) {
    throw new Error(`Error al obtener las citas: ${error.message}`);
  }

  return data as Appointment[];
};

// Función para obtener una cita por ID
export const fetchAppointmentById = async (appointmentId: number): Promise<Appointment | null> => {
  const { data, error } = await client.from("appointment").select("*").eq("appointment_id", appointmentId).single();

  if (error) {
    console.error(`Error al obtener la cita: ${error.message}`);
    return null;
  }

  return data as Appointment;
};

// Función para crear una nueva cita
export const createAppointment = async (
  appointment: Omit<Appointment, "appointment_id" | "created_at" | "updated_at" | "deleted_at">
): Promise<Appointment> => {
  const { data, error } = await client.from("appointment").insert([appointment]).select("*").single();

  if (error) {
    throw new Error(`Error al crear la cita: ${error.message}`);
  }

  return data as Appointment;
};

// Función para actualizar una cita existente
export const updateAppointment = async (
  appointmentId: number,
  updatedFields: Partial<Omit<Appointment, "appointment_id" | "created_at">>
): Promise<Appointment> => {
  const { data, error } = await client
    .from("appointment")
    .update(updatedFields)
    .eq("appointment_id", appointmentId)
    .select("*")
    .single();

  if (error) {
    throw new Error(`Error al actualizar la cita: ${error.message}`);
  }

  return data as Appointment;
};

// Función para eliminar una cita (borrado lógico)
export const deleteAppointment = async (appointmentId: number, deletedBy: number): Promise<void> => {
  const { error } = await client
    .from("appointment")
    .update({ deleted_at: new Date().toISOString(), deleted_by: deletedBy })
    .eq("appointment_id", appointmentId);

  if (error) {
    throw new Error(`Error al eliminar la cita: ${error.message}`);
  }
};

export const getAppointments = async (): Promise<Appointment[]> => {
  const { data, error } = await client.from("appointment").select("*");

  if (error) {
    console.error("Error obteniendo los datos de appointment:", error);
    return [];
  }

  return data;
};

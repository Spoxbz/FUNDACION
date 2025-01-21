export interface Appointment {
  appointment_id: number;
  employee_id: number;
  patient_id: number;
  office_id: number;
  doctor_schedule_id: number;
  appointment_date: Date;
  appointment_time: string;
  notes?: string;
  is_extra?: boolean;
  created_by: number;
  updated_by?: number;
  deleted_by?: number;
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
  is_vital_signs_attended: boolean; // Estado de atención en signos vitales
  is_no_show: boolean; // Estado de no asistencia
  is_doctor_attended: boolean; // Estado de atención por el médico
}

export interface AttendedPatients {
  id: number;
  patient_id: number;
  appointment_id: number;
  module_id: string;
  attended_by: number;
  attended_at: Date;
}

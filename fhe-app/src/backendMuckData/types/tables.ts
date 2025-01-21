// Tabla principal de empleados
export interface Employee {
  id_employee: number;
  employee_name: string;
  employee_lastname: string;
  employee_ci: string;
  employee_gender: string;
  employee_born_date: Date;
  employee_age: number;
  employee_phone_number: string;
  employee_address: string;
  username: string;
  employee_email: string;
  employee_password: string;
  pin: string;
  role_id: number; // Relación con Role
  role: Role; // Relación directa con el rol
}

// Tabla principal de pacientes
export interface Patient {
  id_patient: number;
  patient_name: string;
  patient_lastname: string;
  patient_ci: string;
  patient_gender: string;
  patient_born_date: Date;
  patient_age: number;
  patient_phone_number: string;
  patient_email: string;
  patient_address: string;
}

// Roles de empleados
export interface Role {
  id_role: number;
  role_name: string; // Ejemplo: "Médico", "Administrador"
  role_details: RoleDetails; // Relación polimórfica con detalles específicos del rol
}

// Tabla mediaria para los detalles específicos según el rol
export interface RoleDetails {
  id_role_details: number;
  employee_id: number; // Relación con Employee
  role_id: number; // Relación con Role
  details: MedicalDetails | AdminDetails | null; // Detalles según el rol
}

// Detalles específicos del rol de médico
export interface MedicalDetails {
  id_medical_details: number;
  employee_id: number; // Relación con Employee
  specialties: MedicalSpecialty[]; // Relación con especialidades
  schedules: DoctorSchedule[]; // Relación con horarios
  consultation_room_id: number; // Relación con ConsultingRoom
  consultation_room: ConsultingRoom; // Relación directa
}

// Detalles específicos del rol de administrador (puedes expandir según necesidades)
export interface AdminDetails {
  id_admin_details: number;
  employee_id: number; // Relación con Employee
  admin_area: string; // Ejemplo: "Gestión de usuarios"
}

// Especialidades médicas
export interface MedicalSpecialty {
  id_specialty: number;
  specialty_name: string;
}

// Horarios del médico
export interface DoctorSchedule {
  id_schedule: number;
  doctor_id: number; // Relación con MedicalDetails
  specialty_id: number; // Relación con MedicalSpecialty
  specialty: MedicalSpecialty; // Relación directa
  days: ScheduleDay[]; // Relación con días laborales
}

// Días laborales de un médico
export interface ScheduleDay {
  id_day: number;
  schedule_id: number; // Relación con DoctorSchedule
  day: string; // Ejemplo: "Lunes"
  morning_shift?: Shift; // Relación con turno de mañana
  afternoon_shift?: Shift; // Relación con turno de tarde
}

// Turnos
export interface Shift {
  id_shift: number;
  start_time: string; // Formato "HH:mm"
  end_time: string; // Formato "HH:mm"
  consultation_duration: number; // Duración en minutos
  availability: DoctorAvailability[]; // Relación con disponibilidad
}

// Disponibilidad de un médico
export interface DoctorAvailability {
  id_availability: number;
  shift_id: number; // Relación con Shift
  day: string; // Ejemplo: "Lunes"
}

// Consultorios médicos
export interface ConsultingRoom {
  id_consultation_room: number;
  room_name: string;
}

// Turnos (citas médicas)
export interface Appointment {
  id_appointment: number;
  appointment_number: string; // Ejemplo: "HG33"
  appointment_name: string; // Ejemplo: "Consulta General"
  room_id: number; // Relación con ConsultingRoom
  room: ConsultingRoom; // Relación directa
  appointment_time: string; // Formato "HH:mm"
  issued_by: number; // Relación con Employee (quién emitió el turno)
  issued_by_employee: Employee; // Relación directa
  patient_id: number; // Relación con Patient
  patient: Patient; // Relación directa
  observations: string;
  doctor_id: number; // Relación con MedicalDetails
  doctor_details: MedicalDetails; // Relación directa
  specialty_id: number; // Relación con MedicalSpecialty
  specialty: MedicalSpecialty; // Relación directa
  appointment_date: Date;
  is_paid: boolean;
  is_reserved: boolean;
}

// Log de modificaciones de citas
export interface AppointmentLog {
  id_log: number;
  appointment_id: number; // Relación con Appointment
  appointment: Appointment; // Relación directa
  modified_by: number; // Relación con Employee
  modified_by_employee: Employee; // Relación directa
  modification_type: string; // Ejemplo: "Eliminado", "Actualizado"
  modification_date: Date;
}

// export interface Employee {
//   id_employee: number;
//   employee_name: string;
//   employee_lastname: string;
//   employee_ci: string;
//   employee_gender: string;
//   employee_born_date: Date;
//   employee_age: number;
//   employee_phone_number: string;
//   employee_address: string;
//   username: string;
//   employee_email: string;
//   employee_password: string;
//   pin: string;
//   rol_id: number; // Relación con Role
// }

// export interface Patient {
//   id_patient: number;
//   patient_name: string;
//   patient_lastname: string;
//   patient_ci: string;
//   patient_gender: string;
//   patient_born_date: Date;
//   patient_age: number;
//   patient_phone_number: string;
//   patient_email: string;
//   patient_address: string;
// }

// export interface Role {
//   id_rol: number;
//   rol_name: string;
// }

// export interface MedicalSpecialty {
//   id_specialty: number;
//   specialty_name: string;
// }

// export interface DoctorSpecialty {
//   id: number;
//   doctor_id: number; // Relación con Employee
//   specialty_id: number; // Relación con MedicalSpecialty
// }

// export interface DoctorSchedule {
//   id_schedule: number;
//   doctor_id: number; // Relación con Employee
//   specialty_id: number; // Relación con MedicalSpecialty
//   day_of_week: string; // Ejemplo: "Monday", "Tuesday"
//   start_time_morning: string; // Formato "HH:mm"
//   end_time_morning: string; // Formato "HH:mm"
//   start_time_afternoon: string; // Formato "HH:mm"
//   end_time_afternoon: string; // Formato "HH:mm"
//   break_start_time: string; // Hora de almuerzo
//   break_end_time: string; // Hora de regreso
// }

// export interface ConsultingRoom {
//   id_room: number;
//   room_name: string;
// }

// export interface DoctorAvailability {
//   id_availability: number;
//   doctor_id: number; // Relación con Employee
//   specialty_id: number; // Relación con MedicalSpecialty
//   day_of_week: string; // Ejemplo: "Monday", "Tuesday"
//   start_time: string; // Formato "HH:mm"
//   end_time: string; // Formato "HH:mm"
// }

// export interface Appointment {
//   id_appointment: number;
//   appointment_number: string; // Ejemplo: "HG33"
//   appointment_name: string; // Ejemplo: "Consulta General"
//   room_id: number; // Relación con ConsultingRoom
//   appointment_time: string; // Formato "HH:mm"
//   issued_by: number; // Relación con Employee (quién emitió el turno)
//   patient_ci?: string; // Opcional si el turno es reservado
//   patient_name: string;
//   patient_contact: string;
//   observations: string;
//   doctor_id: number; // Relación con Employee (médico asignado)
//   specialty_id: number; // Relación con MedicalSpecialty
//   appointment_date: Date;
//   is_paid: boolean;
//   is_reserved: boolean;
// }
// export interface AppointmentLog {
//   id_log: number;
//   appointment_id: number; // Relación con Appointment
//   modified_by: number; // Relación con Employee
//   modification_type: string; // Ejemplo: "Eliminado", "Actualizado"
//   modification_date: Date;
// }

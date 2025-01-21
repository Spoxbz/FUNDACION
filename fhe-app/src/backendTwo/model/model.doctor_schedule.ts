export interface DoctorSchedule {
  id: number;
  employee_id: number;
  office_id: number;
  day: string;
  morning_shift_start?: string;
  morning_shift_end?: string;
  afternoon_shift_start?: string;
  afternoon_shift_end?: string;
  lunch_break_start?: string;
  lunch_break_end?: string;
  consultation_duration: number;
}

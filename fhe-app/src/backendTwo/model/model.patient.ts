export interface Patient {
  patient_id: number;
  patient_name: string;
  patient_lastname: string;
  patient_ci: string;
  patient_gender: string;
  patient_born_date: Date;
  patient_age: number;
  patient_phone_number?: string;
  patient_cellphone_number?: string;
  patient_email?: string;
  patient_address?: string;
}

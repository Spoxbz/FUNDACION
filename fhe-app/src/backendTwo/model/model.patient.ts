export interface patient {
  patient_id: number;
  patient_name: string;
  patient_lastname: string;
  patient_ci: number;
  patient_gender: string;
  patient_born_date: Date;
  patient_age: number;
  patient_phone_number: number;
  patient_email?: string;
  patient_address: string;
}

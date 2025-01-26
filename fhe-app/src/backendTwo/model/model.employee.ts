export interface Employee {
  employee_id: number;
  employee_name: string;
  employee_lastname: string;
  employee_ci: number;
  employee_gender: string;
  employee_born_date: string;
  employee_age: number;
  employee_phone_number?: number;
  employee_cellphone_number?: number;
  employee_email?: string;
  username?: string;
  password?: string;
  employee_address?: string;
  rol_id: number;
}

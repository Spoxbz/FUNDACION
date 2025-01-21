export interface Employee {
  employee_id: number;
  employee_name: string;
  employee_lastname: string;
  employee_ci: string;
  employee_gender: string;
  employee_born_date: Date;
  employee_age: number;
  employee_phone_number?: string;
  employee_cellphone_number?: string;
  employee_email?: string;
  username?: string;
  password?: string;
  employee_address?: string;
  rol_id: number;
}

export interface DoctorBlock {
  block_id: number;
  employee_id: number;
  blocked_by: number;
  block_start_date: Date;
  block_end_date?: Date;
  block_reason: string;
  created_at: Date;
}

export interface Logs {
  id: number;
  executed_query: string;
  affected_table: string;
  action: string;
  executed_by: string;
  executed_at: Date;
}

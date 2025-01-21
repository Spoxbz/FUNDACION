export interface VitalSigns {
  id: number;
  patient_id: number;
  appointment_id: number;
  temperature?: number;
  weight?: number;
  height?: number;
  saturation?: number;
  blood_pressure?: string;
  pulse?: number;
  respiratory_rate?: number;
  eye_pio_od?: number;
  eye_pio_os?: number;
  visual_acuity_sc_od?: number;
  visual_acuity_sc_os?: number;
  visual_acuity_cc_od?: number;
  visual_acuity_cc_os?: number;
  created_by: number;
  created_at: Date;
  module_id?: number;
}

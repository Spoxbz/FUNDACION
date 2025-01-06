// Interfaz para establecer los tipos de datos y campos que tendrá la tabla que muestre los doctores que no asisten en una fecha determinada

export interface DoctorAbsence {
  specialty: string;
  doctor: string;
  start: string;
  end: string;
  observations: string;
  user: string;
}

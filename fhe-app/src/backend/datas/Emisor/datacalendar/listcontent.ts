//src\data\datacalendar\listcontent.ts
// Estos son los tipos de datos que se utilizan en el calendario de citas de Emisor
// Se utilizan para mostrar los datos en el calendario de citas de Emisor
export interface Specialty {
  id: string;
  nombre: string;
}
export interface Horario {
  dia: string;
  turno: string;
}
export interface Profesional {
  nombre: string;
  specialtyId: string;
  horarios: Horario[];
}
export const listespecialities: Specialty[] = [
  { id: "1", nombre: "Médico" },
  { id: "2", nombre: "Dentista" },
  { id: "3", nombre: "Enfermero" },
  { id: "4", nombre: "Psicólogo" },
  { id: "5", nombre: "Nutricionista" },
  { id: "6", nombre: "Fisioterapeuta" },
  { id: "7", nombre: "Terapeuta Ocupacional" },
  { id: "8", nombre: "Podólogo" },
  { id: "9", nombre: "Logopeda" },
  { id: "10", nombre: "Optometrista" },
  { id: "11", nombre: "Farmacéutico" },
  { id: "12", nombre: "Veterinario" },
  { id: "13", nombre: "Otro" },
];
export const professionallist: Profesional[] = [
  {
    nombre: "Dr. Juan",
    specialtyId: "1",
    horarios: [
      { dia: "Lunes", turno: "Mañana" },
      { dia: "Martes", turno: "Tarde" },
    ],
  },
  {
    nombre: "Dra. María",
    specialtyId: "1",
    horarios: [
      { dia: "Miércoles", turno: "Mañana" },
      { dia: "Jueves", turno: "Tarde" },
    ],
  },
  {
    nombre: "Dr. Alex",
    specialtyId: "2",
    horarios: [{ dia: "Viernes", turno: "Mañana" }],
  },
  {
    nombre: "Dra. Ana",
    specialtyId: "2",
    horarios: [{ dia: "Sábado", turno: "Tarde" }],
  },
  {
    nombre: "Enf. Laura",
    specialtyId: "3",
    horarios: [
      { dia: "Domingo", turno: "Mañana" },
      { dia: "Lunes", turno: "Tarde" },
    ],
  },
  {
    nombre: "Enf. Luis",
    specialtyId: "3",
    horarios: [
      { dia: "Lunes", turno: "Tarde" },
      { dia: "Miércoles", turno: "Tarde" },
    ],
  },
  {
    nombre: "Psic. Ana",
    specialtyId: "4",
    horarios: [
      { dia: "Lunes", turno: "Mañana" },
      { dia: "Martes", turno: "Tarde" },
    ],
  },
  {
    nombre: "Psic. Luis",
    specialtyId: "4",
    horarios: [
      { dia: "Miércoles", turno: "Mañana" },
      { dia: "Jueves", turno: "Tarde" },
    ],
  },
  {
    nombre: "Nut. Carla",
    specialtyId: "5",
    horarios: [
      { dia: "Viernes", turno: "Mañana" },
      { dia: "Sábado", turno: "Tarde" },
    ],
  },
  {
    nombre: "Nut. Pedro",
    specialtyId: "5",
    horarios: [
      { dia: "Domingo", turno: "Mañana" },
      { dia: "Lunes", turno: "Tarde" },
    ],
  },
  {
    nombre: "Fisio. Laura",
    specialtyId: "6",
    horarios: [
      { dia: "Martes", turno: "Mañana" },
      { dia: "Miércoles", turno: "Tarde" },
    ],
  },
  {
    nombre: "Fisio. Carlos",
    specialtyId: "6",
    horarios: [
      { dia: "Jueves", turno: "Mañana" },
      { dia: "Viernes", turno: "Tarde" },
    ],
  },
  {
    nombre: "Ter. Ocup. Marta",
    specialtyId: "7",
    horarios: [
      { dia: "Sábado", turno: "Mañana" },
      { dia: "Domingo", turno: "Tarde" },
    ],
  },
  {
    nombre: "Ter. Ocup. Juan",
    specialtyId: "7",
    horarios: [
      { dia: "Lunes", turno: "Mañana" },
      { dia: "Martes", turno: "Tarde" },
    ],
  },
  {
    nombre: "Pod. Elena",
    specialtyId: "8",
    horarios: [
      { dia: "Miércoles", turno: "Mañana" },
      { dia: "Jueves", turno: "Tarde" },
    ],
  },
  {
    nombre: "Pod. Mario",
    specialtyId: "8",
    horarios: [
      { dia: "Viernes", turno: "Mañana" },
      { dia: "Sábado", turno: "Tarde" },
    ],
  },
  {
    nombre: "Log. Sofia",
    specialtyId: "9",
    horarios: [
      { dia: "Domingo", turno: "Mañana" },
      { dia: "Lunes", turno: "Tarde" },
    ],
  },
  {
    nombre: "Log. Diego",
    specialtyId: "9",
    horarios: [
      { dia: "Martes", turno: "Mañana" },
      { dia: "Miércoles", turno: "Tarde" },
    ],
  },
  {
    nombre: "Opt. Lucia",
    specialtyId: "10",
    horarios: [
      { dia: "Jueves", turno: "Mañana" },
      { dia: "Viernes", turno: "Tarde" },
    ],
  },
  {
    nombre: "Opt. Miguel",
    specialtyId: "10",
    horarios: [
      { dia: "Sábado", turno: "Mañana" },
      { dia: "Domingo", turno: "Tarde" },
    ],
  },
  {
    nombre: "Farm. Clara",
    specialtyId: "11",
    horarios: [
      { dia: "Lunes", turno: "Mañana" },
      { dia: "Martes", turno: "Tarde" },
    ],
  },
  {
    nombre: "Farm. Pablo",
    specialtyId: "11",
    horarios: [
      { dia: "Miércoles", turno: "Mañana" },
      { dia: "Jueves", turno: "Tarde" },
    ],
  },
  {
    nombre: "Vet. Laura",
    specialtyId: "12",
    horarios: [
      { dia: "Viernes", turno: "Mañana" },
      { dia: "Sábado", turno: "Tarde" },
    ],
  },
  {
    nombre: "Vet. Andres",
    specialtyId: "12",
    horarios: [
      { dia: "Domingo", turno: "Mañana" },
      { dia: "Lunes", turno: "Tarde" },
    ],
  },
  {
    nombre: "Otro. Ana",
    specialtyId: "13",
    horarios: [
      { dia: "Martes", turno: "Mañana" },
      { dia: "Miércoles", turno: "Tarde" },
    ],
  },
  {
    nombre: "Otro. Luis",
    specialtyId: "13",
    horarios: [
      { dia: "Jueves", turno: "Mañana" },
      { dia: "Viernes", turno: "Tarde" },
    ],
  },
];

import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { fetchAppointments } from "../../backendTwo/service/appointmentsService";
import { useAuthStore } from "../../backendTwo/zustand/authStore";

// Traducciones personalizadas en español
interface CustomLocaleText {
  noRowsLabel: string;
  noResultsOverlayLabel: string;
  columnMenuSortAsc: string;
  columnMenuSortDesc: string;
  columnMenuFilter: string;
  columnMenuHideColumn: string;
  columnMenuShowColumns: string;
  footerRowSelected: (count: number) => string;
  footerTotalRows: string;
  footerTotalVisibleRows: (visibleCount: number, totalCount: number) => string;
  toolbarColumns: string;
  toolbarFilters: string;
  toolbarDensity: string;
  toolbarDensityCompact: string;
  toolbarDensityStandard: string;
  toolbarDensityComfortable: string;
  paginationLabelRowsPerPage: string;
  paginationLabelDisplayedRows: ({ from, to, count }: { from: number; to: number; count: number }) => string;
}

const customLocaleText: CustomLocaleText = {
  noRowsLabel: "No hay datos disponibles",
  noResultsOverlayLabel: "No se encontraron resultados.",
  columnMenuSortAsc: "Ordenar de forma ascendente",
  columnMenuSortDesc: "Ordenar de forma descendente",
  columnMenuFilter: "Filtrar",
  columnMenuHideColumn: "Ocultar columna",
  columnMenuShowColumns: "Mostrar columnas",
  footerRowSelected: (count: number) => (count !== 1 ? `${count} filas seleccionadas` : `${count} fila seleccionada`),
  footerTotalRows: "Filas totales:",
  footerTotalVisibleRows: (visibleCount, totalCount) => `${visibleCount} de ${totalCount}`,
  toolbarColumns: "Columnas",
  toolbarFilters: "Filtros",
  toolbarDensity: "Densidad",
  toolbarDensityCompact: "Compacto",
  toolbarDensityStandard: "Estándar",
  toolbarDensityComfortable: "Cómodo",
  paginationLabelRowsPerPage: "Filas por página",
  paginationLabelDisplayedRows: ({ from, to, count }) => `${from}–${to} de ${count}`,
};

// Definir las columnas del DataGrid
const columns: GridColDef[] = [
  { field: "turno", headerName: "Turno", width: 100 },
  { field: "hora", headerName: "Hora", width: 130 },
  { field: "consultorio", headerName: "Consultorio", width: 150 },
  { field: "paciente", headerName: "Paciente", width: 180 },
  {
    field: "atendido",
    headerName: "Atendido",
    width: 130,
    renderCell: (params) => (
      <span
        style={{
          margin: "10px",
          background: params.value ? "" : "",
        }}
      >
        {params.value ? "Pendiente" : "Pendiente"}
      </span>
    ),
  },
  {
    field: "llamar",
    headerName: "Llamar",
    width: 130,
    sortable: false,
    renderCell: () => (
      <Button variant="contained" color="success" size="small">
        Llamar
      </Button>
    ),
  },
  {
    field: "cancelar",
    headerName: "Cancelar",
    width: 130,
    sortable: false,
    renderCell: () => (
      <Button variant="contained" color="error" size="small">
        Cancelar
      </Button>
    ),
  },
  {
    field: "ficha",
    headerName: "Ficha",
    width: 130,
    sortable: false,
    renderCell: () => (
      <Button variant="contained" color="secondary" size="small">
        Ficha
      </Button>
    ),
  },
];

const paginationModel = { page: 2, pageSize: 10 };

export default function DoctorApointmentTable() {
  interface Appointment {
    id: number;
    turno: string;
    hora: string;
    consultorio: string;
    paciente: string;
    atendido: boolean;
  }

  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const doctor = useAuthStore((state) => state.user);

  useEffect(() => {
    if (!doctor) return;

    const fetchData = async () => {
      try {
        const data = await fetchAppointments();
        const filteredData = data.filter((appointment) => appointment.employee_id === doctor.employee_id);

        const formattedData = filteredData.map((appointment) => ({
          id: appointment.appointment_id,
          turno: `Turno ${appointment.appointment_id}`,
          hora: appointment.appointment_time,
          consultorio: `Consultorio ${appointment.office_id}`,
          paciente: `Paciente ${appointment.patient_id}`,
          atendido: appointment.is_doctor_attended,
        }));

        setAppointments(formattedData);
      } catch (error) {
        console.error("Error obteniendo citas:", error);
      }
    };

    fetchData();
  }, [doctor]);

  return (
    <Paper sx={{ height: 460, width: "100%" }}>
      <DataGrid
        initialState={{ pagination: { paginationModel } }}
        rows={appointments}
        columns={columns}
        pageSizeOptions={[5, 10, 20]}
        checkboxSelection
        localeText={customLocaleText} // Agrega la traducción aquí
        sx={{ border: 0 }}
      />
    </Paper>
  );
}

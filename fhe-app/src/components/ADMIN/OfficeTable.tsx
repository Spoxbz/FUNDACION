import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { Edit } from "@mui/icons-material";
// Import del Type de Officecs
import { Offices } from "../../backendTwo/model/model.office";
// Import de la funcion para obtener los consultorios
import { fetchOffices } from "../../backendTwo/service/service.office";
import { useEffect, useState } from "react";

const columns: GridColDef[] = [
  { field: "office_id", headerName: "ID", width: 70 },
  { field: "office_number", headerName: "Num. Consultorio", width: 130 },
  { field: "office_name", headerName: "Nombre", width: 300 },
  { field: "specialty_id", headerName: "Especialidad", width: 130 },
  { field: "ubicacion", headerName: "Ubicación", width: 130 },
  {
    field: "edit",
    headerName: "Editar",
    description: "Se edita el consultorio",
    sortable: false,
    width: 100,
    renderCell: () => (
      <div>
        <Edit />
      </div>
    ),
  },
];

const paginationModel = { page: 0, pageSize: 10 };

export default function DataTable() {
  const [offices, setOffices] = useState<Offices[]>([]); // Estado para los consultorios
  const [loading, setLoading] = useState<boolean>(true); // Estado para la cargar

  // Funcion para obtener los consultorios
  useEffect(() => {
    const loadOffices = async () => {
      try {
        const data = await fetchOffices(); // Llamar al servicio
        setOffices(data); // Actualizar los empleados
      } catch (error) {
        console.error("Error cargando empleados:", error);
      } finally {
        setLoading(false); // Detener la carga
      }
    };
    loadOffices();
  }, []);
  return (
    <Paper sx={{ height: 460, width: "auto" }}>
      <DataGrid
        initialState={{ pagination: { paginationModel } }}
        rows={offices.map((offs) => ({
          ...offs,
          id: offs.office_id, // Mapeamos `office_id` a `id`, necesario para DataGrid
        }))}
        columns={columns}
        loading={loading}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}

// Estilos
import "../../CSS/admin/confspecialtiepage.css";
import { DataGrid, GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";
import { Edit } from "@mui/icons-material";
// Import del Type de Officecs
import { Specialty } from "../../backendTwo/model/model.specialty";
// Import de la funcion para obtener los consultorios
import { fetchAllSpecialties } from "../../backendTwo/service/specialtyService";
import { useEffect, useState } from "react";

const columns: GridColDef[] = [
  { field: "specialty_id", headerName: "ID", width: 70 },
  { field: "specialty_name", headerName: "Especialidad", width: 200 },
  { field: "specialty_prefix", headerName: "Prefijo", width: 130 },
  { field: "specialty_doctor", headerName: "Cargo", width: 200 },
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
// Props del componente
interface SpecialtyTableProps {
  searchTerm: string;
  onSelectSpecialty: (specialty: Specialty | null) => void;
}

export default function DataTable({ searchTerm, onSelectSpecialty }: SpecialtyTableProps) {
  const [specialties, setSpecialty] = useState<Specialty[]>([]); // Estado para las especialidades
  const [loading, setLoading] = useState<boolean>(true); // Estado para la cargar
  // Constantes para filtrar especialidades
  const [filteredSpecialties, setFilteredSpecialties] = useState<Specialty[]>([]);

  // Funcion para obtener las especialidades
  useEffect(() => {
    const loadOffices = async () => {
      try {
        const data = await fetchAllSpecialties(); // Llamar al servicio
        setSpecialty(data); // Actualizar las especialidades
      } catch (error) {
        console.error("Error cargando especialidades:", error);
      } finally {
        setLoading(false); // Detener la carga
      }
    };
    loadOffices();
  }, []);

  // Filtrar especialidades según el término de búsqueda
  useEffect(() => {
    const filtered = specialties.filter((spe) =>
      `${spe.specialty_name} ${spe.specialty_id} ${spe.specialty_doctor}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
    setFilteredSpecialties(filtered);
  }, [searchTerm, specialties]);

  const handleRowSelection = (selectedRow: GridRowSelectionModel) => {
    const selectedSpecialty = specialties.find((spe) => spe.specialty_id === selectedRow[0]);
    onSelectSpecialty(selectedSpecialty || null);
  };
  return (
    <div style={{ height: "460px", width: "auto" }}>
      <DataGrid
        sx={{ backgroundColor: "white" }}
        initialState={{ pagination: { paginationModel } }}
        rows={filteredSpecialties.map((spec) => ({
          ...spec,
          id: spec.specialty_id, // Mapeamos `specialty_id` a `id`, necesario para DataGrid
        }))}
        columns={columns}
        loading={loading}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        // Actualizar la selección del empleado cuando se selecciona una fila
        onRowSelectionModelChange={handleRowSelection}
      />
    </div>
  );
}

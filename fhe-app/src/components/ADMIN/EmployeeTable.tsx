import { useEffect, useState } from "react";
import { DataGrid, GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { Edit } from "@mui/icons-material";
// Import del Type del empleado
import { Employee } from "../../backendTwo/model/model.employee";
// Import del servicio para recuperar todos los empleados
import { fetchEmployees } from "../../backendTwo/service/employeeService";

const columns: GridColDef[] = [
  { field: "employee_id", headerName: "ID", width: 70 },
  { field: "employee_name", headerName: "Nombres", width: 130 },
  { field: "employee_lastname", headerName: "Apellidos", width: 130 },
  { field: "employee_ci", headerName: "C.I", width: 130 },
  { field: "employee_gender", headerName: "Género", width: 130 },
  { field: "employee_born_date", headerName: "F. Nacimiento", width: 130 },
  { field: "employee_age", headerName: "Edad", width: 130 },
  { field: "employee_phone_number", headerName: "Teléfono", width: 130 },
  { field: "employee_cellphone_number", headerName: "Celular", width: 130 },
  { field: "employee_email", headerName: "Correo", width: 130 },
  { field: "username", headerName: "Usuario", width: 130 },
  { field: "password", headerName: "Contraseña", width: 130 },
  { field: "employee_address", headerName: "Dirección", width: 130 },
  { field: "rol_id", headerName: "Rol", width: 130 },
  {
    field: "edit",
    headerName: "Editar",
    description: "Editar este empleado",
    sortable: false,
    width: 130,
    renderCell: () => (
      <div>
        <Edit />
      </div>
    ),
  },
];

const paginationModel = { page: 0, pageSize: 10 };

//  props que recibirá el componente
interface EmployeeTableProps {
  searchTerm: string;
  onSelectEmployee: (employee: Employee | null) => void; // Función para manejar la selección
}

export default function DataTable({ searchTerm, onSelectEmployee }: EmployeeTableProps) {
  const [employees, setEmployees] = useState<Employee[]>([]); // Estado para los empleados
  const [loading, setLoading] = useState<boolean>(true); // Estado para la carga
  // Constantes para filtrar empleados
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);

  // Obtener los empleados al cargar el componente
  useEffect(() => {
    const loadEmployees = async () => {
      try {
        const data = await fetchEmployees(); // Llamar al servicio
        setEmployees(data); // Actualizar los empleados
      } catch (error) {
        console.error("Error cargando empleados:", error);
      } finally {
        setLoading(false); // Detener la carga
      }
    };
    loadEmployees();
  }, []);

  // Filtrar empleados según el término de búsqueda
  useEffect(() => {
    const filtered = employees.filter((emp) =>
      `${emp.employee_name} ${emp.employee_lastname} ${emp.employee_ci} ${emp.employee_email}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
    setFilteredEmployees(filtered);
  }, [searchTerm, employees]);

  const handleRowSelection = (selectedRow: GridRowSelectionModel) => {
    const selectedEmployee = employees.find((emp) => emp.employee_id === selectedRow[0]);
    onSelectEmployee(selectedEmployee || null);
  };

  return (
    <Paper sx={{ height: 460, width: "100%" }}>
      <DataGrid
        initialState={{ pagination: { paginationModel } }}
        rows={filteredEmployees.map((emp) => ({
          ...emp,
          id: emp.employee_id, // Mapeamos `employee_id` a `id`, necesario para DataGrid
        }))}
        columns={columns}
        loading={loading}
        pageSizeOptions={[5, 10, 15, 20]}
        checkboxSelection
        sx={{ border: 0 }}
        // Actualizar la selección del empleado cuando se selecciona una fila
        onRowSelectionModelChange={handleRowSelection}
        // onRowSelectionModelChange={(newSelection) => {
        //   const selectedEmployee = employees.find((emp) => emp.employee_id === newSelection[0]);
        //   onSelectEmployee(selectedEmployee || null); // Pasar el empleado seleccionado
        // }}
      />
    </Paper>
  );
}

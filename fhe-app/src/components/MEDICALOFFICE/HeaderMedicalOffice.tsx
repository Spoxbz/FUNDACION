import { Box, Button, Checkbox, MenuItem, Select, Typography } from "@mui/material";
import { fetchEmployees } from "../../backendTwo/service/employeeService";
import { useAuthStore } from "../../backendTwo/zustand/authStore";
import { useEffect, useState } from "react";
import { Employee } from "../../backendTwo/model/model.employee";

export default function HeaderMedicalOffice({
  setSelectedDoctorId,
}: {
  setSelectedDoctorId: (id: number | null) => void;
}) {
  const { user } = useAuthStore(); // Obtiene el usuario logueado
  const [doctors, setDoctors] = useState<Employee[]>([]);
  const [selectedDoctorId, setLocalDoctorId] = useState<number | null>(null);

  useEffect(() => {
    if (user?.rol_id === 1 || user?.rol_id === 2 || user?.rol_id === 3) {
      const fetchDoctors = async () => {
        try {
          const employees = await fetchEmployees();
          const doctorList = employees.filter((emp) => emp.rol_id === 4);
          setDoctors(doctorList);
        } catch (error) {
          console.error("Error obteniendo médicos:", error);
        }
      };
      fetchDoctors();
    }
  }, [user]);

  const handleDoctorChange = (event) => {
    const selectedId = event.target.value;
    setLocalDoctorId(selectedId);
    setSelectedDoctorId(selectedId); // Actualiza en el componente padre
  };

  return (
    <>
      <header className="mo-header">
        <div className="mo-header-top">
          {user?.rol_id !== 4 && (
            <Select
              className="mo-header-select"
              value={selectedDoctorId || ""}
              onChange={handleDoctorChange}
              displayEmpty
            >
              <MenuItem value="">Seleccionar médico</MenuItem>
              {doctors.map((doctor) => (
                <MenuItem key={doctor.employee_id} value={doctor.employee_id}>
                  {doctor.employee_name}
                </MenuItem>
              ))}
            </Select>
          )}
          <h1 className="mo-header-title">Consultorio Medico</h1>
          <div>
            <Button className="mo-header-button" size="small">
              Auditoria
            </Button>
          </div>
          <Box display="flex" alignItems="center">
            <Checkbox />
            <Typography>Multiples</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Checkbox />
            <Typography>Atendidos</Typography>
          </Box>
        </div>
        <div className="mo-header-bot">
          <div>
            <Button className="mo-header-button" size="small" title="Buscar pacientes">
              Buscar
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}

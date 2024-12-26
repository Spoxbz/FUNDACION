import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Box,
  Checkbox,
  Typography,
} from "@mui/material";

// Tipo para representar a un paciente
type Paciente = {
  turno: string;
  hora: string; // Formato 24 horas: 'HH:mm'
  consultorio: string;
  especialidad: string;
  medico: string; // Puede incluir nombre y apellido
  paciente: string; // Puede incluir nombre y apellido
};

type Props = {
  pacientes: Paciente[];
};

const PacientesTabla: React.FC<Props> = ({ pacientes }) => {
  const [search, setSearch] = useState("");
  const [filteredPacientes, setFilteredPacientes] =
    useState<Paciente[]>(pacientes);

  // Manejar la lógica de filtrado
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearch(query);
    const filtered = pacientes.filter(
      (p) =>
        p.turno.toLowerCase().includes(query) ||
        p.medico.toLowerCase().includes(query) ||
        p.paciente.toLowerCase().includes(query)
    );
    setFilteredPacientes(filtered);
  };

  return (
    <Box>
      {/* Barra de búsqueda y filtros */}
      <Box
        display="flex"
        alignItems="center"
        gap={2}
        mb={2}
        component={Paper}
        p={2}
      >
        <TextField
          label="Buscar"
          placeholder="Buscar por turno, médico o paciente"
          value={search}
          onChange={handleSearchChange}
          fullWidth
        />
        <Box display="flex" alignItems="center">
          <Checkbox />
          <Typography>Pacientes atendidos</Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Checkbox />
          <Typography>No asistió</Typography>
        </Box>
      </Box>

      {/* Tabla */}
      <TableContainer component={Paper}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Turno</TableCell>
              <TableCell>Hora</TableCell>
              <TableCell>Consultorio</TableCell>
              <TableCell>Especialidad</TableCell>
              <TableCell>Médico</TableCell>
              <TableCell>Paciente</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredPacientes.length > 0 ? (
              filteredPacientes.map((paciente, index) => (
                <TableRow key={index}>
                  <TableCell>{paciente.turno}</TableCell>
                  <TableCell>{paciente.hora}</TableCell>
                  <TableCell>{paciente.consultorio}</TableCell>
                  <TableCell>{paciente.especialidad}</TableCell>
                  <TableCell>{paciente.medico}</TableCell>
                  <TableCell>{paciente.paciente}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  No se encontraron resultados.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PacientesTabla;
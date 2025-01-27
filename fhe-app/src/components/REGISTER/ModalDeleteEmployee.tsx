/**
 * * Este modal sera para cuando el usuario adminitrador requiera crear/registrar un nuevo empleado en el sistema
 * * Este modal form es usado por ConfEmployeePage.tsx --> C:\Users\Usuario\Desktop\TESIS\DEVELOPMENT\FUNDACION\fhe-app\src\pages\admin\ConfEmployeePage.tsx
 * * Este modal form usa la funcion createEmployee declarada en employeeService.tsx
 */

import { useState } from "react";
// Estilos
import "../../CSS/adminsidebaroptions/confemployeepage.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Delete } from "@mui/icons-material";

export default function ModalDeleteEmployees() {
  const [openDelModal, setOpenDelModal] = useState(false);

  // Estado para los datos del formulario
  //   const [formData, setFormData] = useState({
  //     employee_name: "",
  //     employee_lastname: "",
  //     employee_ci: 0,
  //     employee_gender: "",
  //     employee_born_date: "",
  //     employee_age: 0,
  //     employee_phone_number: 0,
  //     employee_cellphone_number: 0,
  //     employee_email: "",
  //     username: "",
  //     password: "",
  //     employee_address: "",
  //     rol_id: 0,
  //   });

  //   // Estado para manejar mensaje de exito o error
  //   const [message, setMessage] = useState<string | null>(null);

  //   // Manejar cambios en los campos del formulario
  //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setFormData({ ...formData, [e.target.name]: e.target.value });
  //   };

  //   // Manejar el envío del formulario
  //   const handleSubmit = async (e: React.FormEvent) => {
  //     e.preventDefault(); // Evitar recargar la página
  //     try {
  //       // Llamar al servicio con los datos del formulario
  //       const newEmployee = await createEmployee(formData);
  //       setMessage(`Empleado creado con éxito: ${newEmployee.employee_name}`);
  //       setFormData({
  //         employee_name: "",
  //         employee_lastname: "",
  //         employee_ci: 0,
  //         employee_gender: "",
  //         employee_born_date: "",
  //         employee_age: 0,
  //         employee_phone_number: 0,
  //         employee_cellphone_number: 0,
  //         employee_email: "",
  //         username: "",
  //         password: "",
  //         employee_address: "",
  //         rol_id: 0,
  //       }); // Resetear el formulario
  //     } catch (error) {
  //       setMessage(`Error al crear el empleado: ${(error as Error).message}`);
  //     }
  //   };

  // constantes para abrir/cerrar el modal
  const handleOpenDelModal = () => setOpenDelModal(true);
  const handleCloseDelModal = () => setOpenDelModal(false);

  return (
    <div>
      <Button className="btn-modal-delEmployee" onClick={handleOpenDelModal}>
        <Delete />
        Eliminar
      </Button>
      <Modal
        open={openDelModal}
        onClose={handleCloseDelModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableEscapeKeyDown
      >
        <Box className="cont-form">Confirmacion de eliminacion</Box>
      </Modal>
    </div>
  );
}

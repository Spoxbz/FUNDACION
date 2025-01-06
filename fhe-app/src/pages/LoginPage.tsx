import React, { useState } from "react";
import {
  Container,
  Box,
  Button,
  Paper,
  Typography,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { employees } from "../backend/datas/users/data_employee"; // Importa la data local de empleados
import "../css/loginpage.css";

export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Busca al empleado con el nombre de usuario y la contraseña proporcionados
    const foundEmployee = employees.find(
      (employee) =>
        employee.username === username &&
        employee.employee_password === password
    );

    if (!foundEmployee) {
      // Si no encuentra coincidencias, muestra un mensaje de error
      setErrorMessage("Credenciales incorrectas o usuario no encontrado");
      return;
    }

    // Guarda el empleado en localStorage
    localStorage.setItem("loggedInUser", JSON.stringify(foundEmployee));

    // Redirige al Dashboard después de un inicio de sesión exitoso
    navigate("/dashboard");
  };

  return (
    <div className="main-container">
      <Container className="form-login">
        <Paper elevation={3} sx={{ p: 4 }}>
          <Box className="Form">
            <Typography variant="h5" align="center" gutterBottom>
              Bienvenido, Inicie Sesión
            </Typography>
            <img
              style={{ marginBottom: "15px", width: "120px", height: "100px" }}
              src="Logo.avif"
              alt="Logo FHE"
            />
            <Box
              component="form"
              onSubmit={handleLogin}
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
              className="input-areas"
            >
              <TextField
                label="Usuario"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                variant="outlined"
                required
                fullWidth
                className="input-field"
                sx={{ padding: "0px !important" }}
              />
              <TextField
                label="Contraseña"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                variant="outlined"
                required
                fullWidth
                className="input-field"
                sx={{ marginBottom: "15px" }}
              />
              {errorMessage && (
                <Typography color="error" align="center">
                  {errorMessage}
                </Typography>
              )}
              <Button
                className="button-login"
                variant="contained"
                type="submit"
                color="primary"
              >
                Login
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </div>
  );
}

// import {
//   Container,
//   Box,
//   Button,
//   Paper,
//   Typography,
//   TextField,
// } from "@mui/material";
// import "../css/loginpage.css";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { employees } from "../backend/datas/users/data_employee"; // Importa la data local de empleados

// export default function LoginPage() {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Busca al empleado con el correo y la contraseña proporcionados
//     const foundEmployee = employees.find(
//       (employee) =>
//         employee.username === username &&
//         employee.employee_password === password
//     );

//     if (!foundEmployee) {
//       // Si no encuentra coincidencias, muestra un mensaje de error
//       setErrorMessage("Credenciales incorrectas o usuario no encontrado");
//       return;
//     }

//     // Redirige al Dashboard después de un inicio de sesión exitoso
//     navigate("/dashboard");
//   };

//   return (
//     <div className="main-container">
//       <Container className="form-login">
//         <Paper elevation={3} sx={{ p: 4 }}>
//           <Box className="Form">
//             {/* Título */}

//             <Typography variant="h5" align="center" gutterBottom>
//               Bienvenido, Inicie Sesión
//             </Typography>
//             {/* Logo */}
//             <img
//               style={{ marginBottom: "15px", width: "120px", height: "100px" }}
//               src="Logo.avif"
//               alt="Logo FHE"
//             />

//             {/* Formulario */}
//             <Box
//               component="form"
//               onSubmit={handleLogin}
//               sx={{ display: "flex", flexDirection: "column", gap: 2 }}
//               className="input-areas"
//             >
//               <TextField
//                 label="Usuario"
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 variant="outlined"
//                 placeholder="example@site.com"
//                 required
//                 fullWidth
//                 className="input-field" // Aplica la clase para personalizar el tamaño
//                 sx={{
//                   padding: "0px !important",
//                 }}
//               />
//               <TextField
//                 label="Contraseña"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 variant="outlined"
//                 required
//                 fullWidth
//                 className="input-field" // Aplica la clase para personalizar el tamaño
//                 sx={{ marginBottom: "15px" }}
//               />
//               {errorMessage && (
//                 <Typography color="error" align="center">
//                   {errorMessage}
//                 </Typography>
//               )}
//               <Button
//                 className="button-login"
//                 variant="contained"
//                 type="submit"
//                 color="primary"
//               >
//                 Login
//               </Button>
//             </Box>
//           </Box>
//         </Paper>
//       </Container>
//     </div>
//   );
// }

// import {
//   Container,
//   Box,
//   Button,
//   Paper,
//   Typography,
//   TextField,
// } from "@mui/material";
// import "../css/loginpage.css";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { client } from "../backend/api/client"; // Importa el cliente configurado

// export default function LoginPage() {
//   const navigate = useNavigate();
//   const [mail, setMail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       // Realiza el inicio de sesión con Supabase
//       const { data, error } = await client.auth.signInWithPassword({
//         email: mail,
//         password: password,
//       });

//       if (error) {
//         // Muestra un mensaje de error si las credenciales son incorrectas
//         setErrorMessage("Credenciales incorrectas o usuario no encontrado");
//         return;
//       }

//       if (data.session) {
//         // Redirige al Dashboard después de un login exitoso
//         navigate("/dashboard");
//       }
//     } catch (err) {
//       console.error("Error al iniciar sesión:", err);
//       setErrorMessage(
//         "Ocurrió un error inesperado. Inténtalo de nuevo más tarde."
//       );
//     }
//   };

//   return (
//     <div className="main-container">
//       <Container className="form-login">
//         <Paper elevation={3} sx={{ p: 4 }}>
//           <Box className="Form">
//             {/* Título */}
//             <Typography variant="h5" align="center" gutterBottom>
//               Iniciar Sesión
//             </Typography>
//             {/* Logo */}
//             <img
//               style={{ marginBottom: "15px", width: "120px", height: "100px" }}
//               src="Logo.avif"
//               alt="Logo FHE"
//             />

//             {/* Formulario */}
//             <Box
//               component="form"
//               onSubmit={handleLogin}
//               sx={{ display: "flex", flexDirection: "column", gap: 2 }}
//               className="input-areas"
//             >
//               <TextField
//                 label="Correo"
//                 type="email"
//                 value={mail}
//                 onChange={(e) => setMail(e.target.value)}
//                 variant="outlined"
//                 placeholder="example@site.com"
//                 required
//                 fullWidth
//                 className="input-field" // Aplica la clase para personalizar el tamaño
//                 sx={{
//                   padding: "0px !important",
//                 }}
//               />
//               <TextField
//                 label="Contraseña"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 variant="outlined"
//                 required
//                 fullWidth
//                 className="input-field" // Aplica la clase para personalizar el tamaño
//                 sx={{ marginBottom: "15px" }}
//               />
//               {errorMessage && (
//                 <Typography color="error" align="center">
//                   {errorMessage}
//                 </Typography>
//               )}
//               <Button
//                 className="button-login"
//                 variant="contained"
//                 type="submit"
//                 color="primary"
//               >
//                 Login
//               </Button>
//             </Box>
//           </Box>
//         </Paper>
//       </Container>
//     </div>
//   );
// }

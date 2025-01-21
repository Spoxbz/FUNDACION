import React, { useState } from "react";
import { Container, Box, Button, Paper, Typography, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { signIn } from "../backendTwo/service/authService"; // Importa la función de inicio de sesión personalizada
import "../css/loginpage.css";
// Import del logo
import Logo from "../assets/Logo.avif";
// Import de las rutas
import ROUTES from "../enviroment/variables_routes";

export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // Inicia sesión con la función personalizada
    const { employee, error } = await signIn(username, password);

    if (error || !employee) {
      // Si hay un error o no se encuentra el empleado, muestra un mensaje de error
      setErrorMessage("Credenciales incorrectas o usuario no encontrado");
      return;
    }

    // Guarda el empleado en localStorage
    localStorage.setItem("loggedInUser", JSON.stringify(employee));

    // Redirige al Dashboard después de un inicio de sesión exitoso
    navigate(ROUTES.DASHBOARD.FCHILD);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    // Valida que el input no contenga números
    if (/^[^\d]*$/.test(input)) {
      setUsername(input); // Actualiza el estado si es válido
      setErrorMessage(""); // Limpia el mensaje de error
    } else {
      setErrorMessage("Por favor, ingresa solo texto.");
    }
  };

  return (
    <div className="main-container">
      <Container className="form-login">
        <Paper elevation={3} sx={{ p: 4 }}>
          <Box className="Form">
            <Typography variant="h5" align="center" gutterBottom>
              Bienvenido, Inicie Sesión
            </Typography>
            <img style={{ marginBottom: "15px", width: "120px", height: "100px" }} src={Logo} alt="Logo FHE" />
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
                // onChange={(e) => setUsername(e.target.value)}
                onChange={handleUsernameChange}
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
              <Button className="button-login" variant="contained" type="submit" color="primary">
                Login
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </div>
  );
}

// import React, { useState } from "react";
// import { Container, Box, Button, Paper, Typography, TextField } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { employees } from "../backend/datas/users/data_employee"; // Importa la data local de empleados
// import "../css/loginpage.css";
// // Import del logo
// import Logo from "../assets/Logo.avif";
// // Import de las rutas
// import ROUTES from "../enviroment/variables_routes";

// export default function LoginPage() {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Busca al empleado con el nombre de usuario y la contraseña proporcionados
//     const foundEmployee = employees.find(
//       (employee) => employee.username === username && employee.employee_password === password
//     );

//     if (!foundEmployee) {
//       // Si no encuentra coincidencias, muestra un mensaje de error
//       setErrorMessage("Credenciales incorrectas o usuario no encontrado");
//       return;
//     }

//     // Guarda el empleado en localStorage
//     localStorage.setItem("loggedInUser", JSON.stringify(foundEmployee));

//     // Redirige al Dashboard después de un inicio de sesión exitoso
//     navigate(ROUTES.DASHBOARD.FCHILD);
//     // navigate("/dashboard");
//   };

//   return (
//     <div className="main-container">
//       <Container className="form-login">
//         <Paper elevation={3} sx={{ p: 4 }}>
//           <Box className="Form">
//             <Typography variant="h5" align="center" gutterBottom>
//               Bienvenido, Inicie Sesión
//             </Typography>
//             <img style={{ marginBottom: "15px", width: "120px", height: "100px" }} src={Logo} alt="Logo FHE" />
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
//                 required
//                 fullWidth
//                 className="input-field"
//                 sx={{ padding: "0px !important" }}
//               />
//               <TextField
//                 label="Contraseña"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 variant="outlined"
//                 required
//                 fullWidth
//                 className="input-field"
//                 sx={{ marginBottom: "15px" }}
//               />
//               {errorMessage && (
//                 <Typography color="error" align="center">
//                   {errorMessage}
//                 </Typography>
//               )}
//               <Button className="button-login" variant="contained" type="submit" color="primary">
//                 Login
//               </Button>
//             </Box>
//           </Box>
//         </Paper>
//       </Container>
//     </div>
//   );
// }

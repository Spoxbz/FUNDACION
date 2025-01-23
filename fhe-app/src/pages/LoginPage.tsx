import React, { useState } from "react";
import {
  Container,
  Box,
  Button,
  Paper,
  Typography,
  InputAdornment,
  OutlinedInput,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { signIn } from "../backendTwo/service/authService"; // Importa la función de inicio de sesión personalizada
import "../css/loginpage.css";
// Import del logo
import Logo from "../assets/Logo.avif";
// Import de las rutas
import ROUTES from "../enviroment/variables_routes";
// Import de zustand para almacenar el usuario logueado
import { useAuthStore } from "../backendTwo/zustand/authStore";
import { AccountBox, Login, Password } from "@mui/icons-material";

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

    // Guarda el empleado en zustand
    useAuthStore.getState().login(employee);

    // Redirige al Dashboard después de un inicio de sesión exitoso
    navigate(ROUTES.DASHBOARD.FCHILD);
  };

  // Validacion para que el campo de username no acepte numeros
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
            <img
              style={{ marginTop: "15px", marginBottom: "15px", width: "120px", height: "100px" }}
              src={Logo}
              alt="Logo FHE"
            />
            <Box
              component="form"
              onSubmit={handleLogin}
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
              className="input-areas"
            >
              <FormControl>
                <InputLabel htmlFor="campo-user" sx={{ marginLeft: "-5%" }}>
                  Usuario
                </InputLabel>
                <br />
                <OutlinedInput
                  id="campo-user"
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                  required
                  fullWidth
                  className="input-field"
                  sx={{ height: "50px" }}
                  endAdornment={
                    <InputAdornment position="end">
                      <AccountBox />
                    </InputAdornment>
                  }
                />
              </FormControl>
              {/* <TextField
                label="Usuario"
                type="text"
                value={username}
                onChange={handleUsernameChange}
                variant="outlined"
                required
                fullWidth
                className="input-field"
                sx={{ padding: "0px !important" }}
              /> */}
              <FormControl>
                <InputLabel htmlFor="campo-password" sx={{ marginLeft: "-5%" }}>
                  Contraseña
                </InputLabel>
                <br />
                <OutlinedInput
                  id="campo-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  fullWidth
                  className="input-field"
                  sx={{ marginBottom: "15px", marginTop: "10px", height: "50px" }}
                  endAdornment={
                    <InputAdornment position="end">
                      <Password />
                    </InputAdornment>
                  }
                />
              </FormControl>
              {/* <TextField
                label="Contraseña"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                variant="outlined"
                required
                fullWidth
                className="input-field"
                sx={{ marginBottom: "15px", height: "30px", background: "black" }}
              /> */}
              {errorMessage && (
                <Typography
                  color="error"
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    width: "250px",
                    textAlign: "center",
                    // paddingLeft: "30px",
                  }}
                >
                  {errorMessage}
                </Typography>
              )}
              <Button
                className="button-login"
                variant="contained"
                type="submit"
                color="primary"
                endIcon={<Login />}
                sx={{ display: "flex" }}
              >
                <p style={{ width: "100%" }}>Login</p>
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </div>
  );
}

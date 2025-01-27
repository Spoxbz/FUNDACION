import "../css/loginpage.css";
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
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { signIn } from "../backendTwo/service/authService"; // Importa la función de inicio de sesión personalizada
// Import del logo
import Logo from "../assets/Logo.avif";
// Import de las imagenes
import emisor from "../assets/img/logpage/emisor-purple.png";
import hospital from "../assets/img/logpage/hospital-purple.png";
import optic from "../assets/img/logpage/optic-purple.png";
import pharmacy from "../assets/img/logpage/pharmacy-purple.png";
// ***********************
// import emisor from "../assets/img/cardoptions/emisor-blue.png";
// import hospital from "../assets/img/cardoptions/hopistal-blue.png";
// import optic from "../assets/img/cardoptions/optic-blue.png";
// import pharmacy from "../assets/img/cardoptions/pharmacy-blue.png";
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
  // constantes para el tiempo de espera
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // Tiempo de espera para simular una solicitud a la API
    setLoading(true);

    // Inicia sesión con la función personalizada
    const { employee, error } = await signIn(username, password);

    if (error || !employee) {
      // Si hay un error o no se encuentra el empleado, muestra un mensaje de error
      setErrorMessage("Credenciales incorrectas o usuario no encontrado");
      setLoading(false);
      return;
    }

    // Guarda el empleado en localStorage
    localStorage.setItem("loggedInUser", JSON.stringify(employee));

    // Guarda el empleado en zustand
    useAuthStore.getState().login(employee);

    setTimeout(() => {
      setLoading(false);
      // Redirige al Dashboard después de un inicio de sesión exitoso
      navigate(ROUTES.DASHBOARD.FCHILD);
    }, 1000);
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
      <Container className="presentation">
        <div className="presentation-info">
          <p className="subtitle">Bienvenido</p>
          <div className="cont-img-presentation">
            <img className="presentation-icons" src={emisor} />
            <img className="presentation-icons" src={hospital} />
            <img className="presentation-icons" src={optic} />
            <img className="presentation-icons" src={pharmacy} />
          </div>
          <footer>
            <p>2025 | Sistema</p>
          </footer>
        </div>
      </Container>
      <Container className="form-login">
        <Paper className="paper" elevation={5}>
          <div className="form-header">
            <Typography sx={{ paddingTop: "20px", marginBottom: "10px" }} variant="h4" align="center" gutterBottom>
              Inicie Sesion
            </Typography>
          </div>
          <div className="imagen-circular-wrapper">
            <div className="linea"></div>
            <img className="form-logo" src={Logo} alt="Logo FHE" />
          </div>
          <Box className="Form">
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
            {loading && (
              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <CircularProgress />
              </Box>
            )}
          </Box>
        </Paper>
      </Container>
    </div>
  );
}

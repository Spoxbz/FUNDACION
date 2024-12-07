import {
  Container,
  Box,
  Button,
  Paper,
  Typography,
  TextField,
} from "@mui/material";
import "../css/loginpage.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { client } from "../api/client"; // Importa el cliente configurado

export default function LoginPage() {
  const navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Realiza el inicio de sesión con Supabase
      const { data, error } = await client.auth.signInWithPassword({
        email: mail,
        password: password,
      });

      if (error) {
        // Muestra un mensaje de error si las credenciales son incorrectas
        setErrorMessage("Credenciales incorrectas o usuario no encontrado");
        return;
      }

      if (data.session) {
        // Redirige al Dashboard después de un login exitoso
        navigate("/dashboard");
      }
    } catch (err) {
      console.error("Error al iniciar sesión:", err);
      setErrorMessage(
        "Ocurrió un error inesperado. Inténtalo de nuevo más tarde."
      );
    }
  };

  return (
    <div className="main-container">
      <Container className="form-login">
        <Paper elevation={3} sx={{ p: 4 }}>
          <Box className="Form">
            {/* Título */}
            <Typography variant="h5" align="center" gutterBottom>
              Iniciar Sesión
            </Typography>
            {/* Logo */}
            <img src="logo.avif" alt="Logo FHE" />

            {/* Formulario */}
            <Box
              component="form"
              onSubmit={handleLogin}
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <TextField
                label="Correo"
                type="email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                variant="outlined"
                placeholder="example@site.com"
                required
                fullWidth
                className="input-field" // Aplica la clase para personalizar el tamaño
              />
              <TextField
                label="Contraseña"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                variant="outlined"
                required
                fullWidth
                className="input-field" // Aplica la clase para personalizar el tamaño
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
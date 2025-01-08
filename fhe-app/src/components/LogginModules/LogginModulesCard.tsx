import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// Importa estilos
import "../../CSS/logoptions.css";
// Import de la interfaz para los modulos de usuario cuando inicia sesion
import { modulesStructureTypes } from "../../backend/types/UserLogginModules/user_loggin_modules";

export default function LogginModulesCard({
  title,
  icon,
  onClick,
}: modulesStructureTypes) {
  const handleNavigation = () => {
    onClick(title); // Utiliza la acción definida en la interfaz
  };

  return (
    <div className="carta-modulos" onClick={handleNavigation}>
      <Card className="card-container">
        <CardMedia
          className="icon-card"
          component="img"
          image={icon}
          alt={`${title} Icon`}
          sx={{
            width: 100,
            height: 100,
            objectFit: "contain",
            margin: "auto",
          }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            className="title-card"
          >
            {title}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

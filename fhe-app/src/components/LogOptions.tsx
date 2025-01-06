import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// Importa estilos
import "../css/logoptions.css";
// Import de intefaz de los modulos
import { LogModulesProps } from "../backend/types/UserLoginModules/user_modules";

export default function LogOptions({ title, icon, onClick }: LogModulesProps) {
  const handleNavigation = () => {
    onClick(title);
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

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// Importa estilos
import "../css/logoptions.css";

interface LogOptionsProps {
  title: string;
  icon: string;
  onClick: (moduleName: string) => void;
}

export default function LogOptions({ title, icon, onClick }: LogOptionsProps) {
  const handleNavigation = () => {
    onClick(title);
  };

  return (
    <a onClick={handleNavigation}>
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
    </a>
  );
}

// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// // Importa estilos
// import "../css/logoptions.css";
// import { useNavigate } from "react-router-dom";

// interface LogOptionsProps {
//   title: string;
//   icon: string;
//   route: string;
// }

// export default function LogOptions({ title, icon, route }: LogOptionsProps) {
//   const navigate = useNavigate();

//   const handleNavigation = () => {
//     navigate(route);
//   };

//   return (
//     <a onClick={handleNavigation}>
//       <Card className="card-container">
//         <CardMedia
//           className="icon-card"
//           component="img"
//           image={icon}
//           alt={`${title} Icon`}
//           sx={{
//             width: 100,
//             height: 100,
//             objectFit: "contain",
//             margin: "auto",
//           }}
//         />
//         <CardContent>
//           <Typography
//             gutterBottom
//             variant="h6"
//             component="div"
//             className="title-card"
//           >
//             {title}
//           </Typography>
//         </CardContent>
//       </Card>
//     </a>
//   );
// }

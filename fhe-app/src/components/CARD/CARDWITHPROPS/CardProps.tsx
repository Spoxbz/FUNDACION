// ejemplo de una card con props usando otro componente para estructurar la card

import { Card, CardContent } from "@mui/material";
import CardBodyProps from "./CardBodyProps";

export default function CardProps() {
  return (
    <div className="card">
      <Card sx={{ minWidth: 275 }}>
        <CardContent className="card-content">
          <CardBodyProps
            image={
              "https://imgs.search.brave.com/yaZxDWH5GSTp7nRCeFfIL5UJmZESgHJCO8fZp4uJ2zM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODQx/MjEzNzAvcGhvdG8v/aW1hZ2Utb2YtY2Fy/ZC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9ODdfNXNQSEhs/N2FDUjZjeWVSZFNa/a3EyT0hUSmpQTmRE/T0trSDlQXzhtQT0"
            }
            title={"Card con las propiedades"}
            description={
              "Las propiedades son pasadas desde el componente que usa el componente CardBody"
            }
          />
        </CardContent>
      </Card>
    </div>
  );
}

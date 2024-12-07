import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardBody from "./CardBody";
import "../../CSS/card.css";

export default function BasicCard() {
  return (
    <div className="card">
      <Card sx={{ minWidth: 275 }}>
        <CardContent className="card-content">
          <CardBody />
        </CardContent>
      </Card>
    </div>
  );
}

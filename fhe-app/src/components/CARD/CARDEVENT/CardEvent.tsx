import { Card, CardContent } from "@mui/material";
import CardBodyEvent from "./CardBodyEvent";
import EventLists from "./EventLists";

export default function CardEvent() {
  const eventlist: string[] = ["evento1", "evento 2", "evento 3"];
  return (
    <Card>
      <CardContent>
        <CardBodyEvent
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ44Zs2-oWsX9Y93RsDN83hHjUiFOvEjOHD3w&s"
          }
          title={"Card de eventos"}
          describe={
            "En esta card se lista un array con opciones de evento al ser cliqueados"
          }
        />
        <EventLists data={eventlist} />
      </CardContent>
    </Card>
  );
}

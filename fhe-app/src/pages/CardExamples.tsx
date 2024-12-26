import BasicCard from "../components/CARD/Card";
import CardEvent from "../components/CARD/CARDEVENT/CardEvent";
import CardProps from "../components/CARD/CARDWITHPROPS/CardProps";
import CardList from "../components/CARD/LISTS/CardList";

export default function CardExamples() {
  return (
    // Codigo JSX --> React.createElement
    <div>
      <h1>Esta es una card normal</h1>
      <BasicCard />
      <h1>Esta es una card pasandole props</h1>
      <CardProps />
      <h1>Imprimir listas</h1>
      <CardList />
      <h1>Eventos y Estados</h1>
      <CardEvent />
    </div>
  );
}

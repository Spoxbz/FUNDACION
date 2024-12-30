import PacientInfo from "./sections/PacientInfo";
import SignInfo from "./sections/SignInfo";
import TurnInfo from "./sections/TurnInfo";

export default function ChairBodyCard() {
  return (
    <div className="sections">
      <TurnInfo />
      <PacientInfo />
      <SignInfo />
    </div>
  );
}

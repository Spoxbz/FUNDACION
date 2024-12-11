import LogOptions from "../components/LogOptions";
//import images
import emisor from "../assets/img/cardoptions/emisor.png";
import sign from "../assets/img/cardoptions/sign.png";
import consult from "../assets/img/cardoptions/consult.png";
import hospital from "../assets/img/cardoptions/hospital.png";
import dental from "../assets/img/cardoptions/dental.png";
import optic from "../assets/img/cardoptions/optic.png";
import pharmacy from "../assets/img/cardoptions/pharmacy.png";
import inventory from "../assets/img/cardoptions/inventory.png";
import example from "../assets/img/example.png";

import "../css/modules.css";

const modules = [
  { title: "Emisor", icon: emisor, route: "modules/schedule" },
  { title: "Signos", icon: sign, route: "modules/signs" },
  { title: "Consultorio", icon: consult, route: "modules/consultorio" },
  { title: "Hospital", icon: hospital, route: "modules/hospital" },
  { title: "Otondología", icon: dental, route: "modules/ondologia" },
  { title: "Óptica", icon: optic, route: "modules/optic" },
  { title: "Farmacia", icon: pharmacy, route: "modules/pharmcy" },
  { title: "Inventario", icon: inventory, route: "modules/inventory" },
  { title: "Example", icon: example, route: "modules/example" },
  // { title: "Example", icon: example },
  // { title: "Example", icon: example },
  // { title: "Example", icon: example },
];

export default function Modules({
  handleModuleClick,
}: {
  handleModuleClick: (moduleName: string) => void;
}) {
  return (
    <div className="cont-modules">
      <header>
        <h1>Sus Módulos</h1>
      </header>
      <div className="main">
        {" "}
        {modules.map((module) => (
          <LogOptions
            key={module.title}
            title={module.title}
            icon={module.icon}
            onClick={handleModuleClick} // Funcion para renderizar solo el componente de ruta dentro del contenedor main en dashboard
          />
        ))}{" "}
      </div>
    </div>
  );
}

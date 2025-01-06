// import React from "react";
// // Import componente que es la carta de los modulos
// import LogOptions from "../components/LogOptions";
// // Import de
// import "../css/modules.css";
// // Import de datos de muestra para mostrar los modulos
// import { modules } from "../backend/datas/UserLoginModules/data_login_modules";
// import { Employee } from "../backend/types/users/user_employee";
// import { roles } from "../backend/datas/Roles/data_roles";

// interface ModulesProps {
//   handleModuleClick: (moduleName: string) => void;
//   user: Employee | null;
// }

// const Modules: React.FC<ModulesProps> = ({ handleModuleClick, user }) => {
//   const userRole = user
//     ? roles.find((role) => role.rol_id === user.rol_id)
//     : null;
//   const availableModules = modules.filter((module) => {
//     return userRole ? module.roles.includes(userRole.rol_id) : false;
//   });
//   return (
//     <div className="cont-modules">
//       {" "}
//       <header className="headerModulesPage">
//         {" "}
//         <h1 className="titleHeaderModules">Sus Módulos</h1>{" "}
//       </header>{" "}
//       <div className="main">
//         {" "}
//         {availableModules.map((module) => (
//           <LogOptions
//             key={module.title}
//             title={module.title}
//             icon={module.icon}
//             onClick={handleModuleClick}
//           />
//         ))}{" "}
//       </div>{" "}
//     </div>
//   );
// };
// export default Modules;

// Import componente que es la carta de los modulos
import LogOptions from "../components/LogOptions";
//import images
import emisor from "../assets/img/cardoptions/emisor-blue.png";
import sign from "../assets/img/cardoptions/sign-blue.png";
import consult from "../assets/img/cardoptions/consult-blue.png";
// import hospital from "../assets/img/cardoptions/hospital.png";
// import dental from "../assets/img/cardoptions/dental.png";
// import optic from "../assets/img/cardoptions/optic.png";
// import pharmacy from "../assets/img/cardoptions/pharmacy.png";
// import inventory from "../assets/img/cardoptions/inventory.png";
import example from "../assets/img/example.png";
// Estilos
import "../css/modules.css";
const modules = [
  { title: "Emisor", icon: emisor, route: "modules/schedule" },
  { title: "Signos", icon: sign, route: "modules/signs" },
  { title: "Consultorio", icon: consult, route: "modules/consultorio" },
  // { title: "Hospital", icon: hospital, route: "modules/hospital" },
  // { title: "Otondología", icon: dental, route: "modules/ondologia" },
  // { title: "Óptica", icon: optic, route: "modules/optic" },
  // { title: "Farmacia", icon: pharmacy, route: "modules/pharmcy" },
  // { title: "Inventario", icon: inventory, route: "modules/inventory" },
  { title: "Example", icon: example, route: "modules/example" },
];

export default function Modules({
  handleModuleClick,
}: {
  handleModuleClick: (moduleName: string) => void;
}) {
  return (
    <div className="cont-modules">
      <header className="headerModulesPage">
        <h1 className="titleHeaderModules">Sus Módulos</h1>
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

import React from "react";
// Import componente que es la carta de los modulos
import LogOptions from "../components/LogOptions";
// Import de
import "../css/modules.css";
// Import de datos de muestra para mostrar los modulos
import { modules } from "../backend/datas/UserLoginModules/data_login_modules";
import { Employee } from "../backend/types/users/user_employee";
import { roles } from "../backend/datas/Roles/data_roles";

interface ModulesProps {
  handleModuleClick: (moduleName: string) => void;
  user: Employee | null;
}

const Modules: React.FC<ModulesProps> = ({ handleModuleClick, user }) => {
  const userRole = user
    ? roles.find((role) => role.rol_id === user.rol_id)
    : null;
  const availableModules = modules.filter((module) => {
    return userRole ? module.roles.includes(userRole.rol_id) : false;
  });
  return (
    <div className="cont-modules">
      {" "}
      <header className="headerModulesPage">
        {" "}
        <h1 className="titleHeaderModules">Sus Módulos</h1>{" "}
      </header>{" "}
      <div className="main">
        {" "}
        {availableModules.map((module) => (
          <LogOptions
            key={module.title}
            title={module.title}
            icon={module.icon}
            onClick={handleModuleClick}
          />
        ))}{" "}
      </div>{" "}
    </div>
  );
};
export default Modules;

// // Import componente que es la carta de los modulos
// import LogOptions from "../components/LogOptions";
// // Estilos
// import "../css/modules.css";
// // Import de datos de muestra para mostrar los modulos
// import { modules } from "../backend/datas/UserLoginModules/data_login_modules";

// export default function Modules({
//   handleModuleClick,
// }: {
//   handleModuleClick: (moduleName: string) => void;
// }) {
//   return (
//     <div className="cont-modules">
//       <header className="headerModulesPage">
//         <h1 className="titleHeaderModules">Sus Módulos</h1>
//       </header>
//       <div className="main">
//         {" "}
//         {modules.map((module) => (
//           <LogOptions
//             key={module.title}
//             title={module.title}
//             icon={module.icon}
//             onClick={handleModuleClick} // Funcion para renderizar solo el componente de ruta dentro del contenedor main en dashboard
//           />
//         ))}{" "}
//       </div>
//     </div>
//   );
// }

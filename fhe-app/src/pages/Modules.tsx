/**
 *! Componente Modules.tsx
 *? Este componente mediante el uso del ".map" renderiza el componente LogginModulesCard usando para ello mockdata de los modulos que se apega a los tipos de la interfaz modulesStructureTypes
 */

// Import componente que es la carta de los modulos
import LogginModulesCard from "../components/LogginModules/LogginModulesCard";
// Import de la interfaz que define la estructura e informacion visual de las cards para modulos
import { modulesStructureTypes } from "../backendMuckData/types/UserLogginModules/user_loggin_modules";
// Import de la data para los modulos en las cards
import { modulesData } from "../backendMuckData/datas/UserLoginModules/data_login_modules";
// Estilos
import "../css/modules.css";
// Import de variable de las rutas
import ROUTES from "../enviroment/variables_routes";

import { useNavigate } from "react-router-dom";

export default function Modules() {
  const navigate = useNavigate();

  const handleModuleNavigation = (moduleName: string) => {
    const routes: { [key: string]: string } = {
      Emisor: ROUTES.MODULES.MFCHILD,
      Signos: ROUTES.MODULES.MSCHILD,
      Consultorio: ROUTES.MODULES.MTCHILD,
      Example: ROUTES.MODULES.M5CHILD,
    };

    const route = routes[moduleName];
    if (route) {
      navigate(route); // Navega a la ruta específica del módulo
    } else {
      console.warn(`No se encontró una ruta para el módulo: ${moduleName}`);
    }
  };

  return (
    <div className="cont-modules">
      <header className="headerModulesPage">
        <h1 className="titleHeaderModules">Sus Módulos</h1>
      </header>
      <div className="main">
        {modulesData.map((module) => {
          const moduleWithAction: modulesStructureTypes = {
            ...module,
            onClick: handleModuleNavigation, // Agrega la acción de navegación
          };
          return (
            <LogginModulesCard
              key={module.title}
              {...moduleWithAction} // Pasa el módulo completo como props
            />
          );
        })}
      </div>
    </div>
  );
}

// export default function Modules({ handleModuleClick }: { handleModuleClick: (moduleName: string) => void }) {
//   const handleModuleNavigation = (moduleName: string) => {
//     const routes: { [key: string]: string } = {
//       Emisor: ROUTES.MODULES.MFCHILD,
//       Signos: ROUTES.MODULES.MSCHILD,
//       Consultorio: ROUTES.MODULES.MTCHILD,
//       Example: "modules/example",
//     };

//     const route = routes[moduleName];
//     if (route) {
//       console.log(`Navigate to: ${route}`);
//       handleModuleClick(moduleName);
//     }
//   };

//   return (
//     <div className="cont-modules">
//       <header className="headerModulesPage">
//         <h1 className="titleHeaderModules">Sus Módulos</h1>
//       </header>
//       <div className="main">
//         {modulesData.map((module) => {
//           const moduleWithAction: modulesStructureTypes = {
//             ...module,
//             onClick: handleModuleNavigation, // Agrega la acción
//           };
//           return (
//             <LogginModulesCard
//               key={module.title}
//               {...moduleWithAction} // Pasa el módulo completo como props
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// }

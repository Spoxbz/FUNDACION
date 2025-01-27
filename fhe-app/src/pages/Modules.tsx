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
import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
// Import para mostrar modulos segun el rol
import { useAuthStore } from "../backendTwo/zustand/authStore";

export default function Modules() {
  const navigate = useNavigate();
  // Skeleton
  const [loading, setLoading] = useState(true);

  // Obtener rol del usuario desde el store
  const roleName = useAuthStore((state) => state.roleName);
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    // Simula la carga por 2 segundos
    setTimeout(() => setLoading(false), 2000);
  }, []);

  // Filtrar módulos según el rol del usuario
  const filteredModules = modulesData.filter((module) => {
    if (!user || !user.rol_id) return false;

    switch (user.rol_id) {
      case 1: // Mostrar todos los módulos
        console.log(`${roleName}, Mostrar todos los módulos`);
        return true;
      case 2: // Mostrar Emisor, Signos y Consultorio
      case 3:
        console.log(`${roleName}, Mostrar Emisor, Signos y Consultorio`);
        return ["Emisor", "Signos", "Consultorio"].includes(module.title);
      case 4: // Mostrar solo Consultorio
        console.log(`${roleName}, Mostrar solo Consultorio`);
        return module.title === "Consultorio";
      default: // Por defecto no mostrar módulos
        return false;
    }
  });

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
      <div className="sub-cont-modules">
        <header className="headerModulesPage">
          <br />
          <h1 className="titleHeaderModules">Sus Módulos</h1>
        </header>
        <div className="main">
          {loading
            ? Array.from({ length: 4 }).map((_, index) => (
                <Skeleton
                  key={index}
                  variant="rectangular"
                  width={200}
                  height={200}
                  sx={{
                    margin: "10px",
                    borderRadius: "10px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  }}
                />
              ))
            : filteredModules.map((module) => {
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
    </div>
  );
}

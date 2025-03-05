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
import { Link, useNavigate } from "react-router-dom";
import { Box, Skeleton, Typography, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
// Import para mostrar modulos segun el rol
import { useAuthStore } from "../backendTwo/zustand/authStore";
// Import para traer todos los turnos
import { fetchAppointments } from "../backendTwo/service/appointmentsService";
import { Appointment } from "../backendTwo/model/model.appointment";
// Import para traer todos los empleados
import { fetchEmployees } from "../backendTwo/service/employeeService";
import { Employee } from "../backendTwo/model/model.employee";
import { Badge } from "@mui/icons-material";

export default function Modules() {
  const navigate = useNavigate();
  // Skeleton
  const [loading, setLoading] = useState(true);
  // Obtener rol del usuario desde el store
  const roleName = useAuthStore((state) => state.roleName);
  const user = useAuthStore((state) => state.user);
  // Obtener los turnos
  const [totalTurnos, setTotalTurnos] = useState<number | null>(null);
  // Obtener todos los empleados
  const [totalEmployees, setTotalEmployees] = useState<number | null>(null);

  useEffect(() => {
    // Simula la carga por 2 segundos
    setTimeout(() => setLoading(false), 1000);

    if (user) {
      if (user.rol_id === 4) obtenerTurnosMedico(user.employee_id);
      if (user.rol_id === 1) obtenerEmpleados();
    }
  }, [user]);

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

  // Función para obtener los turnos del médico logueado
  const obtenerTurnosMedico = async (doctorId: number) => {
    try {
      const appointments: Appointment[] = await fetchAppointments();
      const turnosFiltrados = appointments.filter((appointment) => appointment.employee_id === doctorId);
      setTotalTurnos(turnosFiltrados.length);
    } catch (error) {
      console.error("Error al obtener los turnos:", error);
      setTotalTurnos(0);
    }
  };

  // Calcula el porcentaje basado en 20 turnos como 100%
  const calcularPorcentajeTurnos = (turnos: number | null) => {
    if (turnos === null) return 0;
    return Math.min((turnos / 20) * 100, 100); // Máximo 100%
  };

  // Funcion para obetner empelados totales
  const obtenerEmpleados = async () => {
    try {
      const employees: Employee[] = await fetchEmployees();
      setTotalEmployees(employees.length);
    } catch (error) {
      console.error("Error al obtener los empleados:", error);
      setTotalEmployees(0);
    }
  };

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
    <div className={`cont-modules ${user?.rol_id === 1 || user?.rol_id === 4 ? "cont-modu" : ""}`}>
      {/*En caso de que el rol de usuario sea 1 o 4, el contendor principal se mostrara como un contenido display flex row*/}

      <div className={`sub-cont-modules ${user?.rol_id === 1 || user?.rol_id === 4 ? "cont-modules-left" : ""}`}>
        {/*En caso de que el rol de usuario sea 1 o 4, los modulos se mostraran como una seccion izquierda */}
        <header className="headerModulesPage">
          <h1 className="titleHeaderModules">Sus Módulos</h1>
        </header>
        <div className={`main ${user?.rol_id === 4 ? "half-width" : ""}`}>
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

      {/*Seccion derecha de la page de modules*/}
      <div className={`${user?.rol_id === 1 || user?.rol_id === 4 ? "aside-modules" : ""} `}>
        {loading ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: "300px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Skeleton width={580} height={200} />
          </Box>
        ) : (
          <>
            {user?.rol_id === 4 ? (
              <>
                <Typography
                  className="titleHeaderModules"
                  variant="h4"
                  sx={{
                    width: "100%",
                    textAlign: "center",
                    marginBottom: "50px",
                    marginTop: "20px",
                  }}
                >
                  Información
                </Typography>
                <div className="info">
                  <Typography>
                    Bienvenido, aquí encontrará todo el contenido actual correspondiente a su rol.
                  </Typography>
                  <div className="info-medico">
                    <Box position="relative" display="inline-flex">
                      <CircularProgress
                        variant="determinate"
                        value={calcularPorcentajeTurnos(totalTurnos)}
                        size={50}
                        thickness={5}
                        sx={{
                          backgroundColor: "rgba(207, 200, 200, 0.8)",
                          borderRadius: "50%",
                          border: "1px solid black",
                        }}
                      />
                      <Box
                        top={0}
                        left={0}
                        bottom={0}
                        right={0}
                        position="absolute"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Typography
                          variant="caption"
                          component="div"
                          color="textSecondary"
                          sx={{
                            padding: "16%",
                            border: "1px solid black",
                            width: "40%",
                            height: "40%",
                            borderRadius: "50%",
                            background: "white",
                          }}
                        >
                          {`${Math.round(calcularPorcentajeTurnos(totalTurnos))}%`}
                        </Typography>
                      </Box>
                    </Box>

                    <p>Total de turnos asignados: {totalTurnos !== null ? totalTurnos : "Cargando..."}</p>
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
            {user?.rol_id === 1 ? (
              <>
                <Typography
                  className="titleHeaderModules"
                  variant="h4"
                  sx={{ width: "100%", textAlign: "center", top: "10px", marginBottom: "50px", marginTop: "20px" }}
                >
                  Información
                </Typography>
                <div className={`info-empleados`}>
                  <div className="info-content">
                    <Typography>
                      Bienvenido, aquí encontrará todo el contenido actual correspondiente a su rol
                    </Typography>
                    <div className="data-employee">
                      <Typography variant="h5" sx={{ width: "90%" }}>
                        Empleados:
                      </Typography>
                      <div className="data">
                        <Typography variant="h5">{totalEmployees !== null ? totalEmployees : "Cargando..."}</Typography>
                        <Link to={ROUTES.ADMIN.ADMINPAGEMPLOYEE}>
                          <Badge sx={{ color: "#0f6fb9", width: "50px", height: "50px" }} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
          </>
        )}
      </div>
      <div className={`${user?.rol_id === 1 || user?.rol_id === 4 ? "cont-modules-rigth" : ""}`}></div>
    </div>
  );
}

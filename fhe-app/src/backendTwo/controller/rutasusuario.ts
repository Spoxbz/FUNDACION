/**
 * En este archivo se definira las rutas a las cuales puede acceder cada usuario segun su rol
 */
import ROUTES from "../../enviroment/variables_routes";

// rutas globales son el dashboard con los modulos, la pagina de notfound cuando no se ha encontrado niguna ruta, y la pagina de / ->login
const RUTASGLOBALES: string[] = [ROUTES.DASHBOARD.FCHILD, ROUTES.LOGIN.BASE, ROUTES.NOTFOUND.BASE4];

//Rutas que solo pueden acceder los adminsitradores: /emisor, /signos, /consultorio y /example
const RUTASADMIN: string[] = [
  ROUTES.MODULES.BASE3,
  ROUTES.MODULES.MFCHILD,
  ROUTES.MODULES.MSCHILD,
  ROUTES.MODULES.MTCHILD,
  ROUTES.MODULES.M5CHILD,
];

// Rutas que solo puede acceder el emisor
const RUTASEMISOR: string[] = [ROUTES.MODULES.MFCHILD];

// Rutas que solo puede acceder el medico
const RUTASMEDICO: string[] = [ROUTES.MODULES.MSCHILD];

//Rutas que solo puede acceder el asistente
const RUTASASISTENTE: string[] = [ROUTES.MODULES.MFCHILD, ROUTES.MODULES.MSCHILD, ROUTES.MODULES.MTCHILD];

const RUTASROLES = {
  RUTASGLOBALES,
  RUTASADMIN,
  RUTASEMISOR,
  RUTASMEDICO,
  RUTASASISTENTE,
};

export default RUTASROLES;

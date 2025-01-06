// user_modules.ts
// Interfaz para mostrar modulos en el dashboard cuando un usuario inicie sesion
export interface LogModulesProps {
  title: string;
  icon: string;
  route: string;
  onClick: (moduleName: string) => void;
  roles: number[];
}

// Esta es la interfaz que define los tipos para las cards de los modulos de los usuarios para mostrar informacion y tambien para realizar una accion
export interface modulesStructureTypes {
  title: string; // Título del módulo (para mostrar)
  icon: string; // Ícono del módulo (visualización)
  route: string; // Ruta asociada al módulo
  onClick: (moduleName: string) => void; // Acción al hacer clic
}

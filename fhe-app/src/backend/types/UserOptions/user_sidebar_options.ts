// user_sidebar_options.ts
export interface SidebarOption {
  title: string;
  icon: React.ReactNode;
  action: () => void; // Acción que se ejecutará al seleccionar la opción
  roles: number[]; // Lista de IDs de roles que pueden ver esta opción
}

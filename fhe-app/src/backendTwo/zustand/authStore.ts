/**
 * Este archivo es para poder almacenar todo el registro de incio de sesión de un usuario
 * Aqui almaceno el json del empleado logueado y uso el model de employee para el tipado
 * También asigno a el loggin del sistema y se actualiza con el nombre del rol
 * To do el texto anterior es de mentira
 */

import { create } from "zustand";
import { Employee } from "../model/model.employee";
import { fetchRoleNameById } from "../service/roleService";

interface AuthState {
  user: Employee | null;
  roleName: string | null;
  login: (employee: Employee) => Promise<void>;
  logout: () => void;
  loadUserRole: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: JSON.parse(localStorage.getItem("loggedInUser") || "null"),
  roleName: null,

  login: async (employee) => {
    localStorage.setItem("loggedInUser", JSON.stringify(employee));
    set({ user: employee });
    await get().loadUserRole(); // Cargar el nombre del rol después del login
  },

  logout: () => {
    localStorage.removeItem("loggedInUser");
    set({ user: null, roleName: null });
    console.log("Cerrando sesión");
  },

  loadUserRole: async () => {
    const user = get().user;
    if (user && user.rol_id) {
      const roleName = await fetchRoleNameById(user.rol_id);
      set({ roleName });
    }
  },
}));

// // este archivo es authStore.ts
// import { create } from "zustand";
// import { Employee } from "../model/model.employee";
// import { fetchRoleNameById } from "../service/roleService";

// interface AuthState {
//   user: Employee | null;
//   roleName: string | null;
//   setUser: (employee: Employee) => void;
//   logout: () => void;
//   loadUserRole: () => Promise<void>;
// }

// export const useAuthStore = create<AuthState>((set, get) => ({
//   user: JSON.parse(localStorage.getItem("loggedInUser") || "null"),
//   roleName: null,

//   login: (employee) => {
//     localStorage.setItem("loggedInUser", JSON.stringify(employee));
//     set({ user: employee });
//   },

//   setUser: (employee) => {
//     localStorage.setItem("loggedInUser", JSON.stringify(employee));
//     set({ user: employee });
//     get().loadUserRole(); // Llamar al fetch para cargar el rol al loguearse
//   },

//   logout: () => {
//     localStorage.removeItem("loggedInUser");
//     set({ user: null, roleName: null });
//     console.log("Cerrando sesión");
//   },

//   loadUserRole: async () => {
//     const user = get().user;
//     if (user && user.rol_id) {
//       const roleName = await fetchRoleNameById(user.rol_id);
//       set({ roleName });
//     }
//   },
// }));

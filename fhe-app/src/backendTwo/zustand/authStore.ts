import { create } from "zustand";
import { Employee } from "../model/model.employee";

interface AuthState {
  user: Employee | null;
  login: (employee: Employee) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: JSON.parse(localStorage.getItem("loggedInUser") || "null"),
  login: (employee) => {
    localStorage.setItem("loggedInUser", JSON.stringify(employee));
    set({ user: employee });
  },
  logout: () => {
    localStorage.removeItem("loggedInUser");
    set({ user: null });
    console.log("Cerrando sesion");
  },
}));

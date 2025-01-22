// backenTwo/service/authService.ts

import { client } from "../api/client";
import { PostgrestError } from "@supabase/supabase-js";
// import par tipar employee
import { Employee } from "../model/model.employee";

// Inicio de sesión personalizado
export const signIn = async (
  username: string,
  password: string
): Promise<{ employee: Employee | null; error: PostgrestError | null }> => {
  const { data, error } = await client
    .from("employee")
    .select("*")
    .eq("username", username)
    .eq("password", password)
    .single();

  return { employee: data, error };
};

// // src/pages/RegisterPage.tsx
// import React, { useState } from "react";
// import { client } from "../backendMuckData/api/client"; // Importa el cliente de Supabase
// // Estilos
// import "../CSS/registerpage.css"; // Agrega esto al principio de tu archivo

// const RegisterPage = () => {
//   // Estado para manejar los campos del formulario
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState<boolean>(false);

//   const handleRegister = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       // Crear un nuevo usuario en Supabase
//       const { user, error } = await client.auth.signUp({
//         email,
//         password,
//       });

//       if (error) {
//         setError(error.message); // Mostrar mensaje de error si ocurre
//       } else {
//         // Aquí puedes redirigir al usuario o hacer algo después del registro exitoso
//         console.log("Usuario registrado:", user);
//       }
//     } catch (err) {
//       setError("Hubo un problema al registrar el usuario.");
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="register-container">
//       <h2>Registro de Usuario</h2>
//       <form onSubmit={handleRegister}>
//         <div>
//           <label htmlFor="email">Correo Electrónico</label>
//           <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         </div>
//         <div>
//           <label htmlFor="password">Contraseña</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         {error && <div className="error-message">{error}</div>}
//         <button type="submit" disabled={loading}>
//           {loading ? "Registrando..." : "Registrar"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default RegisterPage;

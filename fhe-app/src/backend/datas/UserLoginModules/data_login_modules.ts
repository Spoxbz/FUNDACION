// data_login_modules.ts
//import images
import emisor from "../../../assets/img/cardoptions/emisor-blue.png";
import sign from "../../../assets/img/cardoptions/sign-blue.png";
import consult from "../../../assets/img/cardoptions/consult-blue.png";
import example from "../../../assets/img/example.png";

// datos para los modulos de inicio de sesion
export const modules = [
  { title: "Emisor", icon: emisor, route: "modules/calendar", roles: [1, 2] },
  { title: "Signos", icon: sign, route: "modules/signs", roles: [1, 3] },
  {
    title: "Consultorio",
    icon: consult,
    route: "modules/consultorio",
    roles: [1, 4],
  },
  { title: "Example", icon: example, route: "modules/example", roles: [1] },
];

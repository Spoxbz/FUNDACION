// data_login_modules_card.ts
// Import de la interfaz para las cartas de los modulos
import { modulesStructureTypes } from "../../types/UserLogginModules/user_loggin_modules";
// Import de las imagenes para la data de modulesData
import emisor from "../../../assets/img/cardoptions/emisor-blue.png";
import sign from "../../../assets/img/cardoptions/sign-blue.png";
import consult from "../../../assets/img/cardoptions/consult-blue.png";
import example from "../../../assets/img/example.png";

export const modulesData: modulesStructureTypes[] = [
  { title: "Emisor", icon: emisor, route: "modules/schedule" },
  { title: "Signos", icon: sign, route: "modules/signs" },
  { title: "Consultorio", icon: consult, route: "modules/consultorio" },
  { title: "Example", icon: example, route: "modules/example" },
];

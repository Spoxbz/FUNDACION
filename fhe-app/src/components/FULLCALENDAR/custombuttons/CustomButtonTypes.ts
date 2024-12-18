export interface CustomButton {
  text: string;
  click: () => void; // Función sin parámetros y sin retorno
}

export type CustomButtons = {
  [key: string]: CustomButton; // Cada botón se identifica por una clave única
};

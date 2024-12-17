// Events.ts

// Funcion de eventos fijos en el calendario
export const getFixedEvents = () => [
  { title: "Evento Fijo 1", date: "2024-12-09" },
  { title: "Evento Fijo 2", date: "2024-12-10" },
];

// Funcion de eventos dinamicos en el calendario
export const getDynamicEvents = (): { title: string; date: string }[] => {
  const today = new Date();
  const yesterday = new Date(today);
  const tomorrow = new Date(today);

  yesterday.setDate(today.getDate() - 1);
  tomorrow.setDate(today.getDate() + 1);

  return [
    { title: "Evento de Ayer", date: yesterday.toISOString().split("T")[0] },
    { title: "Evento de Hoy", date: today.toISOString().split("T")[0] },
    { title: "Evento de Mañana", date: tomorrow.toISOString().split("T")[0] },
  ];
};

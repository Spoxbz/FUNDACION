// components/CustomViews.tsx

// Vista diaria
export const timeGridDayView = {
  slotDuration: "00:05:00",
  slotLabelFormat: { hour: "2-digit", minute: "2-digit" } as const,
};

// Vista semanal
export const timeGridWeekView = {
  slotDuration: "00:05:00",
  slotLabelFormat: { hour: "2-digit", minute: "2-digit" } as const,
};

// Vista mensual
export const dayGridMonthView = { allDaySlot: false, dayMaxEventRows: false };

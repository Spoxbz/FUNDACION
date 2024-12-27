// src/components/StickyCards/StickyListCard.tsx

import { Box, List, ListItem, ListItemText } from "@mui/material";
import { useState } from "react";

interface StickyListCardProps<T> {
  data: T[];
  onItemSelect?: (item: T) => void; // Hacemos que onItemSelect sea opcional
}

export default function StickyListCard<T extends { nombre: string }>({
  data,
  onItemSelect,
}: StickyListCardProps<T>) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (i: number, item: T) => {
    setActiveIndex(i);
    if (onItemSelect) {
      onItemSelect(item);
    }
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <List className="lista-contenido-carta">
        {data.map((elemento, i) => (
          <ListItem
            key={elemento.nombre}
            onClick={() => handleClick(i, elemento)}
            className={activeIndex === i ? "active" : ""}
            sx={{
              "&.active": {
                backgroundColor: "#c6cdE6",
                color: "#00796b",
                fontWeight: "bold",
              },
            }}
          >
            <ListItemText
              primary={elemento.nombre}
              sx={{
                margin: "0px",
                height: "px",
                display: "flex",
                alignItems: "center",
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

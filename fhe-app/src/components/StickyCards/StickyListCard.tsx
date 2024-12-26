import { Box, List, ListItem, ListItemText } from "@mui/material";
import { useState } from "react";

type Props = {
  data: string[];
};

export default function StickyListCard(props: Props) {
  const { data } = props;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (i: number) => {
    setActiveIndex(i);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <List className="lista-contenido-carta">
        {data.map((elemento, i) => (
          <ListItem
            key={elemento}
            onClick={() => handleClick(i)}
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
              primary={elemento}
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

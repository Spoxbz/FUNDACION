import { Box, ListItem, ListItemText } from "@mui/material";
import List from "@mui/material/List";
import { useState } from "react";

type Props = {
  data: string[];
};

export default function EventLists(props: Props) {
  const { data } = props;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (i: number) => {
    setActiveIndex(i);
  };

  return (
    <Box>
      <List>
        {data.map((elemento, i) => (
          <ListItem
            key={elemento}
            onClick={() => handleClick(i)}
            className={activeIndex === i ? "active" : ""}
            sx={{
              "&.active": {
                backgroundColor: "#e0f7fa",
                color: "#00796b",
                fontWeight: "bold",
              },
            }}
          >
            <ListItemText primary={elemento} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

import { Box, ListItem, ListItemText } from "@mui/material";
import List from "@mui/material/List";

type Props = {
  data: string[];
};

export default function Lists(props: Props) {
  const { data } = props;

  return (
    <Box className="container-list">
      <List>
        {data.map((elemento) => (
          <ListItem key={elemento}>
            {" "}
            <ListItemText primary={elemento} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

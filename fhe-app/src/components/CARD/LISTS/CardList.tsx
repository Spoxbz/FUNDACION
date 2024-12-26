import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Lists from "./Lists";

export default function CardList() {
  return (
    <Card>
      <CardContent>
        <CardBodyList
          image={
            "https://imgs.search.brave.com/-jlQQHvHbMPCWiGJabUJ7fCftQXdN0SPDQ-nZpo9fsE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMz/NzE3NjY5OS9lcy9m/b3RvL2NvbmNlcHRv/LWRlLWxpc3RhLWRl/LXZlcmlmaWNhY2kl/QzMlQjNuLW1hcmNh/LWRlLXZlcmlmaWNh/Y2klQzMlQjNuLWVu/LWJsb3F1ZXMtZGUt/bWFkZXJhLWVuLWxh/LW1lc2EtY29uLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1N/ZVMxYkMzcmw2YUdO/dGtqamVTX0tvLVhY/LTNDakYwVTRJNko5/ckVuM0dnPQ"
          }
          title="Card Imprimiendo Lista"
          desc="En esta card se esta usando un componente list el cual imprime usando .map un array con contenido"
        />
      </CardContent>
    </Card>
  );
}

type CardListProps = {
  image: string;
  title: string;
  desc?: string;
};

export function CardBodyList(props: CardListProps) {
  const { image, title, desc } = props;
  const listContent = ["Uno", "Dos", "Tres"];
  return (
    <>
      <CardMedia image={image} sx={{ height: 140 }} title="Imagen de lista" />
      <Typography variant="h5">{title}</Typography>
      <Typography>{desc}</Typography>
      <Lists data={listContent} />
    </>
  );
}

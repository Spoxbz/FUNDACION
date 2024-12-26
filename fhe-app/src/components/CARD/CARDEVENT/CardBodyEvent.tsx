import { CardMedia, Typography } from "@mui/material";

type CardBodyEventProps = {
  image: string;
  title: string;
  describe?: string;
};

export default function CardBodyEvent(props: CardBodyEventProps) {
  const { image, title, describe } = props;
  return (
    <>
      <CardMedia image={image} sx={{ height: 140 }} title="Imagen de eventos" />
      <Typography variant="h5">{title}</Typography>
      <Typography>{describe}</Typography>
    </>
  );
}

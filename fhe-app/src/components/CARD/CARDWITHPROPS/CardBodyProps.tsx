import { CardMedia, Typography } from "@mui/material";

interface Props {
  image: string;
  title: string;
  description?: string;
}

export default function CardBodyProps(props: Props) {
  const { title, image, description } = props;
  return (
    <>
      {/*Fragmen*/}
      <CardMedia
        image={image}
        // image="https://imgs.search.brave.com/yaZxDWH5GSTp7nRCeFfIL5UJmZESgHJCO8fZp4uJ2zM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODQx/MjEzNzAvcGhvdG8v/aW1hZ2Utb2YtY2Fy/ZC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9ODdfNXNQSEhs/N2FDUjZjeWVSZFNa/a3EyT0hUSmpQTmRE/T0trSDlQXzhtQT0"
        sx={{ height: 140 }}
        title="cartas"
      />
      <Typography variant="h5">{title}</Typography>
      <Typography>{description}</Typography>
    </>
  );
}

import { CardHeader, Divider } from "@mui/material";
import StickyListCard from "./StickyListCard";

type SpecialtyCardBodyProps = {
  title: string;
};

export default function SpecialtyBodyCard(props: SpecialtyCardBodyProps) {
  const { title } = props;

  const listespecialities: string[] = [
    "Ondotologia",
    "Cardiologia",
    "Prefesion 3",
    "Prefesion 4",
    "Prefesion 5",
    "Prefesion 6",
    "Prefesion 7",
    "Prefesion 8",
  ];

  return (
    <>
      <CardHeader title={title} />
      <Divider />
      <StickyListCard data={listespecialities} />
    </>
  );
}

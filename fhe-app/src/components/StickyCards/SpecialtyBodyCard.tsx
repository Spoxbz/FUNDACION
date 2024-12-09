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
    "otorrinolaringología",
  ];

  return (
    <>
      <CardHeader title={title} />
      <Divider />
      <StickyListCard data={listespecialities} />
    </>
  );
}

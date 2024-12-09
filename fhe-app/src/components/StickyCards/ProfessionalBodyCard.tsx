import { CardHeader, Divider } from "@mui/material";
import StickyListCard from "./StickyListCard";

type ProfessionalBodyCardProps = {
  title: string;
};

export default function ProfessionBodyCard(props: ProfessionalBodyCardProps) {
  const { title } = props;

  const professionallist: string[] = [
    "Don Alfonso",
    "Pablo Escobar",
    "Xavier Neruda",
    "Zoyla Vaca",
  ];
  return (
    <>
      <CardHeader title={title} />
      <Divider />
      <StickyListCard data={professionallist} />
    </>
  );
}

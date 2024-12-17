// import { CardHeader, Divider, IconButton } from "@mui/material";
// import StickyListCard from "./StickyListCard";
// import LayersClearIcon from "@mui/icons-material/LayersClear";
// import "../../CSS/calendar.css";

// type SpecialtyCardBodyProps = {
//   title: string;
//   onResetSelection: () => void;
//   resetSelection: boolean;
// };

// export default function SpecialtyBodyCard(props: SpecialtyCardBodyProps) {
//   const { title, onResetSelection, resetSelection } = props;

//   const listespecialities: string[] = [
//     "Ondotologia",
//     "Cardiologia",
//     "Prefesion 3",
//     "Prefesion 4",
//     "Prefesion 5",
//     "Prefesion 6",
//     "Prefesion 7",
//     "Prefesion 8",
//   ];

//   return (
//     <>
//       <CardHeader
//         className="encabezado-tarjetas"
//         title={title}
//         action={
//           <IconButton onClick={onResetSelection} aria-label="clear selection">
//             <LayersClearIcon />
//           </IconButton>
//         }
//       />
//       <Divider sx={{ background: "blue", marginBottom: "0px" }} />
//       <StickyListCard
//         data={listespecialities}
//         resetSelection={resetSelection}
//       />
//     </>
//   );
// }

import { CardHeader, Divider } from "@mui/material";
import StickyListCard from "./StickyListCard";
import "../../CSS/calendar.css";

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
    "Prefesion 8",
    "Prefesion 8",
    "Prefesion 8",
    "Prefesion 8",
    "Prefesion 8",
    "Prefesion 8",
  ];

  return (
    <>
      <CardHeader className="encabezado-tarjetas" title={title} />
      {/* <Divider sx={{ background: "blue", marginBottom: "0px" }} /> */}
      <Divider />
      <StickyListCard data={listespecialities} />
    </>
  );
}

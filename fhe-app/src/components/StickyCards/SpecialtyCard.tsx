// import { Card, CardContent } from "@mui/material";
// import SpecialtyBodyCard from "./SpecialtyBodyCard";
// import "../../CSS/calendar.css";
// import { useState } from "react";

// export default function SpecialtyCard() {
//   const [resetSelection, setResetSelection] = useState(false);

//   const handleResetSelection = () => {
//     setResetSelection(!resetSelection);
//   };

//   return (
//     <>
//       <Card className="tarjetas" sx={{ marginRight: "20px" }}>
//         <CardContent>
//           <SpecialtyBodyCard
//             title={"Especialidad"}
//             onResetSelection={handleResetSelection}
//             resetSelection={resetSelection}
//           />
//         </CardContent>
//       </Card>
//     </>
//   );
// }

import { Card, CardContent } from "@mui/material";
import SpecialtyBodyCard from "./SpecialtyBodyCard";
import "../../CSS/calendar.css";

export default function SpecialtyCard() {
  return (
    <>
      <Card className="tarjetas" sx={{ marginRight: "20px" }}>
        <CardContent>
          <SpecialtyBodyCard title={"Especialidad"} />
        </CardContent>
      </Card>
    </>
  );
}

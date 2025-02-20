import { Tooltip } from "@mui/material";
import { ReactElement } from "react";

interface ToolsProps {
  title: string;
  icon: ReactElement;
}

export default function Tools({ title, icon }: ToolsProps) {
  return (
    <Tooltip disableFocusListener title={title} placement="right">
      {icon}
    </Tooltip>
  );
}

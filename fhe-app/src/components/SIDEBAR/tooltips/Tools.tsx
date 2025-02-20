import { Tooltip } from "@mui/material";
import { ReactElement } from "react";
import { NavLink } from "react-router-dom";

interface ToolsProps {
  title: string;
  icon: ReactElement;
  route: string;
}

export default function Tools({ title, icon, route }: ToolsProps) {
  return (
    <NavLink to={route} className={({ isActive }) => (isActive ? "aside-link active" : "aside-link")}>
      <Tooltip disableFocusListener title={title} placement="right">
        {icon}
      </Tooltip>
    </NavLink>
  );
}

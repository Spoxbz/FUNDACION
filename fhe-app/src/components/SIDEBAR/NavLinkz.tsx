import { NavLink } from "react-router-dom";
import { ReactElement } from "react";

interface NavLinkzProps {
  route: string;
  icon: ReactElement;
}

export default function NavLinkz({ route, icon }: NavLinkzProps) {
  return (
    <NavLink
      to={route}
      style={({ isActive }) => ({
        color: isActive ? "red" : "black",
      })}
    >
      {icon}
    </NavLink>
  );
}

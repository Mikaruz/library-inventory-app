import { NavLink } from "react-router-dom";
import { Icon } from "lucide-react";

interface SideBarLinksProps {
  to: string;
  text: string;
  icon: Icon;
}

export const SideBarLinks = ({ to, text, icon: Icon }: SideBarLinksProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "flex items-center gap-3 rounded-md bg-gray-800 p-2 text-gray-200"
          : "flex items-center gap-3 p-2 text-gray-800"
      }
    >
      <Icon />
      <h5>{text}</h5>
    </NavLink>
  );
};

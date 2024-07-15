import { NavLink } from "react-router-dom";
import { IconType } from "react-icons";

interface SideBarLinksProps {
  to: string;
  text: string;
  icon: IconType;
}

export const SideBarLinks = ({ to, text, icon: Icon }: SideBarLinksProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "flex items-center gap-3 text-gray-200 bg-gray-800 p-2 rounded-md"
          : "flex items-center gap-3 text-gray-800 p-2"
      }
    >
      <Icon />
      <h5>{text}</h5>
    </NavLink>
  );
};

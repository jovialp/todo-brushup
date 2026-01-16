import { NAV_BAR_LINKS } from "@/constants";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center px-20 py-3 border-b mb-5">
      <div>
        <NavLink to="/">Todo App</NavLink>
      </div>
      <div className="flex gap-4 items-center justify-end">
        {NAV_BAR_LINKS.map((link) => (
          <NavLink key={link.path} to={link.path}>
            {link.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default NavBar;

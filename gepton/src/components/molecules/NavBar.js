import * as React from "react";
import { Menu, X } from "react-feather";
import NavItems from "../atoms/NavItems";

const navLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Projects",
    link: "/project",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="sm:flex sm:justify-between sm:items-center">
      <div className="flex items-center justify-between ">
        <div>
          <img
            src="https://res.cloudinary.com/gepton/image/upload/v1643452655/gepton/branding/gepton_logo_resize.png"
            alt="Gepton Logo"
            className="h-8"
          />
        </div>
        <div className="sm:hidden">
          <button onClick={handleClick}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} sm:block`}>
        {navLinks.map((navLink) => (
          <NavItems title={navLink.title} src={navLink.link} />
        ))}
      </div>
    </div>
  );
};

export default NavBar;

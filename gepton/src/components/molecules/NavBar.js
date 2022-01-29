import * as React from "react";
import { Link } from "gatsby";
import { Menu, X } from "react-feather";
import NavItems from "../atoms/NavItems";
import { navLinks } from "../../../configs/header";

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="sm:flex sm:justify-between sm:items-center">
      <div className="flex items-center justify-between ">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/gepton/image/upload/v1643452655/gepton/branding/gepton_logo_resize.png"
            alt="Gepton Logo"
            className="h-10"
          />
        </Link>
        <div className="sm:hidden hover:text-red-600">
          <button onClick={handleClick}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </div>
      <div className="hidden sm:block">
        {navLinks.map((navLink) => (
          <NavItems title={navLink.title} src={navLink.link} />
        ))}
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } fixed top-0 left-0 right-0 bottom-0 backdrop-blur-3xl text-center sm:hidden`}
      >
        <button className="my-36" onClick={handleClick}>
          <X className="hover:text-red-600" />
        </button>
        {navLinks.map((navLink) => (
          <NavItems title={navLink.title} src={navLink.link} />
        ))}
      </div>
    </div>
  );
};

export default NavBar;

import * as React from "react";
import { Link } from "gatsby";

const NavItems = ({ title, src }) => {
  return (
    <Link
      className="sm:ml-4 block text-center font-semibold sm:inline-block"
      to={src}
    >
      {title}
    </Link>
  );
};

export default NavItems;

import * as React from "react";
import { Link } from "gatsby";

const NavItems = ({ title, src }) => {
  return (
    <Link
      className="sm:ml-6 text-lg mt-2 hover:text-red-600 sm:mt-0 text-gray-700 block text-center font-semibold sm:inline-block"
      to={src}
    >
      {title}
    </Link>
  );
};

export default NavItems;

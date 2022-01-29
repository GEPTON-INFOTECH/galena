import * as React from "react";

const NavItems = ({ title, src }) => {
  return (
    <a
      className="sm:ml-4 block text-center font-semibold sm:inline-block"
      href={src}
    >
      {title}
    </a>
  );
};

export default NavItems;

import * as React from "react";

const SecondaryButton = ({ title, link, color, extra }) => {
  return (
    <a
      href={link}
      className={`bg-white shadow-lg text-${color}-600 border-2 border-${color}-600 btn hover:text-white hover:bg-${color}-600 ${extra}`}
    >
      {title}
    </a>
  );
};

export default SecondaryButton;

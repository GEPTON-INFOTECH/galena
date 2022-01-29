import * as React from "react";

const PrimaryButton = ({ title, link, color, extra }) => {
  return (
    <a
      href={link}
      className={`bg-${color}-600 shadow-lg text-white btn hover:bg-white hover:text-${color}-600 hover:border-2 hover:border-${color}-600 ${extra}`}
    >
      {title}
    </a>
  );
};

export default PrimaryButton;

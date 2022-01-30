import * as React from "react";

const PrimaryButton = ({ title, link }) => {
  return (
    <a
      href={link}
      className={`bg-red-600 shadow-lg text-white btn hover:bg-white hover:text-red-600 hover:border-2 hover:border-red-600`}
    >
      {title}
    </a>
  );
};

export default PrimaryButton;

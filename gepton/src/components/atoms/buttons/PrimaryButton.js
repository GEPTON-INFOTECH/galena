import * as React from "react";

const PrimaryButton = ({ title, link, reverse, purple }) => {
  let classes = `bg-red-600 btn text-white hover:bg-white hover:text-red-600 hover:border-2 hover:border-red-600`;
  if (reverse) {
    classes = `bg-white text-red-600 btn border-2 border-red-600 hover:text-white hover:bg-red-600`;
    if (purple) {
      classes = `bg-purple-700 text-white btn border-2 border-white hover:text-purple-700 hover:bg-white`;
    }
  }
  return (
    <a href={link} className={classes}>
      {title}
    </a>
  );
};

export default PrimaryButton;

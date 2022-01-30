import * as React from "react";
import { tagDesc } from "../../../configs/header";
import PrimaryButton from "../atoms/buttons/PrimaryButton";

const Header = () => {
  return (
    <div className="md:flex md:mt-20 lg:-my-14 md:items-center md:justify-between md:flex-row-reverse md:min-h-screen">
      <div>
        <img
          src="https://res.cloudinary.com/gepton/image/upload/v1643468733/gepton/gepton.com/Saly-13_tr7wuv.png"
          alt="header monkey"
          className="w-10/12 mx-auto md:mr-0"
        />
      </div>
      <div className="text-center md:text-left md:max-w-md mb-12">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-2 text-gray-900 ">
          We help you <span className="text-red-600">Build </span>
          your digital presence.
        </h1>
        <p className="text-gray-600 mt-2 mb-6">{tagDesc}</p>
        <PrimaryButton title="Let's Discuss" link="#" color="red" />
      </div>
    </div>
  );
};

export default Header;

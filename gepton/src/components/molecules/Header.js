import * as React from "react";

const Header = () => {
  return (
    <div>
      <div>
        <img
          src="https://res.cloudinary.com/gepton/image/upload/v1643459969/gepton/gepton.com/Saly-13_tr7wuv.png"
          alt="header monkey"
          className="w-10/12 mx-auto"
        />
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">
          We help you <span className="text-red-600">Build </span>
          your digital presence.
        </h1>
        <p className="text-gray-600 mb-6">
          Placeholder text goes here, something catchy which supports the above
          heading and encourage to click below button. Placeholder text goes
          here.
        </p>
        <a
          href="#"
          className="bg-red-600 shadow text-white font-semibold text-lg px-6 py-2 rounded-full"
        >
          Let’s Discuss
        </a>
      </div>
    </div>
  );
};

export default Header;

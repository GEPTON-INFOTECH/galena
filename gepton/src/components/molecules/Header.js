import * as React from "react";

const Header = () => {
  return (
    <div className="sm:flex sm:mt-20 lg:-my-12 sm:items-center sm:justify-between sm:flex-row-reverse sm:min-h-screen">
      <div>
        <img
          src="https://res.cloudinary.com/gepton/image/upload/v1643468733/gepton/gepton.com/Saly-13_tr7wuv.png"
          alt="header monkey"
          className="w-10/12 mx-auto sm:mr-0"
        />
      </div>
      <div className="text-center sm:text-left sm:max-w-md">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-2">
          We help you <span className="text-red-600">Build </span>
          your digital presence.
        </h1>
        <p className="text-gray-600 mt-2 mb-6">
          We work alongside your team and brand to build your digital identity.
          We work alongside your team and brand to build your digital identity.
        </p>
        <a
          href="#"
          className="bg-red-600 shadow text-white font-semibold text-lg sm:text-xl px-6 py-2 rounded-full"
        >
          Let’s Discuss
        </a>
      </div>
    </div>
  );
};

export default Header;

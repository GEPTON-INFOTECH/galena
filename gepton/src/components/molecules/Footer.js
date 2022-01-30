import * as React from "react";
import { contacts, socials, references, infos } from "../../../configs/footer";

const Footer = () => {
  return (
    <footer className="text-gray-700 py-12" id="contact">
      {/* <div className="max-w-screen-xl mx-auto mb-12 lg:mb-16  ">
        <img className="h-8" src={logoUrl} alt="Gepton logo" />
      </div> */}
      <div className="max-w-screen-xl mx-auto ">
        <div className="grid grid-cols-8 md:grid-cols-9  lg:grid-cols-8  divide-gray-200 divide-y-2 md:divide-x-2 md:divide-y-0 md:-mx-8">
          <div className="col-span-8 md:col-span-3 lg:col-span-2 md:px-8 py-4 md:py-0">
            <h5 className="text-xl font-semibold text-gray-700">Info</h5>
            <nav className="mt-4">
              <ul className="space-y-2">
                {infos.map((info, index) => (
                  <li key={index}>
                    <a
                      href={info.link}
                      className="font-normal text-base hover:text-red-600"
                    >
                      {info.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-span-8 md:col-span-3 lg:col-span-3 md:px-8 py-4 md:py-0">
            <h5 className="text-xl font-semibold text-gray-700">Reference</h5>
            <nav className="mt-4">
              <ul className="grid lg:grid-cols-2">
                {references.map((reference, index) => (
                  <li className="mb-2" key={index}>
                    <a
                      href={reference.link}
                      className="font-normal text-base hover:text-red-600"
                    >
                      {reference.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-span-8 md:col-span-3 lg:col-span-3 md:px-8 py-4 md:py-0">
            <h5 className="text-xl font-semibold text-gray-700">
              Let's Connect
            </h5>
            <nav className="mt-4">
              {contacts.map((contact, index) => (
                <a
                  href={contact.link}
                  key={index}
                  className="flex my-4 font-normal text-base hover:text-red-600"
                >
                  {contact.icon} <p className="ml-2">{contact.text}</p>
                </a>
              ))}
              <ul className="mt-4">
                {socials.map((social, index) => (
                  <li key={index} className="mb-2 inline-block mr-4">
                    <a
                      href={social.link}
                      className="font-normal text-base hover:text-red-600"
                    >
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="text-center space-y-4 mt-8 lg:mt-12 border-t-2 border-gray-200 pt-8">
        <p className="text-sm">
          &copy;2020-2022 | Designed ❤️ with by{" "}
          <a href="#" className="text-red-600 font-bold hover:text-black">
            GEPTON{" "}
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

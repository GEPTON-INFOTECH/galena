import React from "react";
import PrimaryButton from "../atoms/buttons/PrimaryButton";

export default function Cta() {
  return (
    <div className="text-center bg-purple-700 py-16">
      <h1 className="text-white text-3xl">Let's scale your brand together.</h1>
      <p className="text-gray-100 mb-6">Have an idea?</p>
      <PrimaryButton
        reverse={true}
        title="Let's Discuss"
        link="#"
        purple={true}
      />
    </div>
  );
}

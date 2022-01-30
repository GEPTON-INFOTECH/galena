import React from "react";
import PrimaryButton from "../atoms/buttons/PrimaryButton";

export default function Featured({ f, reverse }) {
  let extra = "";
  if (reverse) {
    extra = "md:flex-row-reverse bg-gray-50";
  }
  return (
    <div className={`md:flex items-center mt-12 ${extra}`}>
      <div className="md:w-1/2 my-6 ">
        <img src={f.img.url} alt={f.img.alt} className="h-auto w-10/12" />
      </div>
      <div className="md:w-1/2 p-4">
        <h1 className="text-3xl my-6 md:text-4xl md:my-8">
          {f.t1}
          <span className="text-red-600">{f.t}</span>
          {f.t2}
        </h1>
        {f.points.map((point, index) => (
          <p className="my-4 md:my-6" key={index}>
            {point}
          </p>
        ))}

        <div className="my-6 md:my-6">
          <PrimaryButton
            title={f.button.title}
            link={f.button.link}
            reverse={reverse}
            color="red"
          />
        </div>
      </div>
    </div>
  );
}

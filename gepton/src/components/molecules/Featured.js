import React from "react";
import { f1Img } from "../../../configs/featured";
import PrimaryButton from "../atoms/buttons/PrimaryButton";

export default function Featured() {
  return (
    <div className="md:flex items-center bg-gray-100">
      <div className="md:w-1/2 my-6 ">
        <img src={f1Img} alt="featured app" className="h-auto w-10/12" />
      </div>
      <div className="md:w-1/2 p-4">
        <h1 className="text-3xl my-6 md:text-4xl md:my-8">
          We build amazing <span className="text-red-600">app </span>
          solutions
        </h1>
        <p className="my-4 md:my-6">
          Highly scalable apps for boosting your business to moon Highly
          scalable apps for boosting your business to moon 🚀
        </p>
        <p className="my-4 md:my-6">
          Highly scalable apps for boosting your business to moon Highly
          scalable apps for boosting your business to moon 🚀
        </p>
        <p className="my-4 md:my-6">
          Highly scalable apps for boosting your business to moon Highly
          scalable apps for boosting your business to moon 🚀
        </p>
        <div className="my-6 md:my-6">
          <PrimaryButton title="Book Appointment" />
        </div>
      </div>
    </div>
  );
}

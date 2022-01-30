import React from "react";
import { TrendingUp, CloudLightning, DollarSign } from "react-feather";
export default function Info() {
  return (
    <div className="md:flex py-12" id="about">
      <div className="md:w-1/3 mr-12">
        <TrendingUp />
        <h3 className="text-xl font-bold mt-4 mb-2">Highly scalable</h3>
        <p className="text-gray-500 mb-4">
          Scalable Business Scalable Business Scalable Business
        </p>
      </div>
      <div className="md:w-1/3 mr-12">
        <CloudLightning />
        <h3 className="text-xl font-bold mt-4 mb-2">Lightning fast</h3>
        <p className="text-gray-500 mb-4">
          Scalable Business Scalable Business Scalable Business
        </p>
      </div>
      <div className="md:w-1/3 mr-12">
        <DollarSign />
        <h3 className="text-xl font-bold mt-4 mb-4">Revenue oriented</h3>
        <p className="text-gray-500 mb-4">
          Scalable Business Scalable Business Scalable Business
        </p>
      </div>
    </div>
  );
}

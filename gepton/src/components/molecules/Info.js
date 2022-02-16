import React from "react";
import { TrendingUp, CloudLightning, BarChart } from "react-feather";
export default function Info() {
  return (
    <div className="md:flex py-12" id="about">
      <div className="md:w-1/3 mr-12">
        <BarChart />
        <h3 className="text-xl font-bold mt-4 mb-2">Thrive</h3>
        <p className="text-gray-500 mb-4">
          Thrive in a competitive environment by reimagining your firm through
          digital transformation.
        </p>
      </div>
      <div className="md:w-1/3 mr-12">
        <CloudLightning />
        <h3 className="text-xl font-bold mt-4 mb-2">Innovate</h3>
        <p className="text-gray-500 mb-4">
          We bring value-adding innovation to your firm and team that makes a
          positive difference.
        </p>
      </div>
      <div className="md:w-1/3 mr-12">
        <TrendingUp />
        <h3 className="text-xl font-bold mt-4 mb-4">Accelerate</h3>
        <p className="text-gray-500 mb-4">
          We utilize the power of data and develop technology to accomplish your
          rapid growth.
        </p>
      </div>
    </div>
  );
}

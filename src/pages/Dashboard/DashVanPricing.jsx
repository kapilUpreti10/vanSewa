import React from "react";
import { useOutletContext } from "react-router-dom";

const DashVanPricing = () => {
  const { van } = useOutletContext();

  return (
    <div className="p-6 bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg transform transition-transform duration-500 ease-in-out hover:scale-105">
        <h1 className="text-3xl font-bold mb-4">Van Pricing</h1>
        <div className="text-2xl font-semibold text-green-600 animate-pulse">
          Price: ${van.price}/day
        </div>
      </div>
    </div>
  );
};

export default DashVanPricing;

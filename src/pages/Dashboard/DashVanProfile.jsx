import React, { useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";

const DashVanProfile = () => {
  const { van } = useOutletContext();
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = van.imageUrl;
    link.download = `${van.name}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-6 bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg  hover:scale-105">
        <h1 className="text-3xl font-bold mb-4">Van Photo</h1>
        <div className="text-2xl font-semibold text-green-600 ">
          <img src={van.imageUrl} alt={van.name} />
        </div>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 "
          onClick={handleDownload}
        >
          Download Photo
        </button>
      </div>
    </div>
  );
};

export default DashVanProfile;

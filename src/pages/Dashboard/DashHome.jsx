import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const DashHome = () => {
  const [vans, setVans] = useState([]);

  const loadVans = async () => {
    try {
      const response = await axios.get("/api/api/vans/overview");
      // console.log(response.data.data.vans);
      setVans(response.data.data.vans);
    } catch (err) {
      console.log("error in fetching vans from the server");
    }
  };

  useEffect(() => {
    loadVans();
  }, []);

  return (
    <div className="p-4">
      <p className="text-2xl font-semibold mb-4">List of all vans you booked</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {vans.map((van) => (
          <div
            key={van.id}
            className="flex flex-col bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 "
          >
            <div className="flex flex-col sm:flex-row gap-10">
              <div className="md:w-1/3 ">
                <img
                  src={van.imageUrl}
                  alt="image Loading.."
                  className="rounded-md w-full"
                />
              </div>
              <div className="flex flex-col gap-2 md:w-2/3">
                <p className="text-xl font-bold mb-2">{van.name}</p>
                <span className="w-[80px] mb-2 bg-green-500 text-white px-4 py-2 rounded-md ">
                  {van.type}
                </span>
                <p className="text-gray-900 font-semibold mb-4">${van.price}</p>
              </div>
            </div>
            <div className="mt-5">
              <NavLink to={`/dashboard/vans/${van.id}`}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
                  View details
                </button>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashHome;

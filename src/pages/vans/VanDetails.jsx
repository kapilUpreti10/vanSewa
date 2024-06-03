import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const VanDetails = () => {
  // const { van } = useOutletContext();

  const [van, setVan] = useState({});
  const { id } = useParams();

  const fetchVans = async () => {
    try {
      const response = await axios.get(`/api/api/vans/details/${id}`);
      setVan(response.data.data.van);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchVans();
  }, [id]);
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
          <img src={van.imageUrl} alt={van.name} className="w-full h-auto" />
        </div>
        <div className="w-full md:w-1/2 lg:w-2/3 px-4 mb-4">
          <div className="flex flex-col justify-between h-full">
            <div>
              <h1 className="text-3xl font-bold mb-4">{van.name}</h1>
              <button
                disabled
                className="mb-2 bg-green-500 text-white py-3 px-5 rounded md font-semibold"
              >
                {van.type}
              </button>
              <h2 className="text-xl font-semibold my-4">${van.price}</h2>
              <p className="mb-4">{van.description}</p>
            </div>
            <div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VanDetails;

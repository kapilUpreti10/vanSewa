import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DashVanPricing = () => {
  const { id } = useParams();
  const [van, setVan] = useState({});

  const fetchVans = async () => {
    try {
      const response = await axios.get(`/api/api/vans/details/${id}`);
      if (response.data.status === "success") {
        setVan(response.data.data.van);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchVans();
  }, [id]);

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

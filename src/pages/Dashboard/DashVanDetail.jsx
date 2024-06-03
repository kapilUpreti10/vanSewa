import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DashVanDetail = () => {
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
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-4">Van Details</h1>
        <div className="mb-4">
          <p className="text-xl font-semibold text-gray-700">ID: {van.id}</p>
        </div>
        <div className="mb-4">
          <p className="text-xl font-semibold text-gray-700">
            Name: {van.name}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-xl font-semibold text-gray-700">
            Type: {van.type}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-xl font-semibold text-gray-700">
            Description: {van.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashVanDetail;

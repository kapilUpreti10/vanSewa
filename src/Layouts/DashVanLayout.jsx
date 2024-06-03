import React, { useState, useEffect } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Outlet, Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const DashVanLayout = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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
    <>
      <div className="p-6 bg-gray-100 ">
        <div className="">
          <div
            className="flex items-center gap-2 cursor-pointer hover:underline text-blue-500"
            onClick={() => navigate("/dashboard")}
          >
            <IoMdArrowRoundBack size={24} />
            <p>Back to all vans</p>
          </div>
          <div className="flex flex-col lg:flex-row items-center my-6 bg-white p-6 rounded-lg shadow-md">
            <div className="w-full lg:w-1/3">
              <img
                src={van.imageUrl}
                alt={van.name}
                className="rounded-md w-full object-cover"
              />
            </div>
            <div className="w-full lg:w-2/3 lg:pl-6 mt-4 lg:mt-0">
              <p className="text-lg font-semibold text-gray-700">{van.type}</p>
              <h2 className="text-2xl font-bold text-gray-900">{van.name}</h2>
              <p className="text-xl font-semibold text-green-600">
                ${van.price}
              </p>
            </div>
          </div>
          <div className="my-6 bg-white p-4 rounded-lg shadow-md">
            <ul className="flex gap-8 justify-center text-lg font-medium text-gray-600">
              <li>
                <Link
                  to={`/dashboard/vans/${id}`}
                  className="hover:text-blue-500"
                >
                  Details
                </Link>
              </li>
              <li>
                <Link
                  to={`/dashboard/vans/${id}/pricing`}
                  className="hover:text-blue-500"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to={`/dashboard/vans/${id}/photo`}
                  className="hover:text-blue-500"
                >
                  Photos
                </Link>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg ">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashVanLayout;

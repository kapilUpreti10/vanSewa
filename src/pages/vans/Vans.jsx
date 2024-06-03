import React, { useState, useEffect } from "react";
import axios from "axios";
import Error from "../../components/Error";
import { Link, useSearchParams } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Vans = () => {
  const [vans, setVans] = useState([]);
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type")?.toLowerCase() || "";

  useEffect(() => {
    const fetchVans = async () => {
      try {
        const response = await axios.get("/api/api/vans/overview");
        if (response.data.status === "success") {
          setVans(response.data.data.vans);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchVans();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const setQueryParam = (e) => {
    if (e.key === "Enter") {
      setSearchParams(`?type=${search}`);
      setTimeout(() => {
        setSearch("");
      }, 500);
    }
  };
  console.log(search);
  console.log(searchParams.get("type"));

  const vanToDisplay = typeFilter
    ? vans.filter((van) => van.type.toLowerCase() === typeFilter)
    : vans;

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-center my-10">
        <div className="relative w-full sm:w-1/3">
          <input
            type="text"
            placeholder="Search van type here"
            value={search}
            onChange={handleSearch}
            onKeyDown={setQueryParam}
            className="w-full p-2 border rounded-md"
          />
          <FaSearch className="absolute right-3 top-3 text-gray-400" />
        </div>
      </div>
      {typeFilter && (
        <div className="flex items-center justify-center py-5">
          <Link className="hover:underline" to=".">
            {/* . bring to current url  */}
            Back to all vans
          </Link>
        </div>
      )}
      {vanToDisplay.length === 0 ? (
        <Error statusCode={`404`} message={`No data to display`} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {vanToDisplay.map((van) => (
            <div key={van.id} className="border rounded-lg p-4 shadow-md">
              <img
                src={van.imageUrl}
                alt={van.name}
                className="w-full object-cover mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{van.name}</h2>
              <p className="text-gray-700 mb-2">${van.price}</p>
              <Link to={`/vans/details/${van.id}`}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Vans;

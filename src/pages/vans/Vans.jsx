import React, { useState, useEffect } from "react";
import axios from "axios";
import Error from "../../components/Error";
import { Link, useSearchParams } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { GrPrevious, GrNext } from "react-icons/gr";

export const loader = () => {
  return <p>Loading data...</p>;
};

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

  useEffect(() => {
    function handleResize() {
      setPerPage(getItemsPerPage());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getItemsPerPage = () => {
    return window.innerWidth < 640 ? 4 : 6; // Adjust breakpoint and perPage as needed
  };

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

  const filteredVans = typeFilter
    ? vans.filter((van) => van.type.toLowerCase() === typeFilter)
    : vans;

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(getItemsPerPage());
  const indexOfLastVan = currentPage * perPage;
  const indexOfFirstVan = indexOfLastVan - perPage;
  const currentVans = filteredVans.slice(indexOfFirstVan, indexOfLastVan);
  const totalPages = Math.ceil(filteredVans.length / perPage);

  const handlePrevPage = () => {
    if (currentPage === 1) return;
    setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage === totalPages) return;
    setCurrentPage((prev) => prev + 1);
  };

  // sorting logic
  const [sortBy, setSortBy] = useState("");
  const [sortByExpanded, setSortByExpanded] = useState(false);
  const handleSortByToggle = () => {
    setSortByExpanded((prev) => !prev);
  };

  const handleSortBy = (criteria) => {
    setSortBy(criteria);
    switch (criteria) {
      case "lowToHigh":
        setVans([...vans].sort((a, b) => a.price - b.price));
        break;
      case "highToLow":
        setVans([...vans].sort((a, b) => b.price - a.price));
        break;
      default:
        setVans([...vans]);
        break;
    }
    setSortByExpanded(false); // Collapse the accordion after selection
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-center items-center my-10  gap-10">
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
      <div className="w-[80%] sm:w-[140px] pb-5 text-center mx-auto sm:mx-5">
        <div
          onClick={handleSortByToggle}
          className="cursor-pointer bg-gray-200 px-4 py-2 rounded-md border border-gray-300"
        >
          Sort by Price
        </div>
        {sortByExpanded && (
          <div className="absolute mt-2 w-40 bg-white shadow-md rounded-md border border-gray-300 ">
            <div
              onClick={() => handleSortBy("lowToHigh")}
              className="cursor-pointer px-4 py-2 hover:bg-gray-100"
            >
              Low to High
            </div>
            <div
              onClick={() => handleSortBy("highToLow")}
              className="cursor-pointer px-4 py-2 hover:bg-gray-100"
            >
              High to Low
            </div>
          </div>
        )}
      </div>

      {typeFilter && (
        <div className="flex items-center justify-center py-5">
          <Link className="hover:underline" to=".">
            Back to all vans
          </Link>
        </div>
      )}

      {currentVans.length === 0 ? (
        <Error statusCode="404" message="No data to display" />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {currentVans.map((van) => (
            <div key={van.id} className="border rounded-lg p-4 shadow-md">
              <img
                src={van.imageUrl}
                alt={van.name}
                className="w-full h-40 object-cover mb-4"
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

      {filteredVans.length > perPage && (
        <div className="flex gap-10 justify-center mt-10">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`${
              currentPage === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500"
            } text-white px-4 py-2 rounded-md`}
          >
            <GrPrevious />
          </button>
          <p>
            {currentPage} of {totalPages}
          </p>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`${
              currentPage === totalPages
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500"
            } text-white px-4 py-2 rounded-md`}
          >
            <GrNext />
          </button>
        </div>
      )}
    </div>
  );
};

export default Vans;

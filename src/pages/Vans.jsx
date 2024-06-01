import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Error from '../components/Error';
import { Link } from 'react-router-dom';

const Vans = () => {
  const [vans, setVans] = useState([]);

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
    }
    fetchVans();
  }, []);

  return (
    <div className="container mx-auto px-4">
      {vans.length === 0 ? (
        <Error statusCode={`404`} message={`No data to display`} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {vans.map((van) => (
            <div key={van.id} className="border rounded-lg p-4 shadow-md">
              <img src={van.imageUrl} alt={van.name} className="w-full object-cover mb-4"/>
              <h2 className="text-xl font-semibold mb-2">{van.name}</h2>
              <p className="text-gray-700 mb-2">${van.price}</p>
              <Link to={`/vans/${van.id}`}>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">View Details</button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Vans;

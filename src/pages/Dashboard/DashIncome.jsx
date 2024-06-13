import React, { useEffect, useState } from "react";
import axios from "axios";

function DashIncome() {
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
    };
    fetchVans();
  }, []);
  console.log("income vans is", vans);

  return (
    <div className="App">
      <h1>Vans List</h1>
      <ul>
        {vans.map((van) => (
          <li key={van.id}>
            <h2>{van.name}</h2>
            <img src={`/assets/${van.imageUrl}`} alt={van.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DashIncome;

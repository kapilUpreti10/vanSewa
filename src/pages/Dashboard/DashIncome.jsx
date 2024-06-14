import React, { useEffect, useState } from "react";
import axios from "axios";
import fetchVans from "../../utils/fetchVans";
import { useLoaderData } from "react-router-dom";

function DashIncome() {
  // const [vans, setVans] = useState([]);
  // if we use setVans, we will get an error because we are using useLoaderData to fetch data so it will be in infinite loop
  const vans = useLoaderData();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     // const data = await fetchVans();
  //     // setVans(data);
  //   };
  //   fetchData();
  // }, []);

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

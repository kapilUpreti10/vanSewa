import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Outlet, Link, useParams } from "react-router-dom";
const DashVanLayout = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <div className="flex flex-col justify-center ">
        <div className="flex items-center gap-2 hover:underline">
          <IoMdArrowRoundBack />
          <p>Back to all vans</p>
        </div>
        <div className="flex items-center">
          <div>
            <img src="" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p>type</p>
            <p>Van Name</p>
            <p>$60/day</p>
          </div>
        </div>
        <div>
          photo`
          <ul className="flex gap-10">
            <Link to={`/dashboard/vans/${id}`}>
              <li>Details</li>
            </Link>
            <Link to={`/dashboard/vans/${id}/pricing`}>
              <li>Pricing</li>
            </Link>
            <Link to={`/dashboard/vans/${id}/photo`}>
              <li>Photos</li>
            </Link>
          </ul>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashVanLayout;

import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const activeStyle = {
    color: "blue",
    fontWeight: "bold",
    textDecoration: "underline",
  };
  return (
    <div className="min-h-screen flex flex-col">
      <div className="sticky top-20 z-10 bg-[#f9f9f9]">
        <div className=" p-4 w-full mx-auto">
          <ul className="flex justify-center gap-10 ">
            <NavLink
              to="/dashboard/"
              style={({ isActive }) => (isActive ? activeStyle : null)}
              end
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to="/dashboard/income"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              <li>Income</li>
            </NavLink>
            <NavLink
              to="/dashboard/vans"
              style={({ isActive }) => (isActive ? activeStyle : null)}
              className="hover:text-blue-300"
            >
              <li>Vans</li>
            </NavLink>
            <NavLink
              to="/dashboard/review"
              style={({ isActive }) => (isActive ? activeStyle : null)}
              className="hover:text-blue-300"
            >
              <li>Review</li>
            </NavLink>
          </ul>
        </div>
      </div>
      <div className="flex-grow p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;

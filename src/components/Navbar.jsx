import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { useAuth } from "../utils/privateRoutes/AuthProvider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSideBar = () => {
    setIsOpen(!isOpen);
  };
  const activeStyle = {
    color: "red",
    fontWeight: "bold",
    textDecoration: "underline",
  };
  const { user } = useAuth();
  return (
    <nav className="bg-blue-900 shadow-lg sticky top-0 z-10 h-18">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <NavLink to="/" className="text-white">
              <span className="text-white text-xl font-semibold ml-2">
                Vans Life
              </span>
            </NavLink>
          </div>
          <div className="hidden md:flex">
            <ul className="flex items-center">
              <li>
                <NavLink
                  to="/"
                  style={({ isActive }) => (isActive ? activeStyle : null)}
                  end
                  className="text-gray-300 hover:text-white px-4 py-2"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  style={({ isActive }) => (isActive ? activeStyle : null)}
                  className="text-gray-300 hover:text-white px-4 py-2"
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  style={({ isActive }) => (isActive ? activeStyle : null)}
                  className="text-gray-300 hover:text-white px-4 py-2"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/vans"
                  className="text-gray-300 hover:text-white px-4 py-2"
                  style={({ isActive }) => (isActive ? activeStyle : null)}
                >
                  Vans
                </NavLink>
              </li>
              <li>
                {user ? (
                  <NavLink
                    to="/auth/logout"
                    className="text-white  px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600"
                  >
                    Logout
                  </NavLink>
                ) : (
                  <NavLink
                    to="/auth/signup"
                    className="text-white  px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600"
                  >
                    SignUp
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={handleSideBar}
            >
              <IoMdMenu size={24} />
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <ul className="flex flex-col items-center">
          <li>
            <NavLink
              to="/"
              className="text-gray-300 hover:text-white px-4 py-4"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className="text-gray-300 hover:text-white px-4 py-4"
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="text-gray-300 hover:text-white px-4 py-4"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/vans"
              className="text-gray-300 hover:text-white px-4 py-4"
            >
              Vans
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

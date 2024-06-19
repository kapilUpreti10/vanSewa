// src/components/Logout.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Cookies from "js-cookie";
import axios from "axios";

const Logout = () => {
  const [showModal, setShowModal] = useState(true);

  const confirmLogout = async () => {
    setShowModal(false);
    // Cookies.remove("jwt", { path: "/" });
    const response = await axios.post("/api/api/auth/user/logout", {});
    console.log(response);
    window.location.href = "/auth/login";
  };

  const cancelLogout = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full text-center">
            <h2 className="text-xl font-bold text-gray-700 mb-4">
              Confirm Logout
            </h2>
            <p className="text-gray-600 mb-6">Do you really want to logout?</p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={confirmLogout}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Yes, Logout
              </button>
              <button
                onClick={cancelLogout}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                <Link to="/">Cancel</Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logout;

import React from "react";
import { Link, useRouteError } from "react-router-dom";

const GlobalErr = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <h1 className="text-9xl font-extrabold text-gray-800">
        {error.status || 404}
      </h1>
      <h2 className="text-2xl font-semibold text-red-600 mt-4">
        {error.statusText || " Page Not Found"}
      </h2>
      <p className="text-lg text-gray-500 mt-2">
        {error.message ||
          "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."}
      </p>
      <Link
        to="/"
        className="mt-6 px-4 py-2 text-lg text-white bg-blue-500 hover:bg-blue-700 rounded transition duration-300"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default GlobalErr;

/* eslint-disable react/prop-types */
import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = ({statusCode,message}) => {
  // const error=useRouteError();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Error {statusCode}</h1>
      <p className="text-lg text-gray-700">{message}</p>
    </div>
  );
};

export default Error;

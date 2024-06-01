import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="sticky top-20 z-10 bg-white">
        <div className=" p-4 w-full mx-auto">
          <ul className="flex justify-center gap-10 ">
            <Link to="/dashboard/" className="hover:text-blue-300">
              <li>Home</li>
            </Link>
            <Link to="/dashboard/income" className="hover:text-blue-300">
              <li>Income</li>
            </Link>
            <Link to="/dashboard/review" className="hover:text-blue-300">
              <li>Review</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="flex-grow p-4">
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout

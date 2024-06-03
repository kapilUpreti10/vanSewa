import React from "react";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import Vans from "./pages/vans/Vans";
import AboutLayout from "./Layouts/AboutLayout";
import MainLayout from "./Layouts/MainLayout";
import DetailPage from "./pages/vans/VanDetails";
import DashHome from "./pages/Dashboard/DashHome";
import DashIncome from "./pages/Dashboard/DashIncome";
import DashReviews from "./pages/Dashboard/DashReview";
import DashVanDetail from "./pages/Dashboard/DashVanDetail";
import DashVanLayout from "./Layouts/DashVanLayout";
import DashVanProfile from "./pages/Dashboard/DashVanProfile";
import DashVanPricing from "./pages/Dashboard/DashVanPricing";
import DashboardLayout from "./Layouts/DashboardLayout";

const Router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    // errorElement:<Error/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
          {
            path: "",
            // index:true,
            element: <DashHome />,
          },
          {
            path: "income",
            element: <DashIncome />,
          },
          {
            path: "review",
            element: <DashReviews />,
          },
          {
            path: "vans/:id",
            element: <DashVanLayout />,
            children: [
              {
                path: "",
                element: <DashVanDetail />,
              },
              {
                path: "pricing",
                element: <DashVanPricing />,
              },
              {
                path: "photo",
                element: <DashVanProfile />,
              },
            ],
          },
        ],
      },
      {
        path: "/about",
        element: <AboutLayout />,
      },
      {
        path: "/vans",
        element: <Vans />,
      },
      {
        path: "/vans/details/:id",
        element: <DetailPage />,
      },
    ],
  },
]);

export default Router;

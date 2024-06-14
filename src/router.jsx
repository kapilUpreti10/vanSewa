import React from "react";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import Vans, { loader as vanPageLoader } from "./pages/vans/Vans";
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
import DashLayout from "./Layouts/DashLayout";

// utils
import Loader from "./utils/Loader";
import Error from "./utils/Error";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    // this errorElement handles any error that occurs in MainLayout component
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <DashLayout />,
        children: [
          {
            path: "",
            // index: true,
            element: <DashHome />,
          },
          {
            path: "income",
            element: <DashIncome />,
            loader: Loader,
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
        loader: vanPageLoader,
      },
      {
        path: "/vans/details/:id",
        element: <DetailPage />,
      },
      {
        path: "*",
        element: <Error statusCode={404} message="Page not found" />,
      },
    ],
  },
]);

export default Router;

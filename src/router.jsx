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

// auth pages
import LoginForm from "./pages/auth/Login";
import SignUpForm from "./pages/auth/SignUp";
import Logout from "./pages/auth/Logout";

// utils
import Loader from "./utils/Loader";
import Error from "./utils/Error";
import GlobalErr from "./utils/GlobalErr";

// private route
import ProtectRoute from "./utils/privateRoutes/ProtectRoute";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <GlobalErr />,
    // this errorElement handles any error that occurs in MainLayout component and its children
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: (
          <ProtectRoute errorElement={<GlobalErr />}>
            <DashLayout />
          </ProtectRoute>
        ),
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
            //errorElement: <GlobalErr />,
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
        path: "/auth",
        children: [
          {
            path: "signup",
            element: <SignUpForm />,
          },
          {
            path: "login",
            element: <LoginForm />,
          },
          {
            path: "logout",
            element: <Logout />,
          },
        ],
      },
      {
        path: "*",
        element: <Error statusCode={404} message="Page not found" />,
      },
    ],
  },
]);

export default Router;

import React from "react";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import Vans from "./pages/Vans";
import AboutLayout from "./Layouts/AboutLayout";
import MainLayout from "./Layouts/MainLayout";
import DetailPage from "./pages/VanDetails";
import Error from "./components/Error";
import DashboardLayout from "./Layouts/DashboardLayout";
import DashHome from "./pages/DashHome";
import DashIncome from "./pages/DashIncome";
import DashReviews from "./pages/DashReview";

const Router=createBrowserRouter([
    {
        path:"",
        element:<MainLayout/>,
       // errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Home/>,

            },
            {
              path:"/dashboard",
              element:<DashboardLayout/>,
              children:[
                {
                    path:"",
                    element:<DashHome/>
                },{
                    path:"income",
                    element:<DashIncome/>
                },{
                    path:"review",
                    element:<DashReviews/>

                }
              ]
            },
            {
                path:"/about",
                element:<AboutLayout/>
            },{
                path:"/vans",
                element:<Vans/>
            },{
                path:"/vans/details/:id",
                element:<DetailPage/>
            }

        ]
    }
])

export default Router;
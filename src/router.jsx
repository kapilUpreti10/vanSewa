import React from "react";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import Vans from "./pages/Vans";
import AboutLayout from "./Layouts/AboutLayout";
import DashBoardLayout from "./Layouts/DashBoardLayout";
import DetailPage from "./pages/VanDetails";

const Router=createBrowserRouter([
    {
        path:"",
        element:<DashBoardLayout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },{
                path:"/about",
                element:<AboutLayout/>
            },{
                path:"/vans",
                element:<Vans/>
            },{
                path:"/vans/:id",
                element:<DetailPage/>
            }

        ]
    }
])

export default Router;
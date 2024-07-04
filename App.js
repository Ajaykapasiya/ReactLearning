import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/Component/Body";
import Header from "./src/Component/Header";
import About from "./src/Component/About";
import RestaurantMenu from "./src/Component/RestaurantMenu";
import Contact from "./src/Component/Contact";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Outlet} from "react-router-dom";
import RestaurantCard from "./src/Component/RestaurantCard";
import {withProvider} from "@reduxjs/toolkit/src/tests/utils/helpers";

const AppLayout = () => {
    return (
        <div className="App">
            <Header/>

            <Outlet/>
        </div>

    );


};
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [

            {
                path: "/",
                element: <Body/>,
            },

            {
                path: "/About",
                element: <About/>,
            },
            {
                path: "/Contact",
                element: <Contact/>
            },
            {
                path: "/restaurants",
                element: <RestaurantMenu/>,
            },
        ]

    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>)







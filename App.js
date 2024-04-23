import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/Component/Body";
import Header from "./src/Component/Header";
import About from "./src/Component/About";
import {createBrowserRouter , RouterProvider } from "react-router-dom";


const AppLayout = () =>{
    return (
        <div className="App">
            <Header/>
            <Body/>

        </div>

    );


};
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
    },
    {
        path: "/About",
        element: <About/>,
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />)







import React from "react";
import ReactDOM from "react-dom/client";

import Body from "./src/Component/Body";
import Header from "./src/Component/Header";


const AppLayout = () =>{
    return (
        <div className="App">
            <Header/>
            <Body/>

        </div>

    );


};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)







import {LOGO_URL} from "../utils/constants";

import {useState} from "react";

const Header = () => {

    //let btnName = "Login"
    const [btnNameReact, setBtnNameReact] = useState("Login");

    return (<div className={"header"}>
        <div className={"logo-container"}>
            <img className={"logo"}
                 src="https://marketplace.canva.com/EAFYecj_1Sc/1/0/1600w/canva-cream-and-black-simple-elegant-catering-food-logo-2LPev1tJbrg.jpg"/>
        </div>
        <div className={"nav-item"}>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>contact</li>
                <li>Cart</li>
                <button
                    className="btn"
                    onClick={() => {
                        btnNameReact === "Login"
                            ? setBtnNameReact("Logout") :
                            setBtnNameReact("Login");

                    }}
                >
                    {btnNameReact} </button>

            </ul>
        </div>


    </div>)
}

export default Header;
import {useState, useEffect} from "react";

import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();

    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4785095&lng=77.515362&restaurantId=584332&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
        );
        const json = await data.json();
        console.log(json);
        setResInfo(json.data)
    };


    return resInfo === null ? (
        <Shimmer/>
    ) : (
        <div className="menu">
            <h1>{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
            <h1>Menu</h1>
            <ul>
                <li>Pizza</li>
                <li>birynai</li>
                <li>hfbhd</li>
            </ul>
        </div>
    )


};
export default RestaurantMenu;
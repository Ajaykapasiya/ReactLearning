import {useEffect, useState} from "react";

import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();

    }, []);

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4785095&lng=77.515362&restaurantId=639002&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER");
        const json = await data.json();
        console.log(json);
        setResInfo(json.data)
    };

    if (resInfo === null) return <Shimmer/>;


    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    console.log(itemCards);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(",")}</h2>
            <h2>{costForTwoMessage}</h2>
            <h3>Menu</h3>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.name.id}>
                        {item.card.info.name} => {"Rs"}-{item.card.info.price / 100}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default RestaurantMenu;
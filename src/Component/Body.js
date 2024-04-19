import RestaurantCard from "./RestaurantCard";
import {useEffect, useState} from "react";
// import resList from "../utils/MockData";

const Body = () => {

    const [ listOfRestaurants , setListOfRestaurant] = useState([]);

    useEffect(() => {
        console.log("render")
        fetchData();
    }, []);

    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.549754696396924&lng=77.36122253202448&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    };


    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                        onClick={() => {

                            const filteredList = listOfRestaurants.filter(
                                (res) => res.info.avgRating > 4
                            );


                            setListOfRestaurant(filteredList);
                        }}>
                    Top rated restaurants

                </button>
            </div>
            <div className="res-contianer">
                {listOfRestaurants.map((restaurant) => (<RestaurantCard key={restaurant.id} resData={restaurant}/>))}
            </div>
        </div>)


};

export default Body;

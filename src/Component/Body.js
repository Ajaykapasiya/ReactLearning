import RestaurantCard from "./RestaurantCard";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredrestaurants, setFilteredrestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        console.log("render")
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.549754696396924&lng=77.36122253202448&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredrestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    if (listOfRestaurants.length === 0) {
        return <Shimmer/>;
    }


    return <div className="body">
        <div className="filter">
            <div className="Search">
                <input type="text" className="Search-box" value={searchText}
                       onChange={(e) => {
                           setSearchText(e.target.value)
                       }}
                />
                <button
                    onClick={() => {
                        console.log(searchText);

                        const filteredRestaurants = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                        setFilteredrestaurants(filteredRestaurants);
                    }}
                >
                    Search
                </button>
            </div>

            <button className="filter-btn"
                    onClick={() => {

                        const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);


                        setListOfRestaurant(filteredList);
                    }}>
                Top rated restaurants

            </button>
        </div>
        <div className="res-contianer">
            {filteredrestaurants.map((restaurant) => (
                <Link
                    key={restaurant.id}
                    to={"/Restaurants/" + restaurant.id}
                >
                    <RestaurantCard resData={restaurant}/>
                </Link>
            ))}
        </div>
    </div>


};

export default Body;
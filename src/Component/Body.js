import RestaurantCard from "./RestaurantCard";
import {useState , useEffect} from "react";
import resList from "../utils/MockData";

const Body = () => {

    const [ listOfRestaurants , setListOfRestaurant] = useState(resList);

    useEffect(() => {
        console.log("render useEffect");
        fetchData();
    }, []);

const fetchData = async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.549754696396924&lng=77.36122253202448&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurant(json.data.cards[12].card.card);

};


    return (<div className="body">
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
            {listOfRestaurants.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))}

        </div>
    </div>)


};

export default Body;

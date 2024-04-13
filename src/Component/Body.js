import resList from "../utils/MockData";
import RestaurantCard from "./RestaurantCard";


const Body = () => {

    const listOfRestaurants = () => [{
        "info": {
            "id": "89563",
            "name": "UBQ by Barbeque Nation",
            "cloudinaryImageId": "eb282mtpbn1f2fnamwgs",
            "costForTwo": "₹300 for two",
            "cuisines": ["Barbecue", "Biryani", "Kebabs", "Mughlai", "Desserts"],
            "avgRating": 4,
            "deliveryTime": 30,
        }
    },

        {
            "id": "89563",
            "name": "UBQ by Barbeque Nation",
            "cloudinaryImageId": "eb282mtpbn1f2fnamwgs",
            "costForTwo": "₹300 for two",
            "cuisines": ["Barbecue", "Biryani", "Kebabs", "Mughlai", "Desserts"],
            "avgRating": 4.3,
            "deliveryTime": 30,
        },


    ];


    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                        onClick={() =>{
                            console.log("clicked");
                        }}

                >Top rated restaurant</button>
            </div>
            <div className="res-contianer">
                {resList.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    ))}

            </div>
        </div>
    );

};

export default Body;
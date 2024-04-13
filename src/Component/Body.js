import RestaurantCard from "./RestaurantCard";


const Body = () => {

    let listOfRestaurants = [
        {
        "info": {
            "id": "89563",
            "name": "UBQ by Barbeque Nation",
            "cloudinaryImageId": "eb282mtpbn1f2fnamwgs",
            "costForTwo": "₹300 for two",
            "cuisines": ["Barbecue", "Biryani", "Kebabs", "Mughlai", "Desserts"],
            "avgRating": 6,
            "deliveryTime": 30,
        },
    },

        {
            "info": {
                "id": "89562",
                "name": "UBQ by Barbeque Nation - 2 - new",
                "cloudinaryImageId": "eb282mtpbn1f2fnamwgs",
                "costForTwo": "₹300 for two",
                "cuisines": ["Barbecue", "Biryani", "Kebabs", "Mughlai", "Desserts"],
                "avgRating": 4.3,
                "deliveryTime": 30
            }
        },


    ];

    return (<div className="body">
        <div className="filter">
            <button className="filter-btn"
                    onClick={() => {

                        listOfRestaurants = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4);


                        console.log(listOfRestaurants);
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

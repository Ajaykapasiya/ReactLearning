const RestaurantCard = (props) => {
    const {resData} = props;

    return (
        <div className="res-card">
            {resData && resData.info &&
                <>
                    <img className="res-logo"
                         src={
                             "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                             resData.info.cloudinaryImageId
                         }/>

                    <h3>{resData.info.name}</h3>
                    <h4>{resData.info.cuisines.join(", ")}</h4>
                    <h4>{resData.info.avgRating}</h4>
                    <h4>{resData.info.costForTwo}</h4>
                    <h4>{resData.info.deliveryTime} minutes</h4>
                </>}

        </div>

    );

     return (
         <div className="res-card">
             {resData && resData.info &&
                 <>
                     <img className="res-logo"
                          src={
                              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                              resData.info.cloudinaryImageId
                          }/>

                     <h3>{resData.info.name}</h3>
                     <h4>{resData.info.cuisines.join(", ")}</h4>
                     <h4>{resData.info.avgRating}</h4>
                     <h4>{resData.info.costForTwo}</h4>
                     <h4>{resData.info.deliveryTime} minutes</h4>
                 </>}

         </div>

     );
};

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label>Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;
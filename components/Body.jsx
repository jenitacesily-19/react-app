import { useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import ResList from "../utils/mockData";
// let  listRes=[
//     {
//         "info": {
//             "id": "158942",
//             "name": "Hotel Burma Kadai",
//             "cloudinaryImageId": "gxqbhxrt0unppikd8ll5",
//             "locality": "Municipal Office Road",
//             "areaName": "Fathimanagar",
//             "costForTwo": "500 For Two ",
//             "cuisines": [
//                 "Chinese",
//                 "South Indian",
//                 "Biryani"
//             ],
//             "avgRating": 4.4,
//             "sla": {
//                 "deliveryTime": 29,
//             }
//   },
//   },
//    {
//         "info": {
//             "id": "158943",
//             "name": "Hotel Kamaliya",
//             "cloudinaryImageId": "ylwkvwa2vzdbrtdynrcg",
//             "locality": "Municipal Office Road",
//             "areaName": "New Bus Stand",
//             "costForTwo": "500 For Two ",
//             "cuisines": [
//                 "Chinese",
//                 "South Indian",
//                 "Biryani"
//             ],
//             "avgRating": 4.8,
//             "sla": {
//                 "deliveryTime": 29,
//             }
// },
// },
// {
//         "info": {
//             "id": "158944",
//             "name": "Hotel Aasife",
//             "cloudinaryImageId": "90012597629321295211c3881c8bb0af",
//             "locality": "Krishnamachari Rd",
//             "areaName": "New Bus Stand",
//             "costForTwo": "500 For Two ",
//             "cuisines": [
//                "Biryani",
//                 "Indian",
//                 "Grill"
//             ],
//             "avgRating": 4.9,
//             "sla": {
//                 "deliveryTime": 29,
//             }
// },
// },
    
    
// ]
const Body = () => {
    const [listRes, setListRes]=useState([]);
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="filter">
                <button className="filter-btn"
                onClick={() =>{
                   const filteredListRes=listRes.filter(
                        (res) =>res.info.avgRating > 4
                    );
                    setListRes(filteredListRes);
                }}>
                    Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {ResList.map((restaurant, index) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};
export default Body;
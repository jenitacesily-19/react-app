import { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import Shimmer from "./Shimmer";
const Body = () => {
    const [listRes, setListRes]= useState([]);
    const [filteredRestaurant, setfilteredRestaurant] =useState([]);
    const [searchText, setSearchText]= useState();
    console.log("Body render");
    useEffect(()=>{
       fetchData();
    },[]);
    const fetchData=async() =>{
        const data=await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.4217809&lng=77.8367282&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING%22);");
        const json= await data.json();
        console.log(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])
        setListRes(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
        setfilteredRestaurant(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
    };
    return listRes.length === 0 ?(
        <Shimmer />
    ): (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input 
                    type="text" 
                    className="search-box"
                     vlaue={searchText}
                     onChange={(e) =>{
                        setSearchText(e.target.value);
                     }}
                     />
                    <button onClick={()=>{
                        console.log(searchText);
                        const filteredRestaurant=listRes.filter((res) =>
                        res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setfilteredRestaurant(filteredRestaurant);
                    }}
                    >
                    Search
                    </button>
                </div>
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
            </div>
            <div className="res-container">
                {/* {Array.isArray(listRes) &&  */
                filteredRestaurant.map((restaurants) => (
                    <RestaurantCard key={restaurants.info.id} resData={restaurants} />
                ))}
            </div>     
    </div>
    );
};
export default Body;
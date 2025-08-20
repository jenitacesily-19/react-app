import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
    const [listRes, setListRes] = useState([]);
    const [filteredRestaurant, setfilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState();
    console.log("Body render", listRes);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.4217809&lng=77.8367282&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING%22");
        const json = await data.json();
        console.log(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])
        setListRes(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
        setfilteredRestaurant(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
    };
    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false)
        return (
            <h1>Look Like You're Offline!!..Please Check Your Internet Connection;
            </h1>
        );
    return listRes.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4 ">
                    <input
                        type="text"
                        className="border border-s-black "
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button className=" bg-orange-500 px-4  text-white
                          hover:bg-orange-600 transitionpy-1 m-4 rounded-lg"
                        onClick={() => {
                            console.log(searchText);
                            const filteredRestaurant = listRes.filter((res) =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setfilteredRestaurant(filteredRestaurant);
                        }}
                    >
                        Search
                    </button>
                </div>
                <div className="filter m-4 p-2 flex items-center">
                    <button className=" bg-orange-500  text-white hover:bg-orange-600 transition px-2 py-1 m-4 rounded-lg"
                        onClick={() => {
                            const filteredListRes = listRes.filter(
                                (res) => res.info.avgRating < 4.5
                            );
                            setfilteredRestaurant(filteredListRes);
                        }}>
                        Top Rated Restaurant</button>
                </div>
            </div>
            <div className="flex flex-wrap ">
                {/* {Array.isArray(listRes) &&  */
                    filteredRestaurant.map((restaurants) => (
                        <Link
                            key={restaurants.info.id}
                            to={"/restaurants/" + restaurants.info.id}>
                            <RestaurantCard resData={restaurants} />
                        </Link>
                    ))}
            </div>
        </div>
    );
};
export default Body;
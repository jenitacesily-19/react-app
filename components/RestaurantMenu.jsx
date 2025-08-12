import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu=() =>{
    const [resInfo, setResInfo]= useState(null);
    useEffect(() =>{
        fetchMenu();
    }, []);
    const fetchMenu= async () =>{
            const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.4217809&lng=77.8367282&restaurantId=961627&catalog_qa=undefined&submitAction=ENTER");
            const json=await data.json();
            console.log(json);
            setResInfo(json.data);
    };
   const { 
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    costForTwo,
    } = resInfo?.cards?.[2]?.card?.card?.info || [];

    return resInfo === null ? (
        <Shimmer />
    ):(
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines}</h3>
            <h3>{costForTwo}</h3>
            <h2>Menu</h2>
            <ul>
                <li>Briyani</li>
                <li>Burgers</li>
                <li>Deserts</li>
            </ul>
        </div>
    );
};
export default RestaurantMenu;
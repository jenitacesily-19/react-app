
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResCategories from "./ResCategories";
const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const {
        name,
        cloudinaryImageId,
        cuisines,
        avgRating,
        costForTwo,
    } = resInfo?.cards?.[2]?.card?.card?.info || {};
    const { itemCards } = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card || {};
    //console.log(resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) =>
        c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    //console.log(categories);
    if (resInfo === null)

        <Shimmer />
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines} -{costForTwo / 100} For Two</p>
            {Array.isArray(categories) && categories.map((category) => (
                <ResCategories key={category?.card?.card?.title} data={category?.card?.card} />
            ))}
        </div>
    );
};
export default RestaurantMenu;
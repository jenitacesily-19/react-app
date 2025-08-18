import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    const { resData } = props;
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
    } = resData?.info;

    const {
        deliveryTime,
    } = resData?.info.sla;
    return (
        <div className="res-card m-4 p-4 w-fit rounded-lg hover:bg-black hover:scale-105 transition duration-300 shadow-lg" style={{ backgroundColor: "white" }}>
            <img className="rounded-lg"
                alt="res-logo"
                src={CDN_URL + cloudinaryImageId}
                style={{
                    width: "350px",
                    height: "300px",
                }}
            />
            <div className="card-details">
                <h3 className="font-bold py-4 text-lg">{name}</h3>
                <h4>{cuisines.join(", ")}
                </h4>
                <h4>{avgRating}</h4>
                <h4>{costForTwo}</h4>
                <h4>{deliveryTime} mintues</h4>
            </div>

        </div>

    );
};
export default RestaurantCard;
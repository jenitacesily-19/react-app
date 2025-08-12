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
        <div className="res-card" style={{ backgroundColor: "white", width: "fit-content" }}>
            <img className="res-log"
                alt="res-logo"
                src={ CDN_URL + cloudinaryImageId}
                style={{
                    width: "400px",
                    height: "400px",
                    borderRadius: "10%",
                    padding: "5px",
                    margin: "10px",
                }}
            />
            <div className="card-details">
                <h3>{name}</h3>
                <h4>{cuisines.join(" , ")}</h4>
                <h4>{avgRating}</h4>
                <h4>{costForTwo}</h4>
                <h4>{deliveryTime} mintues</h4>
            </div>

        </div>

    );
};
export default RestaurantCard;
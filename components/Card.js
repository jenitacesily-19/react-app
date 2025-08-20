import { CART_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Card = () => {
    return (
        <div className='bg-gray-50 p-6 felx flex-col justify-content-center items-center'>
            <div className='bg-white shadow-lg rounded-2xl p-10 w-full h-200'>
                <h2 className='text-2xl font-bold text-orange-600 text-center mb-6'>Your Cart is Empty</h2>
                <h3 className='text-xl font-semibold text-orange-500 text-center mb-2'>You can go to home page to view more restaurants</h3>
                <img className='w-100 ml-170' src={CART_URL} />
                <div className='w-50 bg-orange-500 text-white py-3 rounded-xl
        hover:bg-orange-600 transition ml-195 text-center'>
                    <Link to="/body">See All RestaurantMenu</Link>
                </div>
            </div>
        </div>

    )
}
export default Card;

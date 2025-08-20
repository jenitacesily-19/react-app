import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
    //let btnName="Login";
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between bg-white shadow-lg">
            <div className="flex flex-cols  ">
                <img className="w-35" src={LOGO_URL} />
                {/* <p className="w-5 p-5 mr-5 font-bold ">esty</p> */}
            </div>
            <div className="flex items-center">
                <ul className="flex p-10 m-5 ">
                    <li className="px-4">Online Status:{onlineStatus ? "✅" : "🔴"}</li>
                    <li className="px-4">
                        <Link to="/body">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/here">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/login">Login</Link>
                    </li>
                    {/* <button className=" px-4"
                        onClick={() => {
                            btnName === "Login"
                                ? setBtnName("Logout")
                                : setBtnName("Login");
                        }}

                    >
                        {btnName}
                    </button> */}
                </ul>
            </div>
        </div>
    );
};
export default Header;
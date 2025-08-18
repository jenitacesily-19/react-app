import { useEffect, useState } from "react";
const User=(props) =>{
    const [count, setCount] = useState(0);
    useEffect(() =>{
        //Api call
        //console.log("useEffect");
    });
    return(
        <div className="user-card">
            <h2>Name: {props.name}</h2>
            <h3>Count:{count}</h3>
            <buuton onClick={() =>{
                setCount(1);
            }}
            >Count</buuton>
        </div>
    );
}
export default User;
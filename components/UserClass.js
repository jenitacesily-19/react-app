import React from "react";
import { json } from "react-router";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state={
            useInfo:{
                login:"Dummy",
                id:"Default",
                avatar_url:"dummy-photo.png"
            }
        };
        console.log(this.props.name +"Child Constructor");
    }
    async componentDidMount(){
        console.log(this.props.name +"Child Component Did  Mount");
        //Apin Call
        const data=await fetch("https://api.github.com/users/jenitacesily-19");
        const json=await data.json();
        console.log(json);
        this.setState({
            useInfo:json,
        });
        console.log(this.props.name +"Child Component Did  Mount");
    }
     componentDidUpdate(prevProps, prevState){
        if(this.state.count !== prevState.count)
        {
            //
        }
        if(this.state.count !== prevState.count)
        {
            //
        }
        //console.log("Component Did Update");
    }
    componentWillUnmount(){
        console.log("Component Will Unmount");
    }

render(){
    const {login, id, avatar_url}= this.state.useInfo;
    //console.log(this.props.name +"Child Render");
    return(
        <div className="user-card">
            <img src={avatar_url} />
            <h2>Name: {login}</h2>
            <h3>Location: {id}</h3>
            <h4>Contact: jenicesily@gmail.com</h4>
        </div>
    );
}
};
export default UserClass;
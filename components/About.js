import User from "./User";
import UserClass from "./UserClass";
import { Component} from "react";
class About extends Component{
  constructor(props){
        super(props);
        console.log("Parent Constructor");
  };
   componentDidMount(){
        console.log("Parent Component Did Mount");
  };
  render(){
    console.log("Parent Render");
    return(
      <div className="about-container">
        <h1>About Class Component</h1>
        <h2>This is React Learning</h2>
        <UserClass name={"First(class)"}/>
        
    </div>
    );
  }

};
export default About;
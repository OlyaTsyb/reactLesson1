import React, {Component} from "react";
import AllPosts from "./component/AllPosts";

class App extends Component{


render(){
console.log("render");
    return(
        <div>
            <AllPosts/>
        </div>
        );
    }
}





export default App;

import React,{Component} from "react";
import "./Ball.css"
class Ball extends Component{
    render(){
        return(
            <div className="ball" ><h1>{this.props.value}</h1></div>
        )
    }
}

export default Ball;
import React,{Component} from "react";
import Ball from "./Ball";
import "./Lottery.css"


class Lottery extends Component{

    static defaultProps ={
        numberOfBalls : 5,
        maxValue : 40,
        title : "Lottery",
        }

    constructor(props){
        super(props);
      this.state = {
        nums : Array(this.props.numberOfBalls).fill(this.props.maxValue)
      }
        this.randomizer = this.randomizer.bind(this);
    }

    randomizer (){
        let array = [];

        for(let i = 0; i < this.props.numberOfBalls;i++){
            let random = Math.floor(Math.random()*this.props.maxValue);
            array.push(random);
        }

        this.setState({nums:array})
    }


    render(){
        return(
           <div className="total">
             <div className="lottery-container" >
                <h1>{this.props.title}</h1>
                <div className="ball-container" >

                {[...this.state.nums].map(x=> x= 
                
                    <Ball
                     
                     value = {x}
                     />
                    )
                }
                    
                    
                </div>
                <button onClick={this.randomizer} >Regenerate</button>
            </div>
            
           </div>

        )
    }
}

export default Lottery;
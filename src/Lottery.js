import React,{Component} from "react";
import Ball from "./Ball";
import "./Lottery.css"
class Lottery extends Component{
    constructor(props){
        super(props);
        this.state={
            numberOfBalls : 5,
            maxValue : 40,
            title : "Lottery",
            nums : Array(5).fill(40)
        }
        this.randomizer = this.randomizer.bind(this);
    }

    randomizer (){
        let array = [];
        for(let i = 0; i < this.state.numberOfBalls;i++){
            let random = Math.floor(Math.random()*this.state.maxValue);
            array.push(random);
        }

        this.setState({nums:array})
    }


    render(){
        return(
           <div className="total">
             <div className="lottery-container" >
                <h1>{this.state.title}</h1>
                <div className="ball-container" >

                {[...this.state.nums].map(x=> x= 
                
                    <Ball
                     number = {this.state.numberOfBalls}
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
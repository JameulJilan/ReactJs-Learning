import { Component } from "react";

export default class State extends Component{
    constructor(){
        super();
        this.state={
            data:0
        }
    }
    addNumber(){
        this.setState({data:this.state.data+1});
    }
    subNumber(){
        this.setState({data:this.state.data-1});
    }
    render(){
        return(
            <div>
                <h1>{this.state.data}</h1>
                <button onClick={()=>this.addNumber()}>+</button>
                <button onClick={()=>this.subNumber()}>-</button>
            </div>
        );
    }
}
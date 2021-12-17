import { useState } from "react";

function State(){
    let [data,setState]=useState(0);
   function addNumber(){
       setState(data+1);
    }
    function subNumber(){
        setState(data-1);
    }
    return (
        <div>
            <h1>{data}</h1>
            <button onClick={addNumber}>+</button>
            <button onClick={subNumber}>-</button>
        </div>
    );
}
export default State;
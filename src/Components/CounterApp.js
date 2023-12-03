
import React,{useState} from "react";
import { FaPlusCircle,FaMinusCircle } from "react-icons/fa";
import { MdLockReset } from "react-icons/md";


const CounterApp = () => {
  
    let [x, setX] = useState(0)  


    function increase(){
          setX(x+1)
    }



    return(
        <div>
            <h1>{x}</h1>
            <button onClick={increase}> <FaPlusCircle className="icons" /> </button>
            <button onClick={()=>setX(x-1)}> <FaMinusCircle className="icons"/> </button>
            <button onClick={()=>setX(0)}> <MdLockReset className="icons"/> </button>
        </div>
    )
}


export default CounterApp;
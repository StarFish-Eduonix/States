
import React, {useState} from "react"


const Objects = () => {

    let [count, setCount] = useState({gold:0, silver:0, bronze:0}) 

    console.log(count) // {gold:0, silver:0, bronze:0} => 1

    function increaseGold(){
        // setCount(count.gold+1) // update => replace
        setCount({...count, gold:count.gold+1})
    }

    return(
        <div>
            <h1> Gold: {count.gold}, Silver: {count.silver}, Bronze: {count.bronze}</h1>
            <button onClick={increaseGold}> Gold </button>

            <button onClick={()=>setCount({...count, silver: count.silver+1})}> Silver</button>

            <button onClick={
                function(){
                   setCount({...count, bronze: count.bronze+1})
                }
            }> Bronze</button>
        </div>
    )
}

export default Objects;
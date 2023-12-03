

// useState() => special function  => hook

import React, {useState} from "react"

console.log("Outside the component")
let x = 100

const Basics = () => {
     console.log("Inside the component  1")

    let [a, fun1] = useState(0) // a = 0, a=>1

     function increaseA(){
         fun1(a+1) // fun1(1)
     }


    // let x = 100

     function increaseX(){
        
         x = x+1
         console.log("Value of x=",x)
     }
     console.log("Value of x=",x) // 101

     console.log("Inside the component  2")

    return(
        <div>
            <h1>Value of a={a}</h1>
            <button onClick={increaseA}> IncreaseA </button>


            <h1>Value of x={x}</h1>
            <button onClick={increaseX}> IncreaseX </button>
        </div>
    )
}

export default Basics;
import React,{useState} from "react"; 



const FormBasics = () => {

   let [name, setName] = useState("") //ab

    function update(event){
           console.log(event.target.value) //ab
            setName(event.target.value)
    }



    return(
        <div>
            <form>
                <input type="text" placeholder="Enter your name" 
                 onChange={update}
                />
            </form>

            <p> {name} </p>
        </div>
    )
}

export default FormBasics;
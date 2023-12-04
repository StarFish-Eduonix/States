import React,{useState} from "react"; 

const FormBasics = () => {
   const [name,setName] = useState(""); // h
   const [btnClick, setBtnClick] = useState("");

   console.log("Name is ",name);


   function implementSubmit(event){
        event.preventDefault() // explore
        setBtnClick(name);
        setName("")
   }
   
    return(
        <div>
            <form onSubmit={implementSubmit}>

                <input type="text" placeholder="Enter your name" 
                 onChange={e => {
                    setName(e.target.value)
                    setBtnClick("")
                }}
                 value = {name}
                />

                <button type="submit"> Submit </button>
            </form>

            <h1> {btnClick} </h1>
        </div>
    )
}

export default FormBasics;


// controlled component 

// uncontrolled component
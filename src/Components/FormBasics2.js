import React,{useState} from "react"; 

const FormBasics = () => {
   const [name,setName] = useState("");
   const [btnClick, setBtnClick] = useState(false);


   function implementSubmit(event){
    event.preventDefault() // explore
    setBtnClick(true);
   }
   
    return(
        <div>
            <form onSubmit={implementSubmit}>
                <input type="text" placeholder="Enter your name" 
                 onChange={e => setName(e.target.value)}
                />
                <button type="submit"> Submit </button>
            </form>

            {
                btnClick==true? <p>{name}</p> : ""
            }
        </div>
    )
}

export default FormBasics;
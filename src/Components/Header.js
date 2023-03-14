import React, { useState } from "react";
import Tasks from "./Tasks";

let Header = () =>{
    const [text, setText] = useState("");
    const [task, setTask] = useState("");

    let Click = (e) =>{
        e.preventDefault()
      let task = e.target.value
      console.log(text)
     
    }
    return (
        <div>
            <form>
                <input type="text" value={text}  placeholder='task' onChange={(e)=>setText(e.target.value)} />
                <input type="submit" onClick={Click} />
            </form>
           
            <Tasks text={text} />
           
        </div>
    );


}


export default Header;
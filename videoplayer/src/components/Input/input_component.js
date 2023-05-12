import React from "react";
import "./input_style.css";
const InputComponent=({value,change})=>{
    return <input type="text" value={value} onChange={change}/>
}

export default InputComponent;
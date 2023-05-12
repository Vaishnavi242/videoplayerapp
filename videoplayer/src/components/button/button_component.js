import React from "react";
import "./button_style.css"
const ButtonComponent=({btn,method})=>{
    return <button onClick={method}>{btn}</button>
}

export default ButtonComponent;
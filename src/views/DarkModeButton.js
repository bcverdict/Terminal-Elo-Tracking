import {Button} from "reactstrap";
import React from "react";

export default function DarkModeButton(props) {

    const buttonStyle = {
        color: props.darkMode ? "white" : "black",
        backgroundColor: props.darkMode ? "#545b62" : "#AFAFAF",
        borderColor: props.darkMode ? "#545b62" : "#AFAFAF",
    }

    return (
        <div className="darkModeContainer">
            <Button style={buttonStyle} onClick={()=>{props.setDarkMode(!props.darkMode)}}>{props.darkMode ? "Light Mode" : "Dark Mode"}</Button>
        </div>
    );
}
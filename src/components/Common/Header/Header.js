import React from "react";
import{Link} from "react-router-dom";

import "./styles.css";
import TemporaryDrawer from "./drawer";
import Button from "../Button";
import DarkMode from "../DarkMode";


function Header() {
    return (
        <div className="navbar">
            <h1 className="logo">
               Chart Data<span style={{ color: "red" }}>.</span>
            </h1>
            <div className="links">
                <DarkMode/>
                <Link to="/"><p className="link">Home</p></Link>
                <Link to="/Dashboard"><Button text={"Dashboard"} 
                outlined={false}
                onClick={()=>console.log("btn clicked")}/>
                </Link>
            </div>
            <div className="mobile-drawer">
                <TemporaryDrawer/>
            </div>
        </div>
    )
}

export default Header;
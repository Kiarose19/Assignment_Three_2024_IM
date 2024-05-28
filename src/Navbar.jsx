import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar() {
    return(
        <div className="navbar">
            <div className="links">
        <ul>
            <li><Link to= {"/"}><b>HOME</b></Link></li>
            <li><Link to= {"/design"}><b>DESIGN</b></Link></li>
            <li><Link to= {"/theory"}><b>THEORY</b></Link></li>
            <li><Link to= {"/art"}><b>ART</b></Link></li>
        </ul>
        </div>
        </div>
    )
}

export default Navbar;
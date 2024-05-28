import React from "react";
import "./art.css";
import Flag1 from "./image/Flag1.png";

function Art() {
    return(
        <div className="art">
            <h1>.</h1>

            <div className="singapore">
               <h2>SINGAPORE CIRCUIT</h2>
            </div>

            <span className="flag">
             <img src= {Flag1} alt="Flag border" />
            </span>


            <span className="flag1">
             <img src= {Flag1} alt="Flag Border" />
            </span>

            <div className="sing"> 
            <h3>The Internet Artwork Description</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
            <p>Eius architecto cum quaerat fuga vel ab voluptas et dolor sapiente recusandae totam deserunt incidunt doloribus</p>
            <p>beatae labore consequatur possimus, itaque dicta?</p>
            </div>

        </div>


    )
}

export default Art;
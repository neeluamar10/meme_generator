import React from "react";

export default function Navbar(){

    return(
        <nav className="nav">
            <img className="nav--logo" src="./images/troll-face.png" alt="" />
            <h1 className="nav--title">Meme Generator</h1>
            <h4 className="nav--content">React Course - Project 3</h4>
        </nav>
    )
}
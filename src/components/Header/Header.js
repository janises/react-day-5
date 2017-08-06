import React from "react";
import "./Header.css";
import pokeball from "./pokeballs.png";
import {Link} from "react-router-dom";


export default function Header() {
    return (
        <div className="App-header"> 
            <img src={pokeball} className="pokeball" alt="pokeball"/>
            <h2>Welcome to the PokeDex</h2>
            <ul className="nav">
                <Link to="/arena">
                    <li>Arena</li>
                </Link>
                <Link to="/wordnik">               
                    <li>Wordnik</li>
                </Link>
            </ul>
        </div>
    )
}
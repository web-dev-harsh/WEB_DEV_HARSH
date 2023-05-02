import React from 'react'
import { NavLink } from "react-router-dom";
const ico = require("../images/icon.png")


function Navbar() {
  return (
    <>
        <div id="header">
            <div id="icon">
                <img src={ico} alt="icon" />
            </div>

            <div className="navs">
                <ul className="navbar">
                    <li className="nav" ><NavLink to="/"         className="nav-link">Home    </NavLink></li>
                    <li className="nav" ><NavLink to="/projects" className="nav-link">Projects</NavLink></li>
                    <li className="nav" ><NavLink to="/about"    className="nav-link">About   </NavLink></li>
                    <li className="nav" ><NavLink to="/contact"  className="nav-link">Contact </NavLink></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
import { Images } from "../Image";



export const SideBar = () => {
  return (
    <>
      <header>
        <div  className="userName">
          <img src={Images.im1} className="img_1" alt="shaik" />
          <div className="box_name">
            <h3>shaik mohammed</h3>
            <p>frontEnd Developer</p>
          </div>
        </div>

        <nav className="Navbar">
        <ul>
          <li><Link to="/" className="nav_link">Home</Link></li>
          <li><Link to="/Service" className="nav_link">Service</Link></li>
          <li><Link to="/About" className="nav_link">About</Link></li>
          <li><Link to="/Eduction" className="nav_link">Education</Link></li>
          <li><Link to="/Contact" className="nav_link">Contact</Link></li>
        </ul>
      </nav>
      </header>
   
    </>
  );
};

import React from "react";
import planeIcon from "./plane-icon.png";
import "./TitleBar.css";

const TitleBar = () => {
  return (
    <div>
      <nav className="container-fluid navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src={planeIcon} width="30" height="30" className="planeIcon d-inline-block align-top" alt=""></img>
          Airline Seating Reservation System
        </a>

        <a class="nav-link" href="/">Home</a>
      </nav>
    </div>
  );
}

export default TitleBar
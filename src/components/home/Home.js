import React from "react";
import "./Home.css";
import planeIcon from './plane-icon.png';

const Home = () => {
    return (
        <div>
            <body>
            <nav className="container-fluid navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img src={planeIcon} width="30" height="30" className="planeIcon d-inline-block align-top" alt=""></img>
                    Airline Seating Reservation System
                </a>
            </nav>
            <div className="button"><button type="button" className="btn btn-primary btn-block">Search Flights</button></div>
            <div className="button"><button type="button" className="btn btn-primary btn-block">Add Flights</button></div>
            <div className="button"><button type="button" className="btn btn-primary btn-block">Search Passengers</button></div>
            <div className="button"><button type="button" className="btn btn-primary btn-block">Add Passengers</button></div>
            </body>
        </div>
    )
}

export default Home
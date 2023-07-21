import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import TitleBar from "../titleBar/TitleBar";

const Home = () => {
    return (
        <div>
            <TitleBar/>
            <div id="home-options" className="bg-light shadow-sm">
                <Link to="/search-flights"><div className="button"><button type="button" className="home-option-button btn btn-primary">Search Flights</button></div></Link>
                <Link to="/add-flight"><div className="button"><button type="button" className="home-option-button btn btn-primary">Add Flight</button></div></Link>
                <Link to="/search-passengers"><div className="button"><button type="button" className="home-option-button btn btn-primary">Search Passengers</button></div></Link>
                <Link to="/add-passenger"><div className="button"><button type="button" className="home-option-button btn btn-primary">Add Passenger</button></div></Link>
            </div>
        </div>
    )
}

export default Home
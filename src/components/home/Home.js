import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import TitleBar from "../titleBar/TitleBar";

const Home = () => {
    return (
        <div>
            <TitleBar/>
            <div id="home-options" className="bg-light">
                <Link to="/search-flights"><div className="button"><button type="button" className="btn btn-primary btn-block">Search Flights</button></div></Link>
                <Link to="/add-flight"><div className="button"><button type="button" className="btn btn-primary btn-block">Add Flight</button></div></Link>
                <Link to="/search-passengers"><div className="button"><button type="button" className="btn btn-primary btn-block">Search Passengers</button></div></Link>
                <Link to="/add-passenger"><div className="button"><button type="button" className="btn btn-primary btn-block">Add Passenger</button></div></Link>
            </div>
        </div>
    )
}

export default Home
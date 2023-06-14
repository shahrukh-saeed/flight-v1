import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import TitleBar from "../titleBar/TitleBar";

const Home = () => {
    return (
        <div>
            <TitleBar/>
            <Link to="/search-flights"><div className="button"><button type="button" className="btn btn-primary btn-block">Search Flights</button></div></Link>
            <Link to="/add-flight"><div className="button"><button type="button" className="btn btn-primary btn-block">Add Flight</button></div></Link>
            <div className="button"><button type="button" className="btn btn-primary btn-block">Search Passengers</button></div>
            <div className="button"><button type="button" className="btn btn-primary btn-block">Add Passengers</button></div>
        </div>
    )
}

export default Home
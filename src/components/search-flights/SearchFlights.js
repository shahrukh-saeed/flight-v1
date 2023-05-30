import React from "react";
import "./SearchFlights.css";
import TitleBar from "../titleBar/TitleBar";

const SearchFlights = ({ flights }) => {
    return (
        <div>
            <TitleBar/>
            <h1>Flights</h1>
            {flights && flights.map((flight) => (
                <div key={flight.flightNum} className="bg-light flightDetails">
                    <div>Flight Number: {flight.flightNum}</div>
                    <div>Model: {flight.model}</div>
                    <div>Max Seating Capacity: {flight.rows * flight.col}</div>
                </div>
            ))}
        </div>
    )
}

export default SearchFlights
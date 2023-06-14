import React from "react";
import "./SearchFlights.css";
import TitleBar from "../titleBar/TitleBar";


const SearchFlights = ({ flights, onViewSeatingPlan }) => {
    return (
        <div>
            <TitleBar/>
            <h1>Flights</h1>
            {flights && flights.map((flight) => (
                <div key={flight.flightNum} className="bg-light flightDetails">
                    <div>
                        <div>Flight Number: {flight.flightNum}</div>
                        <div>Model: {flight.model}</div>
                        <div>Max Seating Capacity: {flight.rows * flight.col}</div>
                    </div>

                    <button id="viewSeatsBtn" type="button" className="btn btn-primary btn-block" onClick={() => onViewSeatingPlan(flight)}>View Seating Plan</button>

                </div>
            ))}
        </div>
    )
}

export default SearchFlights
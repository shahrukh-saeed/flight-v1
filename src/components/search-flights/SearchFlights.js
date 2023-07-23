import React, { useState } from "react";
import "./SearchFlights.css";
import TitleBar from "../titleBar/TitleBar";


const SearchFlights = ({ flights, onViewSeatingPlan }) => {

    const [item, setItem] = useState('');

    const handleItem = (event) => {
        setItem(event.target.value);
    }

    return (
        <div>
            <TitleBar/>
            <h1>Flights</h1>
            <div id="search-box">
                <input placeholder="Search by Flight Number" className="form-control" type="text" value={item} onChange={handleItem}></input>
            </div>
            {flights && flights.filter((flight) => flight.flightNum.toLowerCase().includes(item.toLowerCase())).map((flight) => (
                <div key={flight.flightNum} className="bg-light flightDetails">
                    <div id="flight-info">
                        <div className="flight-item">Flight Number | {flight.flightNum}</div>
                        <div className="flight-item">Model | {flight.model}</div>
                        <div className="flight-item">Seating Capacity | {flight.rows * flight.col}</div>
                    </div>

                    <button id="viewSeatsBtn" type="button" className="btn btn-primary btn-block" onClick={() => onViewSeatingPlan(flight)}>View Seating Plan</button>

                </div>
            ))}
        </div>
    )
}

export default SearchFlights
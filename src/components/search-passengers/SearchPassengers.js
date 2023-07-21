import React from 'react';
import TitleBar from '../titleBar/TitleBar';
import "./SearchPassengers.css";

export default function SearchFlights({passengers}) {
    return(
        <div>
            <TitleBar/>
            <h1>Passengers</h1>
            {passengers && passengers.map((passenger) => (
                <div className="bg-light passengerDetails">
                    <div>
                        <div>Name: {passenger.name}</div>
                        <div>Flight Number: {passenger.flightNum}</div>
                        <div>Row: {passenger.row}</div>
                        <div>Col: {passenger.col}</div>
                    </div>

                </div>
            ))}
        </div>
    )
}
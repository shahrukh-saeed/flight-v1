import React, { useState } from 'react';
import TitleBar from '../titleBar/TitleBar';
import "./SearchPassengers.css";

export default function SearchFlights({passengers}) {

    const [item, setItem] = useState('');

    const handleItem = (event) => {
        setItem(event.target.value);
    }

    return(
        <div>
            <TitleBar/>
            <h1>Passengers</h1>
            <div id="search-box">
                <input placeholder="Search by Name" className="form-control" type="text" value={item} onChange={handleItem}></input>
            </div>
            {passengers && passengers.filter((passenger) => passenger.name.toLowerCase().includes(item.toLowerCase())).map((passenger) => (
                <div className="bg-light passengerDetails">
                    <div id="passenger-info">
                        <div className="passenger-item">Name | {passenger.name}</div>
                        <div className="passenger-item">Flight Number | {passenger.flightNum}</div>
                        <div className="passenger-item">Row | {passenger.row}</div>
                        <div className="passenger-item">Col | {passenger.col}</div>
                    </div>

                </div>
            ))}
        </div>
    )
}
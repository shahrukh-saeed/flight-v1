import React from "react";
import TitleBar from "../titleBar/TitleBar";
import "./FlightSeatingPlan.css";

const FlightSeatingPlan = ({ flight, passengers }) => {

    const seats = [];
    for (let i = 0; i < flight.rows; i++) {
        seats[i] = [];
        for (let j = 0; j < flight.col; j++) {
            seats[i][j] = "O";
        }
    }

    for (let k = 0; k < passengers.length; k++) {
        if (passengers[k].flightNum == flight.flightNum) {
            seats[passengers[k].row][passengers[k].col] = "X";
        }
    }

    return (
        <div>
            <div>
                <TitleBar />
                <h1>Flight Seating Plan</h1>
                <div>Flight Number | {flight.flightNum}</div>
                <div>Model | {flight.model}</div>
                <div className="seats">
                {seats.map((row, i) => (
                    <div key={i}>
                        {row.map((seat, j) => (
                            <span className={seat} key={j}>{seat}</span>
                        ))}
                    </div>
                ))}
                </div>

            </div>
        </div>
    );
}

export default FlightSeatingPlan
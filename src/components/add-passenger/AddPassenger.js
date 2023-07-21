import React, { useState } from "react";
import "./AddPassenger.css";
import TitleBar from "../titleBar/TitleBar";
import axios from 'axios';

export default function AddPassenger() {
    const [name, setName] = useState('');
    const [flightNum, setFlightNum] = useState('');
    const [row, setRow] = useState('');
    const [col, setCol] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleName = (event) => {
        setName(event.target.value);
    }

    const handleFlightNumChange = (event) => {
        setFlightNum(event.target.value);
    }

    const handleRow = (event) => {
        setRow(event.target.value);
    }

    const handleCol = (event) => {
        setCol(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {name, flightNum, row, col};
        axios.post('http://localhost:8080/api/v1/passengers', formData)
        .then(response => {
            console.log(response.data);
            setIsSubmitted(true);
        })
        .catch(error => console.error(error));
    }

    return (
        <div>
            <TitleBar/>
            <form className="bg-light shadow-sm" onSubmit={handleSubmit}>
                <label>Name <input required type="text" value={name} onChange={handleName}></input></label><br></br>
                <label>Flight Number <input required type="text" value={flightNum} onChange={handleFlightNumChange}></input></label><br></br>
                <label>Row <input required type="text" value={row} onChange={handleRow}></input></label><br></br>
                <label>Col <input required type="text" value={col} onChange={handleCol}></input></label><br></br>
                <input className="btn btn-primary" type="submit" value="Submit"></input>
                {isSubmitted && <p className="alert alert-success" >Passenger added successfully.</p>}
            </form>
        </div>
    )
}
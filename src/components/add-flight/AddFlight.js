import React, { useState, useEffect } from "react";
import "./AddFlight.css";
import TitleBar from "../titleBar/TitleBar";
import axios from 'axios';

const AddFlights = () => {

    const [flightNum, setFlightNum] = useState('');
    const [model, setModel] = useState('');
    const [rows, setRows] = useState('');
    const [col, setCol] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleFlightNumChange = (event) => {
        setFlightNum(event.target.value);
    }

    const handleModel = (event) => {
        setModel(event.target.value);
    }

    const handleRows = (event) => {
        setRows(event.target.value);
    }

    const handleCol = (event) => {
        setCol(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {flightNum, model, rows, col};
        axios.post('http://localhost:8080/api/v1/flights', formData)
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
                <label>Flight Number <input required type="text" value={flightNum} onChange={handleFlightNumChange}></input></label><br></br>
                <label>Model <input required type="text" value={model} onChange={handleModel}></input></label><br></br>
                <label>Rows <input required type="text" value={rows} onChange={handleRows}></input></label><br></br>
                <label>Col <input required type="text" value={col} onChange={handleCol}></input></label><br></br>
                <input className="btn btn-primary" type="submit" value="Submit"></input>
                {isSubmitted && <p className="alert alert-success" >Flight added successfully.</p>}
            </form>
        </div>
    )
}

export default AddFlights
import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import SearchFlights from './components/search-flights/SearchFlights';
import FlightSeatingPlan from './components/flight-seating-plan/FlightSeatingPlan';
import { useNavigate } from 'react-router-dom';
import AddFlight from './components/add-flight/AddFlight';

function App() {

  const [flights, setFlights] = useState();
  const [passengers, setPassengers] = useState();
  const [selectedFlight, setSelectedFlight] = useState(null);
  const navigate = useNavigate();

  const getFlights = async () =>{

    try{

      const response = await api.get("/api/v1/flights");

      setFlights(response.data); 

    } catch(err){
      console.log(err);
    }

  }

  useEffect(() => {
    getFlights();
  },[])

  const getPassengers = async () =>{

    try{

      const response = await api.get("/api/v1/passengers");

      setPassengers(response.data); 

    } catch(err){
      console.log(err);
    }

  }

  useEffect(() => {
    getPassengers();
  },[])

  const handleViewSeatingPlan = (flight) => {
    setSelectedFlight(flight);
    navigate('/flight-seating-plan');
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home flights={flights}/>} ></Route>
          <Route path="/search-flights" element={<SearchFlights flights={flights} onViewSeatingPlan={handleViewSeatingPlan} />} ></Route>
          {selectedFlight && <Route path="/flight-seating-plan" element={<FlightSeatingPlan flight={selectedFlight} passengers={passengers} />} />}
          <Route path="/add-flight" element={<AddFlight/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

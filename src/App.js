import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import SearchFlights from './components/search-flights/SearchFlights';

function App() {

  const [flights, setFlights] = useState();

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

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home flights={flights}/>} ></Route>
          <Route path="/search-flights" element={<SearchFlights flights={flights}/>} ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

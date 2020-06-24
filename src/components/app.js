import React, { useState, useEffect } from 'react'
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecast-details';
import '../styles/app.css';
import axios from 'axios';
import SearchForm from './search-form';

const App = props => {
    const [selectedDate, setSelectedDate] = useState(0);
    const [forecasts, setForecasts] = useState([]);
    const [location, setLocation] = useState({
        city: '',
        country: '',
    })

    useEffect(() => {
      axios.get('https://mcr-codes-weather.herokuapp.com/forecast')
      .then(response => {
        setForecasts(response.data.forecasts);
        setLocation(response.data.location);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data)
          console.log(error.response.status)
        } else if (error.request) {
          console.log(error.request)
        } else {
          console.log(error.message)
        }
      })
       
    });

    const handleLocationSearch = (city) => {
      const request = city.toLowerCase();

      axios.get(`https://mcr-codes-weather.herokuapp.com/forecast?city=${request}`)
      .then((response) => {
        setForecasts(response.data.forecast);
        setLocation(response.data.location);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data)
          console.log(error.response.status)
        } else if (error.request) {
          console.log(error.request)
        } else {
          console.log(error.message)
        }
      })
    };

    const selectedForecast = forecasts.find(forecast => forecast.date === selectedDate);
    
    const handleForecastSelect = (date) => {
        setSelectedDate(date);
    };
    
      return (
        <div className="forecast">
        <LocationDetails
          city={location.city}
          country={location.country}
        />
        <SearchForm setLocationSearch={handleLocationSearch} />
        <ForecastSummaries forecasts={forecasts} onForecastSelect={handleForecastSelect} />
        
        {selectedForecast && (<ForecastDetails forecast={selectedForecast} />)
        }
        /</div>
      );
  };

export default App;

import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';



const ForecastDetails = props => (
        <>
        <div className="forecast-details">
        <div className="date">
        <span>{moment(props.forecast.date).format('ddd Do MMM')}</span> 
        </div>
        <div className="mintemperature">
            Min Temperature: {props.forecast.temperature.min}
        </div>
        <div className="maxtemperature">
            Max Temperature: {props.forecast.temperature.max}
        </div>
        <div className="humidity">
            Humidity: {props.forecast.humidity}
        </div>
        <div className="wind">
            Wind: {props.forecast.wind.speed} {props.forecast.wind.direction}
        </div>
        </div>
        </>
);

ForecastDetails.propTypes = {
    forecast: PropTypes.shape({
        date: PropTypes.number,
        temperature: PropTypes.object,
        humidity: PropTypes.number,
        wind: PropTypes.object,
    })
}

export default ForecastDetails;
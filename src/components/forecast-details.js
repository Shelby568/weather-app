import React from 'react';
import moment from 'moment';



const ForecastDetails = ({
    date, 
    mintemperature,
    maxtemperature,
    humidity,
    windspeed,
    winddirection,
}) => {
    return (
        <>
        <div className="date">
        <span className="date">{moment(date).format('ddd Do MMM')}</span> 
        </div>
        <div className="mintemperature">
            {mintemperature}
        </div>
        <div className="maxtemperature">
            {maxtemperature}
        </div>
        <div className="humidity">
            {humidity}
        </div>
        <div className="windspeed">
            {windspeed}
        </div>
        <div className="winddirection">
            {winddirection}
        </div>
        </>
    );
};



export default ForecastDetails;
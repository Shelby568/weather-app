import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';

const ForecastSummary = props => {

    return (
      <>
        <div className="date" data-testid="date-id">
        <span>{moment(props.date).format('ddd Do MMM')}</span>
        </div>
        <div className="temperature" data-testid="temperature-id">
          <span>{props.temperature}&deg;c</span>
        </div>
        <div className="description" data-testid="description-id">
          {props.description}
        </div>
        <div className="icon" data-testid="icon-id">
        <WeatherIcon name="owm" iconId={props.icon} />
        </div>
        <button className="button" onClick={() => props.onSelect(props.date)}>More Details</button>
      </>
    );
  };

ForecastSummary.propTypes = {
  forecasts: PropTypes.shape({
    date: PropTypes.number,
    temperature: PropTypes.object,
    description: PropTypes.string,
    icon: PropTypes.string,
  })
   
};

export default ForecastSummary;
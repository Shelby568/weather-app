import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';

const ForecastSummary = ({
    date,
    temperature,
    description,
    icon,
    handleForecastSelect,
  }) => {
    return (
      <>
        <div className="date" data-testid="date-id">
        <span className="date">{moment(date).format('ddd Do MMM')}</span>
        </div>
        <div className="temperature" data-testid="temperature-id">
          {temperature}
        </div>
        <div className="description" data-testid="description-id">
          {description}
        </div>
        <div className="icon" data-testid="icon-id">
        <WeatherIcon name="owm" iconId={icon} />
        </div>
        <button onClick={() => console.log('Hello')}>More Details</button>
      </>
    );
  };

ForecastSummary.propTypes = {
    date: PropTypes.instanceOf(Date),
    temperature: PropTypes.number,
    description: PropTypes.string,
};

export default ForecastSummary;
import React from 'react';
import { render } from '@testing-library/react';
import ForecastSummary from '../../components/forecast-summary';

describe('ForecastSummary', () => {
    it('renders correctly', () => {
        const { asFragment } = render(
            <ForecastSummary
            date={123456}
            temperature="mockTemperature"
            description="mockDescription"
            icon="200"
            />
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders to the correct props', () => {
        const { getByText, getByTestId } = render(
            <ForecastSummary
            date={123456}
            temperature="mockTemperature"
            description="mockDescription"
            icon="200"
            />
        );
        expect(getByText("Thu 1st Jan")).toHaveClass("date");
        expect(getByTestId("temperature-id")).toHaveClass("temperature");
        expect(getByText("mockDescription")).toHaveClass("description");
        expect(getByTestId("icon-id")).toHaveClass("icon");
    });
});
import React from 'react';
import { render, fireEvent } from '@testing-library/preact';
import RouteItem from '../components/route-item';
import { route } from './route-test-data';
import 'jest-styled-components';

describe('RouteItem', () => {
  it('handles click on stop name', () => {
    const { getByTestId } = render(<RouteItem {...route} />);
    const stopName = getByTestId('stop-name');
    expect(stopName.textContent).toBe(route.customName);
    fireEvent.click(stopName);
    expect(stopName.textContent).toBe(route.customName[0]);
  });

  it('handles click on MinutesList', () => {
    const { queryAllByTestId } = render(<RouteItem {...route} />);
    const [firstMin, secondMin] = queryAllByTestId('minutes');
    expect(firstMin).toHaveStyleRule('color', '#FFF');
    expect(secondMin).toHaveStyleRule('color', '#888');
    fireEvent.click(firstMin);
    expect(firstMin).toHaveStyleRule('color', '#FFF');
    expect(secondMin).toHaveStyleRule('color', '#FFF');
  });

  it('passes stopName to StopInfo if no customName', () => {
    const { customName, ...rest } = route;
    const routeMissingCustom = rest;
    const { container } = render(<RouteItem {...routeMissingCustom} />);
    expect(container.textContent).toMatch(route.stopName);
  });
});

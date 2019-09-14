import React from 'react';
import { render, wait } from '@testing-library/react';
import App from '../app';
import { mockRoutes, mockRoutesWithError } from './route-test-data';

const { morning, evening } = mockRoutes;

const testProps = {
  fetchData: jest.fn().mockResolvedValue(mockRoutes),
};

describe('App', () => {
  beforeEach(() => {
    // Don't log routes
    console.log.mockImplementationOnce(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('displays refresh header', () => {
    const { queryByText } = render(<App {...testProps} />);
    expect(queryByText('REFRESH')).toBeTruthy();
  });

  it('shows loading screen', () => {
    const fetchData = () => Promise.resolve();
    const { container } = render(<App fetchData={fetchData} />);
    expect(container.textContent).toMatch('Loading...');
  });

  it('handles error in routes', () => {
    const fetchData = () => Promise.resolve(mockRoutesWithError);
    const { container } = render(<App fetchData={fetchData} />);
    return wait(() => {
      expect(container.textContent).toMatch('Error!Noes');
    });
  });

  it('handles error during request', () => {
    const fetchData = () => Promise.reject(new Error('argh'));
    const { container } = render(<App fetchData={fetchData} />);
    return wait(() => {
      expect(container.textContent).toMatch('Error!argh');
    });
  });

  it('renders routes with spacers (Morning)', () => {
    const getHourOfDay = () => 7;
    const { queryByText, getByTestId, findAllByTestId } = render(
      <App {...testProps} getHourOfDay={getHourOfDay} />
    );
    return findAllByTestId('stop-name').then(routeItems => {
      expect(queryByText('Inbound')).toBeTruthy();
      expect(queryByText('Outbound')).toBeTruthy();
      const appText = getByTestId('app').textContent;
      expect(appText.indexOf('Inbound')).toBeLessThan(appText.indexOf('Outbound'));
      expect(routeItems.length).toBe(morning.length + evening.length);
    });
  });

  it('renders morning routes with spacers (Evening)', () => {
    const getHourOfDay = () => 17;
    const { getByTestId, queryByText, findAllByTestId } = render(
      <App {...testProps} getHourOfDay={getHourOfDay} />
    );
    return findAllByTestId('stop-name').then(routeItems => {
      expect(queryByText('Inbound')).toBeTruthy();
      expect(queryByText('Outbound')).toBeTruthy();
      const appText = getByTestId('app').textContent;
      expect(appText.indexOf('Outbound')).toBeLessThan(appText.indexOf('Inbound'));
      expect(routeItems.length).toBe(morning.length + evening.length);
    });
  });
});

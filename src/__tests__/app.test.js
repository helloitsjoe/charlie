import React from 'react';
import {
  render,
  screen as s,
  waitFor,
  fireEvent,
} from '@testing-library/react';
import App from '../app';
import { mockRoutes, mockRoutesWithError } from './route-test-data';

const testProps = {
  fetchData: jest.fn().mockResolvedValue(mockRoutes),
  defaultRoutes: mockRoutes,
  getHourOfDay: () => 14,
};

describe('App', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('displays refresh header', () => {
    render(<App {...testProps} />);
    return waitFor(() => {
      expect(s.queryByText('REFRESH')).toBeTruthy();
    });
  });

  xit('shows skeleton components during loading', () => {
    render(<App {...testProps} />);
    expect(s.getByText('Outbound')).toBeTruthy();
    expect(s.queryByText('Inbound')).not.toBeTruthy();
    expect(s.queryAllByText(/harvard/i).length).toBe(0);
    return waitFor(() => {
      expect(s.queryAllByText(/harvard/i).length).toBeGreaterThan(0);
    });
  });

  it('handles error in routes', () => {
    const fetchData = () => Promise.resolve(mockRoutesWithError);
    const { container } = render(<App fetchData={fetchData} />);
    return waitFor(() => {
      expect(container.textContent).toMatch('Error!Noes');
    });
  });

  it('handles error during request', () => {
    const fetchData = () => Promise.reject(new Error('argh'));
    const { container } = render(<App fetchData={fetchData} />);
    return waitFor(() => {
      expect(container.textContent).toMatch('Error!argh');
    });
  });

  it('refetches every 30 seconds', () => {
    jest.useFakeTimers();
    const fetchData = jest.fn().mockResolvedValue(mockRoutes);
    render(<App fetchData={fetchData} />);
    expect(fetchData).toBeCalledTimes(1);
    jest.advanceTimersByTime(29000);
    expect(fetchData).toBeCalledTimes(1);
    jest.advanceTimersByTime(1000);
    return waitFor(() => {
      expect(fetchData).toBeCalledTimes(2);
      jest.useRealTimers();
    });
  });

  it('pull to refetch', () => {
    const fetchData = jest.fn().mockResolvedValue(mockRoutes);
    render(<App fetchData={fetchData} />);
    expect(fetchData).toBeCalledTimes(1);
    fireEvent.touchStart(document, { targetTouches: [{ clientY: 0 }] });
    fireEvent.touchEnd(document, { changedTouches: [{ clientY: 1 }] });
    expect(fetchData).toBeCalledTimes(2);
    // pull down only, pull up doesn't work
    fireEvent.touchStart(document, { targetTouches: [{ clientY: 1 }] });
    fireEvent.touchEnd(document, { changedTouches: [{ clientY: 0 }] });
    return waitFor(() => {
      expect(fetchData).toBeCalledTimes(2);
    });
  });

  it('renders routes with spacers (Morning)', async () => {
    const getHourOfDay = () => 7;
    render(<App {...testProps} getHourOfDay={getHourOfDay} />);
    const routeItems = await s.findAllByTestId('stop-name');
    expect(s.queryByText('Inbound')).toBeTruthy();
    expect(s.queryByText('Outbound')).not.toBeTruthy();
    // const appText = getByTestId('app').textContent;
    // expect(appText.indexOf('Inbound')).toBeLessThan(
    //   appText.indexOf('Outbound'),
    // );
    expect(routeItems.length).toBe(mockRoutes.filter((r) => r.morning).length);
  });

  it('renders morning routes with spacers (Evening)', async () => {
    const getHourOfDay = () => 17;
    render(<App {...testProps} getHourOfDay={getHourOfDay} />);
    const routeItems = await s.findAllByTestId('stop-name');
    expect(s.queryByText('Inbound')).not.toBeTruthy();
    expect(s.queryByText('Outbound')).toBeTruthy();
    // const appText = getByTestId('app').textContent;
    // expect(appText.indexOf('Outbound')).toBeLessThan(
    //   appText.indexOf('Inbound'),
    // );
    expect(routeItems.length).toBe(mockRoutes.filter((r) => !r.morning).length);
  });

  it('reveals inbound routes in the morning', async () => {
    const getHourOfDay = () => 9;
    render(<App {...testProps} getHourOfDay={getHourOfDay} />);
    let routeItems = await s.findAllByTestId('stop-name');
    expect(s.queryByText('Inbound')).toBeTruthy();
    expect(s.queryByText('Outbound')).not.toBeTruthy();
    expect(routeItems.length).toBe(mockRoutes.filter((r) => r.morning).length);

    fireEvent.click(s.getByText(/get outbound routes/i));
    expect(s.queryByText('Inbound')).toBeTruthy();
    await expect(s.queryByText('Outbound')).toBeTruthy();
    routeItems = s.getAllByTestId('stop-name');
    expect(routeItems.length).toBe(mockRoutes.length);
  });

  it('reveals outbound routes in the evening', async () => {
    const getHourOfDay = () => 17;
    render(<App {...testProps} getHourOfDay={getHourOfDay} />);
    let routeItems = await s.findAllByTestId('stop-name');
    expect(s.queryByText('Inbound')).not.toBeTruthy();
    expect(s.queryByText('Outbound')).toBeTruthy();
    expect(routeItems.length).toBe(mockRoutes.filter((r) => !r.morning).length);

    fireEvent.click(s.getByText(/get inbound routes/i));
    expect(s.queryByText('Inbound')).toBeTruthy();
    await expect(s.queryByText('Outbound')).toBeTruthy();
    routeItems = s.getAllByTestId('stop-name');
    expect(routeItems.length).toBe(mockRoutes.length);
  });
});

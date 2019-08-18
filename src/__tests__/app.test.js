import React from 'react';
import { render } from '@testing-library/react';
import App from '../app';
import { mockRoutes } from './route-test-data';

const { morning, evening } = mockRoutes;

const testProps = {
  fetchData: jest.fn().mockResolvedValue(mockRoutes),
};

describe('App', () => {
  beforeEach(() => {
    console.log.mockImplementationOnce(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('displays refresh header', () => {
    const { queryByText } = render(<App {...testProps} />);
    expect(queryByText('REFRESH')).toBeTruthy();
  });

  it('renders routes with spacers (Morning)', () => {
    const { queryByText, getByTestId, findAllByTestId } = render(
      <App {...testProps} hourOfDay={11} />
    );
    return findAllByTestId('stop-name').then(routeItems => {
      expect(queryByText('Inbound')).toBeTruthy();
      expect(queryByText('Outbound')).toBeTruthy();
      const appText = getByTestId('app').textContent;
      expect(appText.indexOf('Inbound')).toBeLessThan(
        appText.indexOf('Outbound')
      );
      expect(routeItems.length).toBe(morning.length + evening.length);
    });
  });

  it('renders morning routes with spacers (Evening)', () => {
    const { getByTestId, queryByText, findAllByTestId } = render(
      <App {...testProps} hourOfDay={13} />
    );
    return findAllByTestId('stop-name').then(routeItems => {
      expect(queryByText('Inbound')).toBeTruthy();
      expect(queryByText('Outbound')).toBeTruthy();
      const appText = getByTestId('app').textContent;
      expect(appText.indexOf('Outbound')).toBeLessThan(
        appText.indexOf('Inbound')
      );
      expect(routeItems.length).toBe(morning.length + evening.length);
    });
  });
});

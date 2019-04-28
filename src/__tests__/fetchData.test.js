import { fetchData } from '../fetchData';

describe('fetchData', () => {
  it('returns error object if no response data', () => {
    const fetchPredictions = jest.fn(() => Promise.resolve());
    return fetchData({ mbta: { fetchPredictions } }).then(res => {
      expect(res.error.message).toBe('No predictions');
      expect(res.error.stack).toEqual(expect.any(String));
    });
  });
});

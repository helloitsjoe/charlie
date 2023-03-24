import fetchData from '../fetchData';

describe('fetchData', () => {
  it('Returns empty morning/evening arrays if no route information', () => {
    return fetchData({ routes: [] }).then((res) => {
      expect(res).toEqual([]);
    });
  });

  it('returns error object if no response data', () => {
    const fetchPredictions = jest.fn(() => Promise.resolve());
    return fetchData({ mbta: { fetchPredictions } }).then((res) => {
      expect(fetchPredictions).toBeCalled();
      expect(res.error.message).toBe('No predictions');
      expect(res.error.stack).toEqual(expect.any(String));
    });
  });

  it.todo('returns blank data if route has no data');
});

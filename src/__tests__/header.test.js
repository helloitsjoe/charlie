import { sortLines } from '../components/header';

const routeData = [
  { id: '3' },
  { id: '1' },
  { id: 'blue', short_name: 'blue line' },
  { id: 'red' },
  { id: '1A' },
  { id: 'green', short_name: 'green line' },
  { id: '2' },
];

describe('sortLines', () => {
  it('sorts mix of numbered and named routes', () => {
    expect(routeData.sort(sortLines)).toEqual([
      { id: '1' },
      { id: '1A' },
      { id: '2' },
      { id: '3' },
      { id: 'blue', short_name: 'blue line' },
      { id: 'green', short_name: 'green line' },
      { id: 'red' },
    ]);
  });
});

export const route = {
  color: 'red',
  stopName: 'Harvard',
  direction: 'Northbound',
  textColor: 'white',
  customName: 'Harvard - 71',
  isWalkable: true,
  arrivalMins: [1, 4],
};

export const mockRoutesWithError = {
  error: {
    message: 'Noes',
    stack: 'Aw nuts',
  },
};

export const mockRoutes = {
  morning: [
    {
      id: 0,
      color: 'FFC72C',
      morning: true,
      stopName: 'Mt Auburn St @ Winthrop St',
      direction: 'Harvard',
      textColor: '000000',
      isWalkable: false,
      customName: undefined,
      arrivalMins: [1, 4],
    },
    {
      id: 1,
      color: 'FFC72C',
      morning: true,
      stopName: 'Massachusetts Ave @ Holyoke St',
      direction: 'Dudley',
      textColor: '000000',
      isWalkable: true,
      customName: undefined,
      arrivalMins: [2, 6],
    },
  ],
  evening: [
    {
      id: 2,
      color: 'FFC72C',
      morning: undefined,
      stopName: 'Harvard',
      direction: '',
      textColor: '000000',
      isWalkable: false,
      customName: 'Harvard - 71',
      arrivalMins: [],
    },
    {
      id: 3,
      color: '80276C',
      morning: undefined,
      stopName: 'Back Bay',
      direction: 'South Station',
      textColor: 'FFFFFF',
      isWalkable: false,
      customName: undefined,
      arrivalMins: [3, 6],
    },
    {
      id: 4,
      color: '00843D',
      morning: undefined,
      stopName: 'Copley',
      direction: 'North Station',
      textColor: 'FFFFFF',
      isWalkable: false,
      customName: undefined,
      arrivalMins: [1, 1],
    },
    {
      id: 5,
      color: 'FFC72C',
      morning: undefined,
      stopName: 'Massachusetts Ave @ Clearway St',
      direction: 'Harvard',
      textColor: '000000',
      isWalkable: false,
      customName: undefined,
      arrivalMins: [12, 13],
    },
  ],
};

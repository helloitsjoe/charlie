// import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// configure({ adapter: new Adapter() });

const silenceActWarning = log => (message, ...args) =>
  message.match(/act(...)/) ? undefined : log(message, ...args);

console.log = jest.fn(console.log);
console.error = jest.fn(silenceActWarning(console.error));

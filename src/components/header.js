/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fetchRoutes, fetchStops /* searchStops */ } from '../fetchData';
// import { debounce } from '../utils';

const Header = styled.div`
  text-align: center;
  padding-top: 20px;
  padding-bottom: 10px;
`;

const Button = styled.button`
  font-size: 1rem;
  border-radius: 10px;
  height: 20px;
  line-height: 20px;
  padding: 0px 20px;
  margin: 0px;
  color: #666;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 2em auto 1em;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Select = styled.select`
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
`;

const vehicles = {
  Bus: 3,
  Subway: [0, 1],
  'Commuter Rail': 2,
  Boat: 4,
};

function mbtaReducer(state, action) {
  switch (action.type) {
    case 'VEHICLE_SELECT':
      return {
        ...state,
        stops: [],
        selectedLine: null,
        selectedVehicle: action.vehicle,
        selectedDirection: null,
      };
    case 'LINE_SELECT':
      return {
        ...state,
        stops: [],
        selectedLine: action.line,
      };
    case 'DIRECTION_SELECT':
      return {
        ...state,
        stops: [],
        selectedDirection: action.direction,
      };
    case 'STOP_SELECT':
      return { ...state, selectedStop: action.stop };
    case 'FETCHED_ROUTES':
      return { ...state, lines: action.lines };
    case 'FETCHED_STOPS':
      return { ...state, stops: action.stops };
    default:
      throw new Error('Unknown action type');
  }
}

export function sortLines(a, b) {
  const aId = Number(a.id);
  const bId = Number(b.id);

  const [first, second] = (() => {
    if (a.short_name && b.short_name) {
      return [a.short_name, b.short_name];
    }

    if (a.short_name) {
      return [a.short_name, bId];
    }

    if (b.short_name) {
      return [aId, b.short_name];
    }
    return [aId, bId];
  })();

  return first < second ? -1 : 1;
}

function useMbtaForm() {
  const [state, dispatch] = useReducer(mbtaReducer, {
    lines: null,
    stops: [],
    selectedLine: null,
    selectedStop: null,
    selectedDirection: null,
  });

  const { stops, lines, selectedLine, selectedStop, selectedDirection } = state;

  console.log('lines', lines);
  console.log('selectedLine', selectedLine);
  console.log('stops', stops);

  const handleVehicleSelect = (e) => {
    const vehicle = vehicles[e.target.value];
    dispatch({ type: 'VEHICLE_SELECT', vehicle });
    fetchRoutes({ type: vehicle })
      .then((data) => {
        const sortedLines = data.sort(sortLines);
        dispatch({ type: 'FETCHED_ROUTES', lines: sortedLines });
      })
      .catch(console.error);
  };

  const handleLineSelect = (e) => {
    const routeId = e.target.value;
    const newLine = lines.find((l) => l.id === routeId);
    dispatch({ type: 'LINE_SELECT', line: newLine });
    if (selectedDirection != null) {
      fetchStops({ routeId: newLine.id, selectedDirection })
        .then((s) => dispatch({ type: 'FETCHED_STOPS', stops: s }))
        .catch(console.error);
    }
  };

  const handleDirectionSelect = (e) => {
    const direction = e.target.value;
    dispatch({ type: 'DIRECTION_SELECT', direction });
    fetchStops({ routeId: selectedLine.id, direction })
      .then((s) => dispatch({ type: 'FETCHED_STOPS', stops: s }))
      .catch(console.error);
  };

  const handleStopSelect = (e) => {
    const { value } = e.target;
    const stop = stops.find((s) => s.name === value);
    console.log('selectedStop', stop);
    if (!stop) {
      // TODO: Handle this error!
      throw new Error(`Stop not found! ${value}`);
    }
    dispatch({ type: 'STOP_SELECT', stop });
  };

  return {
    lines,
    stops,
    handleStopSelect,
    handleDirectionSelect,
    handleLineSelect,
    handleVehicleSelect,
    selectedDirection,
    selectedLine,
    selectedStop,
  };
}

export default function CharlieHeader({ reFetch, onAddStop }) {
  const {
    lines,
    stops,
    handleStopSelect,
    handleDirectionSelect,
    handleLineSelect,
    handleVehicleSelect,
    selectedDirection,
    selectedLine,
    selectedStop,
  } = useMbtaForm();

  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const openDialog = () => setDialogIsOpen(true);
  const closeDialog = () => setDialogIsOpen(false);

  // TODO: finish search
  // const handleSearch = debounce((e) =>
  //   searchStops({ search: e.target.value }).then(setSearchResults)
  // );

  const addApiKey = (e) => {
    e.preventDefault();
    const { apiKey } = Object.fromEntries(new FormData(e.currentTarget));
    localStorage.setItem('mbta_api_key', apiKey);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Why are subway lines showing as buses?
    // TODO: UI for custom name and wait times

    const newStop = {
      route: selectedLine.id,
      stop: selectedStop.id,
      direction: selectedDirection,
      morning: false,
      waitStart: 5,
      waitLength: 6,
    };
    onAddStop(newStop);
    closeDialog();
  };

  return (
    <Header>
      <ButtonContainer>
        <Button onClick={reFetch}>REFRESH</Button>
        <Button onClick={dialogIsOpen ? closeDialog : openDialog}>
          ADD STOP
        </Button>
      </ButtonContainer>
      {dialogIsOpen && (
        <>
          {!localStorage.getItem('mbta_api_key') && (
            <Form onSubmit={addApiKey}>
              <input type="text" name="apiKey" />
              <Button type="submit">Submit</Button>
            </Form>
          )}
          <Form onSubmit={handleSubmit}>
            {/* <Label> */}
            {/*   Search */}
            {/*   <input onChange={handleSearch} /> */}
            {/*   {JSON.stringify(searchResults)} */}
            {/* </Label> */}
            <Label>
              Select a vehicle type
              <Select onChange={handleVehicleSelect}>
                <option />
                {Object.keys(vehicles).map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </Select>
            </Label>
            <Label>
              Select a line
              <Select onChange={handleLineSelect}>
                <option />
                {lines?.map((line) => (
                  <option key={line.id} value={line.id}>
                    {line.short_name || line.id}
                  </option>
                ))}
              </Select>
            </Label>
            <Label>
              Select a direction
              <Select
                disabled={selectedLine == null}
                onChange={handleDirectionSelect}
              >
                <option />
                {selectedLine?.direction_names?.map((dir, i) => (
                  <option key={dir} value={i}>
                    {dir}
                  </option>
                ))}
              </Select>
            </Label>
            <Label>
              Select a stop
              <Select
                disabled={selectedDirection == null}
                onChange={handleStopSelect}
              >
                <option />
                {stops.map((stop) => (
                  <option>{stop.name}</option>
                ))}
              </Select>
            </Label>
            {/* TODO: localStorage */}
            <div>Note: your changes will not be saved</div>
            <br />
            <button type="submit">Submit</button>
          </Form>
        </>
      )}
    </Header>
  );
}

CharlieHeader.propTypes = {
  reFetch: PropTypes.func.isRequired,
  onAddStop: PropTypes.func.isRequired,
};

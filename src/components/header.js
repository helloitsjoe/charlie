/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fetchRoutes, fetchStops /* searchStops */ } from '../fetchData';
// import { debounce } from '../utils';

const StyledHeader = styled.div`
  text-align: center;
  padding-top: 20px;
  padding-bottom: 10px;
`;

const StyledButton = styled.button`
  font-size: 1rem;
  border-radius: 10px;
  height: 20px;
  line-height: 20px;
  padding: 0px 20px;
  margin: 0px;
  color: #666;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 2em auto 1em;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledSelect = styled.select`
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

export default function Header({ reFetch, onAddStop }) {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [lines, setLines] = useState(null);
  // const [searchResults, setSearchResults] = useState(null);
  const [, setSelectedVehicle] = useState();
  const [selectedLine, setSelectedLine] = useState(null);
  const [selectedDirection, setSelectedDirection] = useState(null);
  const [selectedStop, setSelectedStop] = useState(null);
  const [stops, setStops] = useState([]);
  console.log('lines', lines);
  console.log('selectedLine', selectedLine);
  console.log('stops', stops);

  const openDialog = () => setDialogIsOpen(true);
  const closeDialog = () => setDialogIsOpen(false);

  // TODO: finish search
  // const handleSearch = debounce((e) =>
  //   searchStops({ search: e.target.value }).then(setSearchResults)
  // );

  const handleVehicleSelect = (e) => {
    const vehicle = vehicles[e.target.value];
    setStops([]);
    setSelectedLine(null);
    setSelectedVehicle(vehicle);
    setSelectedDirection(null);
    fetchRoutes({ type: vehicle })
      .then((data) => setLines(data.sort((a, b) => (a.id < b.id ? 1 : -1))))
      .catch(console.error);
  };

  const handleLineSelect = (e) => {
    const routeId = e.target.value;
    const newLine = lines.find((l) => l.id === routeId);
    setStops([]);
    setSelectedLine(newLine);
    if (selectedDirection != null) {
      fetchStops({ routeId: newLine.id, selectedDirection })
        .then((s) => setStops(s))
        .catch(console.error);
    }
  };

  const handleDirectionSelect = (e) => {
    const direction = e.target.value;
    setSelectedDirection(direction);
    setStops([]);
    fetchStops({ routeId: selectedLine.id, direction })
      .then((s) => setStops(s))
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
    setSelectedStop(stop);
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
    <StyledHeader>
      <ButtonContainer>
        <StyledButton onClick={reFetch}>REFRESH</StyledButton>
        <StyledButton onClick={dialogIsOpen ? closeDialog : openDialog}>
          ADD STOP
        </StyledButton>
      </ButtonContainer>
      {dialogIsOpen && (
        <StyledForm onSubmit={handleSubmit}>
          {/* <StyledLabel> */}
          {/*   Search */}
          {/*   <input onChange={handleSearch} /> */}
          {/*   {JSON.stringify(searchResults)} */}
          {/* </StyledLabel> */}
          <StyledLabel>
            Select a vehicle type
            <StyledSelect onChange={handleVehicleSelect}>
              <option />
              {Object.keys(vehicles).map((v) => (
                <option value={v}>{v}</option>
              ))}
            </StyledSelect>
          </StyledLabel>
          <StyledLabel>
            Select a line
            <StyledSelect onChange={handleLineSelect}>
              <option />
              {lines?.map((line) => (
                <option value={line.id}>{line.id}</option>
              ))}
            </StyledSelect>
          </StyledLabel>
          <StyledLabel>
            Select a direction
            <StyledSelect
              disabled={selectedLine == null}
              onChange={handleDirectionSelect}
            >
              <option />
              {selectedLine?.direction_names?.map((dir, i) => (
                <option value={i}>{dir}</option>
              ))}
            </StyledSelect>
          </StyledLabel>
          <StyledLabel>
            Select a stop
            <StyledSelect
              disabled={selectedDirection == null}
              onChange={handleStopSelect}
            >
              <option />
              {stops.map((stop) => (
                <option>{stop.name}</option>
              ))}
            </StyledSelect>
          </StyledLabel>
          {/* TODO: localStorage */}
          <div>Note: your changes will not be saved</div>
          <br />
          <button type="submit">Submit</button>
        </StyledForm>
      )}
    </StyledHeader>
  );
}

Header.propTypes = {
  reFetch: PropTypes.func.isRequired,
  onAddStop: PropTypes.func.isRequired,
};

/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fetchRoutes, fetchStops, searchStops } from '../fetchData';
import { debounce } from '../utils';

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

export default function Header({ reFetch, onAddStop }) {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [newStop, setNewStop] = useState({});
  const [lines, setLines] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [selectedLine, setSelectedLine] = useState(null);
  const [selectedDirection, setSelectedDirection] = useState(null);
  const [stops, setStops] = useState([]);
  console.log('lines', lines);
  console.log('selectedLine', selectedLine);
  console.log('stops', stops);

  const openDialog = () => {
    setDialogIsOpen(true);
    if (!lines) {
      fetchRoutes()
        .then((data) => setLines(data))
        .catch(console.error);
    }
  };

  const handleSearch = (e) => {
    debounce(() => searchStops({ search: e.target.value }).then(console.log));
  };

  const handleLineSelect = (e) => {
    const routeId = e.target.value;
    const newLine = lines.find((l) => l.id === routeId);
    setStops([]);
    setSelectedLine(newLine);
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
    const selectedStop = stops.find((s) => s.name === value);
    console.log('selectedStop', selectedStop);
    if (!selectedStop) {
      // TODO: Handle this error!
      throw new Error(`Stop not found! ${value}`);
    }
    setNewStop(newStop);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add route, stop, direction, customName, morning = true, waitStart = 5, waitLength = 6
    onAddStop(newStop);
  };

  return (
    <StyledHeader>
      <StyledButton onClick={reFetch}>REFRESH</StyledButton>
      <StyledButton onClick={openDialog}>ADD STOP</StyledButton>
      {dialogIsOpen && lines && (
        <StyledForm onSubmit={handleSubmit}>
          <StyledLabel>
            Search
            <input onChange={handleSearch} />
            {JSON.stringify(searchResults)}
          </StyledLabel>
          <StyledLabel>
            Select a line
            <StyledSelect onChange={handleLineSelect}>
              <option />
              {lines.map((line) => (
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
          {JSON.stringify(newStop)}
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

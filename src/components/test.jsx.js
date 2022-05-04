import React from 'react';
import styled from 'styled-components';

function App() {
  return <SelectionBar inputType="text" inputPlaceholder="Location" />;
}

export default App;

function SelectionBar(props) {
  const { inputType, inputPlaceholder } = props;

  return (
    <SelectionBar1>
      <Location name="location" placeholder={inputPlaceholder} type={inputType} required />
    </SelectionBar1>
  );
}

const SelectionBar1 = styled.div`
  height: 109px;
  display: flex;
  padding: 31px 125px;
  align-items: flex-end;
  min-width: 1163px;
  background-color: var(--mist-gray);
  border: 1px solid #f10e0e;
  transition: all 0.2s ease;
  cursor: pointer;
`;

const Location = styled.input`
  width: 49px;
  height: 15px;
  background-color: transparent;
  font-family: var(--font-family-inter);
  font-weight: 400;
  color: var(--black);
  font-size: var(--font-size-m);
  letter-spacing: 0;
  border: 0;
  padding: 0;

  &::placeholder {
    color: #00000099;
  }
`;

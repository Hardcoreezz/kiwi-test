import React from 'react';
import styled from 'styled-components';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import './DateInput.css';

export default function DateInput({
  value,
  onChange,
  placeholder,
  className
}: {
  className?: string,
  placeholder?: string;
  value: Date | null;
  onChange(value: Date): void;
}): JSX.Element {

  return <Container className={className}>
    <DatePicker
      placeholderText={placeholder}
      minDate={new Date()}
      isClearable
      selected={value}
      onChange={onChange}/>
  </Container>
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

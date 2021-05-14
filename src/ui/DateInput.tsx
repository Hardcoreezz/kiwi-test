import React from 'react';
import styled from 'styled-components';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import './DateInput.css';

export default function DateInput({
  date,
  onChange,
  placeholder,
  className,
  minDate,
  disabled
}: {
  className?: string,
  placeholder?: string;
  date: Date | null;
  minDate?: Date | null;
  disabled?: boolean;
  onChange(value: Date): void;
}): JSX.Element {

  return <Container className={className}>
    <DatePicker
      placeholderText={placeholder}
      minDate={minDate}
      isClearable
      selected={date}
      disabled={disabled}
      onChange={onChange}/>
  </Container>
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

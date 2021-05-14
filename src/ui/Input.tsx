import React from 'react'
import styled from 'styled-components'

export default function Input({
  placeholder,
  value,
  onChange,
  maxLength,
  className,
  type = 'text',
  disabled,
  onBlur,
  id,
  autoFocus
}: {
  type?: string;
  className?: string,
  placeholder?: string;
  value: string;
  maxLength?: number;
  disabled?: boolean;
  autoFocus?: boolean;
  id?: string;
  onChange(value: string): void;
  onBlur?(): void;
}): JSX.Element {

  return <Container className={className}>
    <InputComponent
      data-test-id={'input'}
      id={id}
      type={type}
      disabled={disabled}
      maxLength={maxLength}
      placeholder={placeholder}
      value={value}
      onBlur={onBlur}
      autoFocus={autoFocus}
      onChange={(e) => onChange(e.target.value)}
    />
  </Container>
};
const InputComponent = styled.input`
  height: 32px;
  border: none;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 6%) 0 3.2px 14px, rgb(0 0 0 / 4%) 0 0.6px 1.8px;
  padding: 0 8px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

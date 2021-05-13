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
  onBlur
}: {
  type?: string;
  className?: string,
  placeholder?: string;
  value: string;
  maxLength?: number;
  disabled?: boolean;
  onChange(value: string): void;
  onBlur?(): void;
}): JSX.Element {

  return <Container className={className}>
    <InputComponent
      type={type}
      disabled={disabled}
      maxLength={maxLength}
      placeholder={placeholder}
      value={value}
      onBlur={onBlur}
      onChange={(e) => onChange(e.target.value)}
    />
  </Container>
};
const InputComponent = styled.input`
  height: 32px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

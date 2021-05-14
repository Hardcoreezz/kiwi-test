import React, { CSSProperties } from 'react';
import styled, { css } from 'styled-components';

export default function Checkbox({
  label = '',
  checked = false,
  onChange,
  style
}: {
  label?: string;
  checked?: boolean;
  style?: CSSProperties;
  onChange(value: boolean): void;
}) {
  return (
    <Container data-test-id={'checkbox'} style={style} checked={checked} onClick={() => onChange(!checked)}>
      <div>{checked && <span>&#10003;</span>}</div>
      {label && <label>{label}</label>}
    </Container>
  );
}

const Container = styled.div<{ checked: boolean }>`
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    color: rgba(0, 0, 0, 0.87);

    & > label {
        cursor: pointer;
        margin-left: 0.625em;
    }

    & > div {
        display: flex;
        width: 1.125rem;
        height: 1.125rem;
        box-sizing: border-box;
        background-color: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 4px;
        align-items: center;
        justify-content: center;

        & > span {
          color: white;
        }

        ${props => props.checked && css`
            background-color: #4093F4;
        `}
    }
`;

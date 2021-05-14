import React from 'react'
import styled from 'styled-components';

export default function PlaceList(props: {
  places: any[] | null;
  for?: string;
  onSelect(value: any): void;
}): JSX.Element {

  return <List htmlFor={props.for}>
    {props.places && props.places.map((place, i) => {
      return <Item key={`item_${i}`} onClick={() => props.onSelect(place)}>{place.name}</Item>
    })}
  </List>;
}

const List = styled.label`
  z-index: 10;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 38px;
  width: 100%;
  left: 0;
  margin-top: 0;
  padding: 0;
  list-style: none;
  background: white;
  overflow-y: auto;
  max-height: 200px;
  box-shadow: rgb(0 0 0 / 6%) 0 3.2px 14px, rgb(0 0 0 / 4%) 0 0.6px 1.8px;
`;

const Item = styled.li`
  padding: 8px;
  cursor: pointer;
  transition: background 0.2s ease;
  
  &:hover {
    background: lightgray;
  }
`;

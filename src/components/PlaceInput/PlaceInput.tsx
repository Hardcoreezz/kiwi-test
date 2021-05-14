import React from 'react'
import styled from 'styled-components';
import PlaceList from '../PlaceList/PlaceList';
import Input from '../../ui/Input';
import Api from '../../Api';
import {throttle} from '../../utils';

export default function PlaceInput(props: {
  placeholder?: string;
  for?: string;
  onSelect(place: any): void;
  autoFocus?: boolean;
  onBlur?:() => void
  className?: string;
}): JSX.Element {
  const [value, setValue] = React.useState('');
  const [places, setPlaces] = React.useState<any[] | null>(null);

  const onChange = (value: string) => {
    if (value.length >= 2) {
      fetchPlaces(value);
    } else {
      setPlaces(null);
    }
    if (!places) props.onSelect(null);

    setValue(value);
  };

  const fetchPlaces = throttle(async (value: string) => {
    const locations = await Api.getLocations(value);

    setPlaces(locations);
  }, 200);

  const onSelect = (place: any) => {
    props.onSelect(place);
    setPlaces(null);
    setValue(place.name);
  };

  return <Container className={props.className}>
    <Input
      id={props.for}
      value={value}
      onChange={onChange}
      autoFocus={props.autoFocus}
      placeholder={props.placeholder}
    />
    <PlaceList places={places} for={props.for} onSelect={onSelect} />
  </Container>;
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

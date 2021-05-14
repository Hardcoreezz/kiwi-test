import React from 'react'
import styled from 'styled-components';
import FlightsCard from '../FlightsCard/FlightsCard'
import Checkbox from '../../ui/Checkbox'

export default function FlightsList(props: {
  data: any[];
  isDirect: boolean;
  onChangeDirect(value: boolean): void;
}): JSX.Element {

  return <List>
    <Checkbox checked={props.isDirect} onChange={props.onChangeDirect} label={'Direct'} style={{ marginBottom: '16px' }}/>
    {props.data.map((flight, i) => {
      return <FlightsCard key={`flight_${i}`} data={flight} />
    })}
  </List>;
};

const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
`;

import React from 'react'
import styled from 'styled-components';
import dayjs from 'dayjs'

const getTransferText = (counts: number) => {
  switch (counts) {
    case 0: return 'Direct';
    case 1: return '1 transfer';
    default: return `${counts} transfers`;
  }
};

export default function FlightsCard(props: {
  data: any;
}): JSX.Element {

  return <Card href={props.data.deep_link} target="_blank">
    <Price>{props.data.price} €</Price>
    <Transfer data-test-id={'transfer-text'}>{getTransferText(props.data.route.length - 1)}</Transfer>
    <CardHeader>{props.data.fly_duration}</CardHeader>
    <CardBody>
      <CityInfo>
        <Name>{props.data.cityFrom}</Name>
        <Time>{dayjs(Number(`${props.data.dTimeUTC}000`)).format('DD-MM-YYYY HH:mm')}</Time>
      </CityInfo>
      <CityInfo>
        <Name>{props.data.cityTo}</Name>
        <Time style={{ textAlign: 'right' }}>{dayjs(Number(`${props.data.aTimeUTC}000`)).format('DD-MM-YYYY HH:mm')}</Time>
      </CityInfo>
    </CardBody>
  </Card>;
}

const Name = styled.p`
  margin: 0 0 16px;
  font-weight: bold;
`;

const Time = styled.p`
  margin: 0;
  color: rgb(59, 59, 59);
  font-size: 12px;
`;

const CityInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Card = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 16px;
  cursor: pointer;
  transition: background 0.2s ease;
  background: white;
  margin-bottom: 32px;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 6%) 0 3.2px 14px, rgb(0 0 0 / 4%) 0 0.6px 1.8px;
  color: black;
  text-decoration: none;

  &:hover {
    background: rgb(239, 242, 245);
  }
`;

const Price = styled.span`
  position: absolute;
  right: 16px;
  top: 16px;
  color: rgb(71, 96, 231);
  font-size: 18px;
  font-weight: bold;
`;

const Transfer = styled.span`
  position: absolute;
  left: 16px;
  top: 16px;
  color: rgb(59, 59, 59);
`;

const CardHeader = styled.span`
  display: flex;
  margin: auto auto 16px;
  font-size: 18px;
  font-weight: bold;
`;

const CardBody = styled.div`
  display: flex;
  justify-content: space-between;
`;

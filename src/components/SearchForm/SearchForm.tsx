import React, {FormEvent, useState} from 'react';
import styled from 'styled-components';
import DateInput from '../../ui/DateInput';
import PlaceInput from '../PlaceInput/PlaceInput'
import dayjs from 'dayjs'

export interface ISearch {
  from: any;
  to: any;
  dateFrom: string | null;
  dateTo: string | null;
}

const parseDate = (date: Date | null) => {
  return date ? dayjs(date).format('DD%2FMM%2FYYYY') : null;
};

const initialResult = {
  from: null,
  to: null,
  dateFrom: parseDate(new Date()),
  dateTo: null
};

type formType = 'from' | 'to' | 'dateFrom' | 'dateTo';

export default function SearchForm(props: {
  onSubmit(result: ISearch): void
}): JSX.Element {
  const [result, setResult] = useState<ISearch>(initialResult);

  const [fromDate, setFromDate] = useState<Date | null>(new Date());
  const [toDate, setToDate] = useState<Date | null>(null);

  const setHandler = (type: formType) => (value: any) => {
    setResult(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const changeDateHandler = (type: 'dateFrom' | 'dateTo') => (date: Date | null) => {
    if (!date && type === 'dateFrom') {
      setFromDate(null);
      setToDate(null);

      return setHandler(type)(null);
    }

    if (type === 'dateFrom') {
      setFromDate(date);
    } else {
      setToDate(date);
    }

    setHandler(type)(parseDate(date));
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    props.onSubmit(result);
  };

  return <Form onSubmit={submitHandler}>
    <Row style={{ marginBottom: '16px' }}>
      <StyledPlaceInput
        for={'from'}
        placeholder={'From'}
        onSelect={setHandler('from')}
      />
      <StyledPlaceInput
        for={'to'}
        placeholder={'To'}
        onSelect={setHandler('to')}
      />
    </Row>
    <RowWrap>
      <StyledDateInput
        date={fromDate}
        minDate={new Date()}
        onChange={changeDateHandler('dateFrom')}
        placeholder={'Date from'}
      />
      <StyledDateInput
        date={toDate}
        minDate={fromDate}
        disabled={!result.dateFrom}
        onChange={changeDateHandler('dateTo')}
        placeholder={'Date to'}
      />
      <SubmitButton
        type={'submit'}
        value={'Find'}
        disabled={!result.to || !result.from || !result.dateFrom}
      />
    </RowWrap>
  </Form>;
}

const StyledPlaceInput = styled(PlaceInput)`
  width: calc(50% - 8px);
  flex: 1;
  
  &:first-child {
    margin-right: 16px;
  }
`;

const StyledDateInput = styled(DateInput)`
  margin-right: 16px;
  width: 33%;

  @media (max-width: 425px) {
    width: 50%;
    flex: 1;
    
    &:nth-child(2) {
      margin-right: 0;
    } 
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 16px;
`;

const SubmitButton = styled.input`
  width: 33%;
  border: none;
  background: #0b73fe;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  height: 32px;
  
  @media (max-width: 425px) {
    margin-top: 16px;    
    width: 100%;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: auto;
  }
`;

const Row = styled.div`
  display: flex;
`;

const RowWrap = styled.div`
  display: flex;
  
  @media (max-width: 425px) {
    flex-wrap: wrap;
  }
`;

import React, {FormEvent, useCallback, useState} from 'react'
import styled from 'styled-components';
import Input from '../ui/Input'
import DateInput from '../ui/DateInput'
import Api from '../Api'
import PlaceList from './PlaceList'
import {throttle} from '../utils'

interface IResult {
  from: any;
  to: any;
  date: string | null;
}

const initialResult = {
  from: null,
  to: null,
  date: null
}

export default function SearchForm(props: any): JSX.Element {
  const [result, setResult] = useState<IResult>(initialResult);

  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState<Date | null>(null);

  const [fromList, setFromList] = useState<any[]>([]);
  const [toList, setToList] = useState<any[]>([]);

  const fromHandler = (value: string) => {
    getFromList(value);
    setFrom(value);

    setResult(prev => ({
      ...prev,
      from: null
    }));
  };

  const getFromList = useCallback(throttle(async (from: string) => {
    const locations = await Api.getLocations(from);

    setFromList(locations);
  }, 200), []);

  const toHandler = (value: string) => {
    getToList(value);
    setTo(value);

    setResult(prev => ({
      ...prev,
      to: null
    }));
  };

  const getToList = useCallback(throttle(async (to: string) => {
    const locations = await Api.getLocations(to);

    setToList(locations);
  }, 200), []);

  const setHandler = (type: 'from' | 'to' | 'date', value?: any) => {
    if (
      !value
      && !fromList.length
      && !toList.length
      && type !== 'date'
    ) {
      setTo(result.to?.name || '');
      setFrom(result.from?.name || '');
      return
    }

    setResult(prev => {
      const res = {
        ...prev,
        [type]: value ? value : fromList.length ? fromList[0] : toList.length ? toList[0] : null
      };

      setTo(res.to?.name || '');
      setFrom(res.from?.name || '');

      return res;
    });

    setFromList([]);
    setToList([]);
  };

  const changeDateHandler = (date: Date) => {
    setDate(date);
    setHandler('date', date ? date.toISOString() : null);
  }

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
  };

  return <Form onSubmit={submitHandler}>
    <Place>
      <StyledInput value={from} onChange={fromHandler} placeholder={'From'}/>
      {fromList && <PlaceList values={fromList} onChange={value => setHandler('from', value)}/>}
    </Place>
    <Place>
      <StyledInput value={to} onChange={toHandler} placeholder={'To'}/>
      {toList && <PlaceList values={toList} onChange={value => setHandler('to', value)}/>}
    </Place>
    <StyledDateInput value={date} onChange={changeDateHandler} placeholder={'Date'}/>
    <SubmitButton type={'submit'} value={'Find'} disabled={!result.to || !result.from || !result.date} />
  </Form>;
}

const StyledInput = styled(Input)`
  margin-right: 16px;
`;

const StyledDateInput = styled(DateInput)`
  margin-right: 16px;
`;

const Form = styled.form`
  display: flex;
`;

const SubmitButton = styled.input``;

const Place = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

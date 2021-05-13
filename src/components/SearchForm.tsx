import React, {useState} from 'react'
import styled from 'styled-components';
import Input from '../ui/Input'
import DateInput from '../ui/DateInput'

export default function SearchForm(props: any): JSX.Element {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState<Date | null>(null);

  return <Form>
    <StyledInput value={from} onChange={setFrom} placeholder={'From'}/>
    <StyledInput value={to} onChange={setTo} placeholder={'To'}/>
    <StyledDateInput value={date} onChange={setDate} placeholder={'Date'}/>
    <Button>Find</Button>
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

const Button = styled.button``;

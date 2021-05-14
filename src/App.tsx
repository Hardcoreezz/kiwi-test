import React, {useState} from 'react'
import styled from 'styled-components'
import SearchForm, {ISearch} from './components/SearchForm/SearchForm'
import Api from './Api'
import FlightsList from './components/FlightsList/FlightsList'
import Loader from './ui/Loader'

export default function App() {
  const [flights, setFlights] = useState<any[] | null>(null);
  const [isDirect, setIsDirect] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const directHandler = (value: boolean) => {
    setIsDirect(value);
  };

  const getFlights = (): any[] => {
    if (!flights) return [];
    if (isDirect) {
      return flights.filter(flight => flight.route.length === 1);
    } else {
      return flights;
    }
  };

  const searchHandler = async (searchData: ISearch) => {
    setIsLoading(true);
    const result = await Api.getFlights(searchData);
    setFlights(result.data);
    setIsLoading(false);
  };

  return (
    <Container>
      <SearchForm onSubmit={searchHandler}/>
      {isLoading && <Loader />}
      {flights && <FlightsList isDirect={isDirect} onChangeDirect={directHandler} data={getFlights()} />}
    </Container>
  );
}

const Container = styled.main`
  align-items: center;
  padding: 16px;
  
  @media (max-width: 550px) {
    margin: 16px auto 16px;
  }
  
  margin: 68px auto 16px;
  display: flex;
  flex-direction: column;
  max-width: 768px;
`;

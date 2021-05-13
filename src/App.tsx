import React from 'react';
import styled from 'styled-components'
import SearchForm from './components/SearchForm'

export default function App() {
  return (
    <Container>
      <SearchForm />
    </Container>
  );
}

const Container = styled.main`
  margin: 160px auto;
  display: flex;
  flex-direction: column;
  max-width: 550px;
`;

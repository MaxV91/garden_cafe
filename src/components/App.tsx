import React from 'react';
import Header from './Header';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: sans-serif;
  }
`;

const Wrapper = styled.div`

`;


const App: React.FC = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
    </Wrapper>
  );
}

export default App;

import React from 'react';
import Header from './Header';
import styled, { createGlobalStyle } from 'styled-components';
import PriceMainView from './PriceMainView';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainView from './MainView';
import ContactsMainView from './ContactsMainView';
import Footer from './Footer';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: sans-serif;
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 968px;
`;


const App: React.FC = () => {
  return (
    <Router>
      <Wrapper>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<MainView />} />
          <Route path="/price" element={<PriceMainView />} />
          <Route path="/contacts" element={<ContactsMainView />} />
        </Routes>
        <Footer />
      </Wrapper>
    </Router>
  );
}

export default App;

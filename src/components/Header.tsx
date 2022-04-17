import React from 'react';
import styled from 'styled-components';
import {NavLink, Link} from 'react-router-dom';

const Wrapper = styled.div`
  height: 60px;
  background: lightcoral;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 16px;
  
  & > a {
    width: 150px;
    cursor: pointer;
  }
`;

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Link to="/">Главная</Link>
      <Link to="/price">Прайс</Link>
      <Link to="/">Контакты</Link>
    </Wrapper>
  );
};

export default Header;
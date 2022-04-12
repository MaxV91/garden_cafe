import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 60px;
  width: 928px;
  background: lightcoral;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  
  & > div {
    width: 200px;
    cursor: pointer;
  }
`;

const Header: React.FC = () => {
  return (
    <Wrapper>
      <div>Главная</div>
      <div>Прайс</div>
      <div>Контакты</div>
    </Wrapper>
  );
};

export default Header;
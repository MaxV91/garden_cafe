import React from 'react';
import styled from 'styled-components';
import CardItem from './CardItem';

const Wrapper = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  align-items: center;
  justify-items: center;
`;

const PriceMainView: React.FC = () => {
  return (
    <Wrapper>
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
    </Wrapper>
  )
};

export default PriceMainView;

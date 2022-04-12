import React from 'react';
import styled from 'styled-components';
import CardItem from './CardItem';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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

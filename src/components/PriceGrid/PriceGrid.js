import styled from 'styled-components';
import PriceTile from '../PriceTile';

const Wrapper = styled.div`
  width: 968px;
  margin: 0 auto;
  display: grid;
  grid-gap: 20px;
  align-items: center;
  grid-template-columns: repeat(5, 1fr);
`;

const PriceGrid = () => {
  return (
    <Wrapper>
      <PriceTile />
      <PriceTile />
      <PriceTile />
      <PriceTile />
      <PriceTile />
      <PriceTile />
      <PriceTile />
      <PriceTile />
      <PriceTile />
      <PriceTile />
    </Wrapper>
  )
}

export default PriceGrid;

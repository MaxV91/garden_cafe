import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 240px;
  height: 320px;
`;

const CardItem: React.FC = () => {
  return (
    <Wrapper>
      <div className="img">изобр</div>
      <div className="title">название</div>
      <div className="desc">описание</div>
      <div className="cost">цена</div>
    </Wrapper>
  )
};

export default CardItem;

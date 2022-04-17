import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 240px;
  height: 320px;
  background: lightgrey;
  display: flex;
  flex-direction: column;
  padding: 15px;
  
  .img {
    height: 65%;
    border-radius: 10px;
    background-color: red;
  }
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

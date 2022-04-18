import React from 'react';
import styled from 'styled-components';
// @ts-ignore
import pureshka from './../assets/img/pureshka.png';

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
  
  .bottom_section {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const CardItem: React.FC = () => {
  return (
    <Wrapper>
      <img src={pureshka} alt="pureshka" className="img" />
      <div className="bottom_section">
        <div className="title">название</div>
        <div className="desc">описание</div>
        <div className="cost">цена</div>
      </div>
    </Wrapper>
  )
};

export default CardItem;

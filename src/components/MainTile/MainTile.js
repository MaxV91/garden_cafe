import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Wrapper = styled.div`
  height: 500px;
  display: flex;
  
  .left_side {
    //background: gray;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
  }
  
  .right_side {
    //background: lightgreen;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    & > button {
      height: 40px;
      padding: 10px 15px;
      display: flex;
      justify-content: center;
      border-radius: 20px;
      outline: none;
      cursor: pointer;
      border: none;
      background: yellow;
      
      &:hover {
        background: yellow;
      }
      
      a {
        text-decoration: none;
        font-family: sans-serif;
        color: gray;
        font-size: 16px;
      }
    }
  }
`;

const MainTile = () => {
  return (
    <Wrapper>
      <div className="left_side">
        <div>bla</div>
        <div>bla</div>
        <div>bla</div>
      </div>
      <div className="right_side">
        <button>
          <Link to="/price">Прайс</Link>
        </button>
      </div>
    </Wrapper>
  );
};

export default MainTile;

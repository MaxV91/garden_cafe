import styled from 'styled-components'
import MainTile from '../../components/MainTile';

const Wrapper = styled.div`
  width: 968px;
  margin: 15px auto;
  
  .main_tile {
    height: 500px;
    display: flex;
    
    .left_side {
      background: gray;
      display: flex;
      flex-grow: 1;
    }
    
    .right_side {
      background: lightgreen;
      display: flex;
      flex-grow: 1;
    }
  }
`;

const MainPage = () => {
  return (
    <Wrapper>
      <MainTile />
    </Wrapper>
  )
};

export default MainPage;

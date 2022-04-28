import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Wrapper = styled.div`
  //background: lightgreen;
  height: 60px;
  
  
  .container {
    height: 60px;
    width: 968px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    
    & > a {
      font-family: sans-serif;
      color: gray;
      display: flex;
      align-items: center;
      margin-left: 40px;
      text-decoration: none;
    }
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <div className="container">
        <Link to="/">Главная</Link>
        <Link to="/price">Прайс</Link>
        <Link to="/contacts">Контакты</Link>
      </div>
    </Wrapper>
  )
};

export default Header;

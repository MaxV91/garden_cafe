import {Link} from 'react-router-dom';


const Header = () => {
  return (
    <div>
      <Link to="/">Главная</Link>
      <Link to="/price">Прайс</Link>
      <Link to="/contacts">Контакты</Link>
    </div>
  )
};

export default Header;

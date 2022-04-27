import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainPage from '../../pages/MainPage';
import PricePage from '../../pages/PricePage';
import ContactsPage from '../../pages/ContactsPage';
import Header from '../Header';

const App = () => {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/price" element={<PricePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </Router>
  )
};

export default App;

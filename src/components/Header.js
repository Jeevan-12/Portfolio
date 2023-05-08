import NavLinks from './NavLinks';
import '../index.css';
import logo from '../images/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <h4 className="logo">G 1</h4>
      {/* <img className="logo" /> */}
      <NavLinks />
    </header>
  );
};

export default Header;

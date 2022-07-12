import { Link } from 'react-router-dom';
import Logo from '../logo/logo';

function Header(): JSX.Element {
  return (
    <header className="page-header">
      <Logo />

      <div className="user-block">
        <Link to='/login' title='/login' className="user-block__link">Sign in</Link>
      </div>
    </header>
  );
}

export default Header;

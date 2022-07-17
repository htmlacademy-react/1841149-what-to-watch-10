import { Link } from 'react-router-dom';
import Logo from '../logo/logo';

type HeaderProps = {
  isLogined: boolean;
}

function Header({isLogined}: HeaderProps): JSX.Element {
  return (
    <header className="page-header">
      <Logo />

      {isLogined ?
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <a className="user-block__link">Sign out</a>
          </li>
        </ul> :
        <div className="user-block">
          <Link to='/login' title='/login' className="user-block__link">Sign in</Link>
        </div>}

    </header>
  );
}

export default Header;

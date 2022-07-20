import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Film } from '../../types/films';
import Details from '../details/details';
import Overview from '../overview/overview';
import Reviews from '../reviews/reviews';

type TabsProps = {
  films: Film[];
}

function Tabs({films}: TabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState('Overview');
  const params = useParams();
  const film = films.find((filmA) => String(filmA.id) === params.id) as Film;

  const onTabClickHandler = (e: React.MouseEvent) => {
    if (e.currentTarget.textContent !== null) {
      setActiveTab(e.currentTarget.textContent);
    }
  };

  const renderSwitch = (tab: string) => {
    switch(tab) {
      case 'Overview':
        return <Overview film={film} />;
      case 'Details':
        return <Details film={film} />;
      case 'Reviews':
        return <Reviews film={film} />;
    }
  };

  return (
    <>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li
            className={activeTab === 'Overview' ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}
          >
            <button className="film-nav__link" onClick={onTabClickHandler}>Overview</button>
          </li>
          <li
            className={activeTab === 'Details' ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}
          >
            <button className="film-nav__link" onClick={onTabClickHandler}>Details</button>
          </li>
          <li
            className={activeTab === 'Reviews' ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}
          >
            <button className="film-nav__link" onClick={onTabClickHandler}>Reviews</button>
          </li>
        </ul>
      </nav>
      {renderSwitch(activeTab)}
    </>
  );
}

export default Tabs;

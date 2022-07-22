import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { Film } from '../../types/films';
import { useNavigate } from 'react-router-dom';
import Catalog from '../../components/catalog/catalog';

type mainScreenProps = {
  title: string,
  genre: string,
  year: number,
  films: Film[],
  isLogined: boolean,
};

function MainScreen({title, genre, year, films, isLogined}: mainScreenProps): JSX.Element {
  const navigate = useNavigate();

  const myListButtonClickHandler = () => {
    const path = '/mylist';
    navigate(path);
  };

  const playButtonClickHandler = () => {
    const path = '/player/:1';
    navigate(path);
  };

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header isLogined={isLogined}/>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{year}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button" onClick={() => playButtonClickHandler()}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button" onClick={() => myListButtonClickHandler()} >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">{films.length}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <Catalog films={films} />

        <Footer />
      </div>
    </>
  );
}

export default MainScreen;

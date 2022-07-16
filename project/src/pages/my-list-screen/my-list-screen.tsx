import { useState } from 'react';
import FilmCard from '../../components/film-card/film-card';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import { Film } from '../../types/films';

type MyListScreenProps = {
  films: Film[];
}

function MyListScreen({films}: MyListScreenProps): JSX.Element {
  const [count, setActiveCard] = useState(0);

  const setActive = (id: number) => {
    setActiveCard(id);
    console.log(count);
  };

  const filmsList =
    films &&
    films.map((film) => (
      <FilmCard key={film.id} id={film.id} previewImage={film.previewImage} name={film.name} setActiveCard={setActive}/>
    ));

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{films.length}</span></h1>
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <a className="user-block__link">Sign out</a>
          </li>
        </ul>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {filmsList}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MyListScreen;

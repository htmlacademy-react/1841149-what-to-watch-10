import { useState } from 'react';
import FilmCard from '../../components/film-card/film-card';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { Film } from '../../types/films';

type MyListScreenProps = {
  films: Film[];
  isLoggined: boolean;
}

function MyListScreen({films, isLoggined}: MyListScreenProps): JSX.Element {
  const [count, setActiveCard] = useState(0);

  const setActive = (id: number) => {
    setActiveCard(id);
  };

  const filmsList =
    films &&
    films.map((film) => (
      <FilmCard key={film.id} id={film.id} previewImage={film.previewImage} name={film.name} setActiveCard={setActive}/>
    ));

  return (
    <div className="user-page">
      <Header isLogined={isLoggined}/>

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

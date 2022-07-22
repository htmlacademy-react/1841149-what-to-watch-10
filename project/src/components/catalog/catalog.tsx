import { Film } from '../../types/films';
import GenresList from '../genres-list/genres-list';
import FilmsList from '../../components/films-list/films-list';
import { useAppSelector } from '../../hooks';
import { CARDS_PER_STEP } from '../../const';
import ShowMoreButton from '../../components/show-more-button/show-more-button';

type DetailsProps = {
  films: Film[];
}

function Catalog({films}: DetailsProps): JSX.Element {
  const selectedGenre = useAppSelector((state) => state.genre);

  const sortedFilms = films.filter((film) => selectedGenre === 'All genres' ? films : film.genre === selectedGenre);

  const renderShowMoreButton = sortedFilms.length > CARDS_PER_STEP ? <ShowMoreButton /> : null;

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresList />

      <FilmsList films={sortedFilms}/>

      {renderShowMoreButton}

    </section>
  );
}

export default Catalog;

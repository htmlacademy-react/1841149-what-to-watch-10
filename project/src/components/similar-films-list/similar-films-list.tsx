import { Film } from '../../types/films';
import FilmsList from '../films-list/films-list';

type SimilarFilmsListProps = {
  similarFilms: Film[];
}

function SimilarFilmsList({similarFilms}: SimilarFilmsListProps): JSX.Element {
  const maxCardAmount = 4;
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      {similarFilms.length > 0 ? <FilmsList films={similarFilms.slice(0, maxCardAmount)}/> : <p>We are sory but we can&apos;t find siimilar films in out database</p>}
    </section>
  );
}

export default SimilarFilmsList;

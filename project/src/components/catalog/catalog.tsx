import GenresList from '../genres-list/genres-list';
import FilmsList from '../../components/films-list/films-list';

function Catalog(): JSX.Element {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresList />

      <FilmsList />

    </section>
  );
}

export default Catalog;

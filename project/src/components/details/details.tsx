import { useParams, Link } from 'react-router-dom';
import { Film } from '../../types/films';

type DetailsProps = {
  films: Film[];
}

function Details({films}: DetailsProps): JSX.Element {
  const params = useParams();
  const film = films.find((filmA) => String(filmA.id) === params.id) as Film;
  return (
    <>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className="film-nav__item film-nav__item--active">
            <Link to={`/films/${film.id}`} className="film-nav__link">Overview</Link>
          </li>
          <li className="film-nav__item">
            <Link to='#' className="film-nav__link">Details</Link>
          </li>
          <li className="film-nav__item">
            <Link to={`/films/${film.id}/reviews`} className="film-nav__link">Reviews</Link>
          </li>
        </ul>
      </nav>
      <div className="film-card__text film-card__row">
        <div className="film-card__text-col">
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Director</strong>
            <span className="film-card__details-value">Wes Anderson</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Starring</strong>
            <span className="film-card__details-value" >
              Bill Murray, <br />
              Edward Norton, <br />
              Jude Law, <br />
              Willem Dafoe, <br />
              Saoirse Ronan, <br />
              Tony Revoloru, <br />
              Tilda Swinton, <br />
              Tom Wilkinson, <br />
              Owen Wilkinson, <br />
              Adrien Brody, <br />
              Ralph Fiennes, <br />
              Jeff Goldblum
            </span>
          </p>
        </div>

        <div className="film-card__text-col">
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Run Time</strong>
            <span className="film-card__details-value">{film.runTime}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Genre</strong>
            <span className="film-card__details-value">{film.genre}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Released</strong>
            <span className="film-card__details-value">{film.released}</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Details;

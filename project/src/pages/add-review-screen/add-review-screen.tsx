import { Link, useParams } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import SendingCommentsForm from '../../components/sending-comments-form/sending-comments-form';
import { Film } from '../../types/films';

type AddReviewScreenProps = {
  films: Film[]
}

function AddReviewScreen({ films }: AddReviewScreenProps): JSX.Element {
  const params = useParams();
  const film = films.find((filmA) => String(filmA.id).includes(params.id ? params.id.slice(1) : '0')) as Film;

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.posterImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/:${film.id}`} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

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

        <div className="film-card__poster film-card__poster--small">
          <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <SendingCommentsForm />
      </div>

    </section>
  );
}

export default AddReviewScreen;

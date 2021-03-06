import { Link } from 'react-router-dom';

type FilmCardProps = {
  id: number;
  previewImage: string;
  name: string;
}

function FilmCard({id, previewImage, name}: FilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <Link to={`/films/${id}`} title={`/films/${id}`} className="small-film-card__link">
        <div className="small-film-card__image">
          <img src={previewImage} alt={name} width="280" height="175" />
        </div>
        <h3 className="small-film-card__title">
          {name}
        </h3>
      </Link>
    </article>
  );
}

export default FilmCard;

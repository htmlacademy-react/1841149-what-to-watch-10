import { useAppSelector } from '../../hooks';
import ShowMoreButton from '../show-more-button/show-more-button';
import VideoPlayer from '../video-player/video-player';

function FilmsListWithButton(): JSX.Element {
  const films = useAppSelector((state) => state.films);
  const selectedGenre = useAppSelector((state) => state.genre);

  const sortedFilms = films.filter((film) => selectedGenre === 'All genres' ? films : film.genre === selectedGenre);

  const filmsList =
      sortedFilms.map((film, index) => (
        <VideoPlayer key={film.id} film={film} index={index}/>
      ));

  return (
    <>
      <div className="catalog__films-list">
        {filmsList}
      </div>
      <ShowMoreButton sortedFilms={sortedFilms} />
    </>
  );
}

export default FilmsListWithButton;

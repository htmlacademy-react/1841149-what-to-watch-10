import { useState } from 'react';
import { Film } from '../../types/films';
import VideoPlayer from '../video-player/video-player';

type FilmListProps = {
  films: Film[];
}

function FilmsList({films}: FilmListProps): JSX.Element {
  const [selectedFilm, setActiveCard] = useState({});

  const setActive = (id: number) => {
    const activeFilm = films.filter((film) => film.id === id);
    setActiveCard(activeFilm);
  };

  const filmsList =
      films?.map((film) => (
        <VideoPlayer key={film.id} film={film} setActiveCard={setActive}/>
      ));

  return (
    <div className="catalog__films-list">
      {filmsList}
    </div>
  );
}

export default FilmsList;

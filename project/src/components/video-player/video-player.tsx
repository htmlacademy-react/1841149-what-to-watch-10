import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Film } from '../../types/films';


type VideoPlayerProps = {
  film: Film;
  setActiveCard: (id: number) => void;
}

function VideoPlayer({film, setActiveCard}: VideoPlayerProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    videoRef.current.addEventListener('loadeddata', () => setIsLoading(false));

    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    videoRef.current.load();
  }, [isPlaying]);

  return (
    <article className="small-film-card catalog__films-card"
      onMouseOver={() => {
        setActiveCard(film.id);
        setIsPlaying(true);
      }}
      onMouseOut={() => {
        setIsPlaying(false);
      }}
    >
      <Link to={`/films/${film.id}`} title={`/films/${film.id}`} className="small-film-card__link">
        <video height="175" ref={videoRef} src={film.previewVideoLink} muted poster={film.previewImage}/>
        <h3 className="small-film-card__title">
          {film.name}
        </h3>
      </Link>
    </article>
  );
}

export default VideoPlayer;


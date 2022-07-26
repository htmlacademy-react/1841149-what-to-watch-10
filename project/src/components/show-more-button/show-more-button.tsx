import { CARDS_PER_STEP } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { showMoreFilms } from '../../store/action';


function ShowMoreButton(): JSX.Element {
  const dispatch = useAppDispatch();
  const filmsToShow = useAppSelector((state) => state.renderedFilmCount);

  const onShowMoreButtonClickHandler = () => {
    dispatch(showMoreFilms(filmsToShow + CARDS_PER_STEP));
  };

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={onShowMoreButtonClickHandler}>Show more</button>
    </div>
  );
}

export default ShowMoreButton;

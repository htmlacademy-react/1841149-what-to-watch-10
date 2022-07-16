import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import MoviePageInListScreen from '../../pages/movie-page-screen/movie-page-in-list-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import PageNotFoundScreen from '../../pages/page-not-found-screen/page-not-found-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import { Film } from '../../types/films';
import PrivateRoute from '../private-route/private-route';

type AppScreenProps = {
  title: string,
  genre: string,
  year: number,
  films: Film[],
};

function App({title, genre, year, films}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element=
            {
              <MainScreen
                title={title}
                genre={genre}
                year={year}
                films={films}
              />
            }
        />
        <Route
          path={AppRoute.Login}
          element={<SignInScreen />}
        />
        <Route
          path={AppRoute.MyList}
          element=
            {
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}
              >
                <MyListScreen films={films}/>
              </PrivateRoute>
            }
        />
        <Route path={AppRoute.Film} element={<MoviePageInListScreen films={films} />}>
          <Route path=":id" element={<MoviePageInListScreen films={films} />} />
        </Route>
        <Route path={AppRoute.Player} element={<PlayerScreen films={films}/>}>
          <Route path=":id" element={<PlayerScreen films={films}/>} />
        </Route>
        <Route
          path={AppRoute.AddReview}
          element={<AddReviewScreen films={films}/>}
        />
        <Route
          path={AppRoute.NotFound}
          element={<PageNotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

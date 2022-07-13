import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import MoviePageInListScreen from '../../pages/movie-page-screen/movie-page-in-list-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import PrivateRoute from '../private-route/private-route';

type AppScreenProps = {
  title: string,
  genre: string,
  year: number
};

function App({title, genre, year}: AppScreenProps): JSX.Element {
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
                authorizationStatus={AuthorizationStatus.NoAuth}
              >
                <MyListScreen />
              </PrivateRoute>
            }
        />
        <Route
          path={AppRoute.Film}
          element={<MoviePageInListScreen />}
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerScreen />}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReviewScreen />}
        />
        <Route
          path={AppRoute.NotFound}
          element=
            {
              <>
                <h1>
                  404.
                  <br />
                  <small>Page not found</small>
                </h1>
                <Link to={AppRoute.Root}>Go to main page</Link>
              </>
            }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

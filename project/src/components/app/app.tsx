import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import MoviePageLayout from '../../pages/movie-page-screen/movie-page-layout';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import PageNotFoundScreen from '../../pages/page-not-found-screen/page-not-found-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import { Film } from '../../types/films';
import Details from '../details/details';
import Overview from '../overview/overview';
import PrivateRoute from '../private-route/private-route';
import Reviews from '../review/reviews';

type AppScreenProps = {
  title: string,
  genre: string,
  year: number,
  films: Film[],
  isLogined: boolean,
};

function App({title, genre, year, films, isLogined}: AppScreenProps): JSX.Element {
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
                isLogined
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
                <MyListScreen films={films} isLoggined={isLogined}/>
              </PrivateRoute>
            }
        />
        <Route path={AppRoute.Film} element={<MoviePageLayout films={films} isLogined={isLogined}/>}>
          <Route path=":id" element={<Overview films={films} />} />
          <Route path=":id/details" element={<Details films={films} />} />
          <Route path=":id/reviews" element={<Reviews films={films} />} />
        </Route>
        <Route path={AppRoute.Player} element={<PlayerScreen films={films}/>}>
          <Route path=":id" element={<PlayerScreen films={films}/>} />
        </Route>
        <Route
          path={AppRoute.AddReview}
          element=
            {
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}
              >
                <AddReviewScreen films={films}/>
              </PrivateRoute>
            }
        />
        <Route
          path={AppRoute.NotFound}
          element={<PageNotFoundScreen isLogined={isLogined}/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

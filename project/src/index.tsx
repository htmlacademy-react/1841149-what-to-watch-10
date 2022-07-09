import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const PROMO_FILM = {
  TITLE: 'Thor: Love and Thunder',
  GENRE: 'Adventure',
  YEAR: 2022,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      title={PROMO_FILM.TITLE}
      genre={PROMO_FILM.GENRE}
      year={PROMO_FILM.YEAR}
    />
  </React.StrictMode>,
);

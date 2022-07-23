import { createReducer } from '@reduxjs/toolkit';
import { showAnotherGenre } from './action';
import { INITAL_FILMS_GENRE } from '../const';
import { FILMS } from '../mocks/films';

const initialState = {
  genre: INITAL_FILMS_GENRE,
  films: FILMS,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(showAnotherGenre, (state, action) => {
      state.genre = action.payload;
    });
});

export {reducer};

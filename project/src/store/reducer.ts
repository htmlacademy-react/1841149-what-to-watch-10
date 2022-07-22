import { createReducer } from '@reduxjs/toolkit';
import { showAnotherGenre } from './action';
import { INITAL_FILMS_GENRE } from '../const';


const initialState = {
  genre: INITAL_FILMS_GENRE,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(showAnotherGenre, (state, action) => {
      state.genre = action.payload;
    });
});

export {reducer};

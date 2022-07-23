import { createAction } from '@reduxjs/toolkit';

export const showAnotherGenre = createAction('films/showAnotherGenre', (value) => ({
  payload: value,
}));

import { combineReducers } from 'redux';
import { filmsReducer } from './films-reducer.js';
import { usersReducer } from './users-reducer.js';
import { postsReducer } from './posts-reducer.js';
import { sidebarReducer } from './sidebar-reducer.js';

export const rootReducer = combineReducers({
  filmsReducer,
  usersReducer,
  postsReducer,
  sidebarReducer,
})

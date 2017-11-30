import { combineReducers } from 'redux';

import booksReducer from './books_reducer';
import bookshelvesReducer from './bookshelves_reducer';

const entitiesReducer = combineReducers({
    books: booksReducer,
    bookshelves: bookshelvesReducer,
});

export default entitiesReducer;
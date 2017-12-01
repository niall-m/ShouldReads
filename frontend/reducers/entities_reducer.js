import { combineReducers } from 'redux';

import booksReducer from './books_reducer';
import bookshelvesReducer from './bookshelves_reducer';
import reviewsReducer from './reviews_reducer';

const entitiesReducer = combineReducers({
    books: booksReducer,
    bookshelves: bookshelvesReducer,
    reviews: reviewsReducer,
});

export default entitiesReducer;
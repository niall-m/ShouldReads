import { combineReducers } from 'redux';

import BooksReducer from './books_reducer';
import BookshelvesReducer from './bookshelves_reducer';
import ReviewsReducer from './reviews_reducer';
import SearchReducer from './search_reducer';

const EntitiesReducer = combineReducers({
    books: BooksReducer,
    bookshelves: BookshelvesReducer,
    reviews: ReviewsReducer,
    searchResults: SearchReducer
});

export default EntitiesReducer;
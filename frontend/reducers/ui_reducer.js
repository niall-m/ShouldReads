import { combineReducers } from 'redux';

import books from './loading_reducers/load_book_reducer';
import bookshelves from './loading_reducers/load_bookshelf_reducer';

export default combineReducers({
    books,
    bookshelves,
});